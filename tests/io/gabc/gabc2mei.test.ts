import * as fs from 'fs';
import 'jest-xml-matcher'
import {GABC2MEITransducer, GABC2MEIUtils} from "../../../src/grammars/gabc_mei_transducer";
import {ELineOrSpace, IPositionInStaff, mOOsicaeFactory} from "../../../src";
import {gabcPitchToPositionInStaff} from "../../../src/grammars/gabc_utils";

function check(inputFileName: string) {
    const gabcFilePath = require.resolve('./files/' + inputFileName + '.gabc');
    const meiFilePath = require.resolve('./files/' + inputFileName + '.gabc.mei');
    const gabcContents = fs.readFileSync(gabcFilePath, 'utf-8');
    const meiContents = fs.readFileSync(meiFilePath, 'utf-8');
    expect(gabcContents).toBeDefined();
    expect(meiContents).toBeDefined();
    const transducedMEI = new GABC2MEITransducer().transduce(gabcContents);
    expect(transducedMEI).toEqualXML(meiContents); // it uses jest-xml-matcher
}

function checkPositionInStaff(gabcPitch: string, expectedLineSpace: ELineOrSpace, expectedPosition: number) {
    const expectedPositionInStaff: IPositionInStaff = mOOsicaeFactory.createPositionInStaff(expectedLineSpace, expectedPosition);
    const positionInStaff: IPositionInStaff = gabcPitchToPositionInStaff(gabcPitch);
    expect(positionInStaff).toEqual(expectedPositionInStaff);
}
/*
test('gabc pitch to position in staff', () => {
    checkPositionInStaff('a', ELineOrSpace.space, -1);
    checkPositionInStaff('b', ELineOrSpace.line, 0);
    checkPositionInStaff('c', ELineOrSpace.space, 0);
    checkPositionInStaff('d', ELineOrSpace.line, 1);
    checkPositionInStaff('i', ELineOrSpace.space, 3);
    checkPositionInStaff('j', ELineOrSpace.line, 4);
    checkPositionInStaff('l', ELineOrSpace.line, 5);
    checkPositionInStaff('m', ELineOrSpace.space, 5);
});

test('just_cclef', () => {
    check('just_cclef');
});

test('clef_single_note', () => {
    check('clef_single_note');
});

test('example_podatus_clivis', () => {
    check('example_podatus_clivis');
});
*/
test('example1', () => {
    //check('example1');
    check('all_neumes_simple');
    check('neumes_combined');
    check('notes_clef_do_3');
    check('notes_clef_do_2');
    check('example1_no_climacus');
    check('virga_right');
    check('episema_horizontal');
    check('linea_punctum');
    check('linea_punctum_cavum');
    check('accents');
    check('circulus');
    check('semi_circulus');
    check('punctum_cavum');
    check('bars');
    check('syllable_simple');
    check('syllable_multiple');
    //check('notes_clef_fa_4');
});

