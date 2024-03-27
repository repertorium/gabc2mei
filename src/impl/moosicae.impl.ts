import {
    DiatonicPitchC, DiatonicPitchF, DiatonicPitchG,
    EClefShapes,
    ELineOrSpace,
    IAlteration,
    IClef,
    IDiatonicPitch,
    IId,
    ImOOsicaeFactory,
    IPitch,
    IPositionInStaff, mOOsicaeFactory
} from "../index";

export class PositionInStaff implements IPositionInStaff {
    lineOrSpace: ELineOrSpace;
    position: number;
    _index: number;

    constructor(lineOrSpace: ELineOrSpace, position: number) {
        this.lineOrSpace = lineOrSpace;
        this.position = position;
        if (lineOrSpace == ELineOrSpace.space) {
            this._index = position * 2 - 1;
        } else if (lineOrSpace == ELineOrSpace.line) {
            this._index = (position - 1) * 2;
        } else {
            throw new Error('Invalid line or space: ' + ELineOrSpace[lineOrSpace]);
        }
    }

    get index(): number {
        return this._index;
    }

    equals(other: IPositionInStaff): boolean {
        return this.position == other.position && this.lineOrSpace == other.lineOrSpace;
    }

    static create(index: number): PositionInStaff {
        if (index % 2 == 0) {
            return new PositionInStaff(ELineOrSpace.line, index / 2 + 1);
        } else {
            return new PositionInStaff(ELineOrSpace.space, (index + 1) / 2);
        }
    }
}

export class IDImpl implements IId {
    generated: boolean;
    value: string;

    constructor(generated: boolean, value: string) {
        this.generated = generated;
        this.value = value;
    }
}

export class Pitch implements IPitch {
    alteration?: IAlteration;
    diatonicPitch: IDiatonicPitch;
    octave: number;


    constructor(diatonicPitch: IDiatonicPitch, octave: number, alteration?: IAlteration) {
        this.diatonicPitch = diatonicPitch;
        this.alteration = alteration;
        this.octave = octave;
    }
}

const PITCH_CLASS_NAMES = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
const STEPS_FROM_C = [0, 2, 4, 5, 7, 9, 11];


export class DiatonicPitch implements IDiatonicPitch {
    order: number;
    name: string;
    stepsFromC: number;

    constructor(order: number) {
        if (order < 0 || order >= 7) {
            throw new Error('Diatonic pitch out of range ' + order);
        }
        this.order = order;
        this.name = PITCH_CLASS_NAMES[order];
        this.stepsFromC = STEPS_FROM_C[order];
    }


    compareTo(other: IDiatonicPitch): number {
        return this.order - other.order;
    }

    equals(other: IDiatonicPitch): boolean {
        return this.order == other.order;
    }

}

export class Clef implements IClef {
    id: IId;
    signShape: EClefShapes;
    line?: number;
    octaveTransposition?: number;
    private readonly bottomLineDiatonicPitch: IDiatonicPitch;
    private readonly bottomLineOctave: number;

    constructor(id: IId, signType: EClefShapes, line?: number, octaveTransposition?: number) {
        this.id = id;
        this.signShape = signType;
        this.line = line;
        this.octaveTransposition = octaveTransposition;

        // compute staff bottom line diatonic pitch
        let note: IDiatonicPitch | undefined;
        let noteOctave = 0;
        switch (signType) {
            case EClefShapes.C:
                note = DiatonicPitchC;
                noteOctave = 4; //TODO
                break;
            case EClefShapes.F:
                note = DiatonicPitchF;
                noteOctave = 3;
                break;
            case EClefShapes.G:
                note = DiatonicPitchG;
                noteOctave = 4;
                break;
        }
        let noteOrder = 0;
        const lineValue = line ? line : 0;  // for percussion, tab, etc..
        if (note) {
            const octaveCorrection = octaveTransposition ? octaveTransposition : 0;
            noteOrder = note.order + (noteOctave + octaveCorrection) * 7;
        }
        const bottomLineNoteOrder: number = noteOrder - (lineValue - 1) * 2;
        this.bottomLineDiatonicPitch = mOOsicaeFactory.createDiatonicPitchFromOrder(bottomLineNoteOrder % 7);
        this.bottomLineOctave = Math.trunc(bottomLineNoteOrder / 7);

    }


    getBottomLineDiatonicPitch(): IDiatonicPitch {
        return this.bottomLineDiatonicPitch;
    }

    getBottomLineOctave(): number {
        return this.bottomLineOctave;
    }
}



export class mOOsicaeFactoryImpl implements ImOOsicaeFactory {

    createDiatonicPitchFromOrder(order: number): IDiatonicPitch {
        return new DiatonicPitch(order);
    }


    public createPitchFromPositionInStaff(lastClef: IClef, positionInStaff: IPositionInStaff, alteration?: IAlteration): IPitch {
        const bottomClefOctave = lastClef.getBottomLineOctave();
        const bottomClefNoteName: IDiatonicPitch = lastClef.getBottomLineDiatonicPitch();
        const intervalWithC: number = bottomClefNoteName.order - DiatonicPitchC.order;
        const lineSpace: number = positionInStaff.index;

        let octaveDifference: number = Math.trunc((lineSpace + intervalWithC) / 7);
        let diatonicPitchDifference: number = lineSpace % 7;
        if (diatonicPitchDifference < 0) {
            diatonicPitchDifference = diatonicPitchDifference + 7;
            if (intervalWithC == 0) {
                octaveDifference--;
            }
        }
        const order = (diatonicPitchDifference + bottomClefNoteName.order)%7;
        const diatonicPitch: IDiatonicPitch = this.createDiatonicPitchFromOrder(order);
        const octave: number = (octaveDifference + bottomClefOctave);
        return this.createPitch(diatonicPitch, octave, alteration);
    }

    public createPitch(diatonicPitch: IDiatonicPitch, octave: number, alteration?: IAlteration): IPitch {
        return new Pitch(diatonicPitch, octave, alteration);
    }

    createClef(id: IId, clefSign: EClefShapes, line?: number, octaveTransposition?: number): IClef {
        return new Clef(id, clefSign, line, octaveTransposition);
    }
    public createPositionInStaff(lineOrSpace: ELineOrSpace, position: number): IPositionInStaff {
        return new PositionInStaff(lineOrSpace, position);
    }

    createPositionInStaffFromAbsoluteLineSpace(index: number): IPositionInStaff {
        return PositionInStaff.create(index);
    }
}
