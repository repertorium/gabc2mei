import {ELineOrSpace, IPositionInStaff, mOOsicaeFactory} from "../index";

export function gabcPitchToPositionInStaff(gabcPitch: string): IPositionInStaff {
    if (gabcPitch < 'a' || gabcPitch > 'm') {
        throw new Error('Invalid GABC pitch "' + gabcPitch + '"');
    }

    const bottomPositionInStaff = mOOsicaeFactory.createPositionInStaff(ELineOrSpace.space, -1);
    const index = bottomPositionInStaff.index + (gabcPitch.charCodeAt(0) - 'a'.charCodeAt(0));
    //console.log('index for '+ gabcPitch + ' -> ' + index);
    return mOOsicaeFactory.createPositionInStaffFromAbsoluteLineSpace(index);
}
