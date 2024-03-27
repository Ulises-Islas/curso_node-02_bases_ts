import { characters } from '../../src/js-foundation/02-destructuring';

describe('02-destructuring', () => {
    test('characters should contain pipo1 and pipo3', () => {
        expect(characters).toContain('pipo1');
        expect(characters).toContain('pipo3');
    });

    test('first character should be pipo1 and second pipo2', () => {
        const [uno, dos] = characters;
        expect(uno).toBe('pipo1');
        expect(dos).toBe('pipo2');
    });
});