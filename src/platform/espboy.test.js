import fs from 'promise-fs';

import worldObject from './example.json';

import {convertWorld} from './espboy';

const normalizeBlanks = s => s.replace(/\s+/g, ' ').trim();
const containsNormalized = (s1, s2) => normalizeBlanks(s1).includes(normalizeBlanks(s2));

it('generates image offsets correctly', async () => {
	const generatedCode = convertWorld(worldObject);
	expect(containsNormalized(generatedCode, `
		#define ofs_BLANK 0
		#define ofs_TIL_a 1
		#define ofs_TIL_b 2
		#define ofs_TIL_c 4
		#define ofs_TIL_d 5
		#define ofs_SPR_A 6
		#define ofs_SPR_a 8
		#define ofs_SPR_b 10
		#define ofs_ITM_0 11
	`)).toBe(true);
});
