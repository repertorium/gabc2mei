import {mOOsicaeFactoryImpl} from "./impl/moosicae.impl";

export enum ELineOrSpace {
    line, space
}

export interface IPositionInStaff {
    /**
     * Line or space
     */
    lineOrSpace: ELineOrSpace;
    /**
     * Integer number, to be combined with lineOrSpace
     */
    position: number;
    /**
     * 0 for the bottom line, 1 for the bottom space inside the staff, 2 for the 1st line from bottom, -1 for the bottom ledger line, etc.
     * index : line or space : position
     * -2   : L : 0
     * -1   : S : 0
     * 0    : L : 1
     * 1    : S : 1
     * 2    : L : 2
     * 3    : S : 3
     */
    index: number; // derived - it will usually be computed from position and lineOrSpace

    equals(other: IPositionInStaff): boolean;
}
export enum EClefShapes {
    F, G, C, Percussion, TAB, Fpetrucci, Gpetrucci//TODO Una cosa es el signo, otra es la grafía (petrucci para G y para F)
}

export interface IDiatonicPitch {
    order: number;
    stepsFromC: number;
    name: string;

    equals(other: IDiatonicPitch): boolean;

    compareTo(other: IDiatonicPitch): number;
}


export interface IClef {
    signShape: EClefShapes;
    line?: number;
    octaveTransposition?: number;

    getBottomLineOctave(): number;

    getBottomLineDiatonicPitch(): IDiatonicPitch;
}

export interface IId {
    value: string;
    /**
     * If it is generated automatically, false if set from a file import or similar
     */
    generated: boolean;
}

export enum EAccidentalSymbols {
    TRIPLE_FLAT,
    DOUBLE_FLAT,
    FLAT,
    NATURAL,
    SHARP,
    DOUBLE_SHARP, // as two ##
    DOUBLE_SHARP_X // as x
}


/**
 * The alteration applied to the diatonic pitch that comes from the key signature, by a previous note or an accidental sign
 */
export interface IAlteration  {
    accidentalSymbol: EAccidentalSymbols;
    /**
     * E.g. -1 for flat, 1 for sharp...
     */
    modifySteps: number;
    equals(other: IAlteration): boolean;
}

export interface IPitch {
    /**
     *  We use the ISO scientific pitch octave, where the A in octave 4 is tuned to 440Hz
     *  where the A tuned to 440Hz is set to the 4th octave.
     *  R. W. Young. “Terminology for Logarithmic Frequency Units”, Journal of the Acoustical Society of America, Volume 11, Number 1, July 1939, pages 134–139, doi:10.1121/1.1916017. ISSN: 0001-4966.
     */
    octave: number;
    alteration?: IAlteration;
    diatonicPitch: IDiatonicPitch;
}



export interface ImOOsicaeFactory {

    createPositionInStaff(expectedLineSpace: ELineOrSpace, expectedPosition: number): IPositionInStaff;

    createPositionInStaffFromAbsoluteLineSpace(index: number): IPositionInStaff;

    createPitchFromPositionInStaff(lastClef: IClef, positionInStaff: IPositionInStaff, alteration?: IAlteration): IPitch;

    createClef(id: IId, clefSign: EClefShapes, line?: number, octaveTransposition?: number): IClef;

    createDiatonicPitchFromOrder(order: number): IDiatonicPitch;
}

export const mOOsicaeFactory: ImOOsicaeFactory = new mOOsicaeFactoryImpl();

export const DiatonicPitchC = mOOsicaeFactory.createDiatonicPitchFromOrder(0);
export const DiatonicPitchF = mOOsicaeFactory.createDiatonicPitchFromOrder(3);
export const DiatonicPitchG = mOOsicaeFactory.createDiatonicPitchFromOrder(4);
