import { getPokemonById } from '../../src/js-foundation/06-promises';

describe('06-promises', () => {
    test('getPokemonById should return a pokemon', async () => {
        const pokemonId = 1;
        const pokemonName = await getPokemonById(pokemonId);
        expect(pokemonName).toBe('bulbasaur');
    });

    test('should return an error if pokemon does not exist', async () => {
        const pokemonId = 999999;
        const pokemonName = await getPokemonById(pokemonId);
        expect(pokemonName).toBe(`Pokemon with id ${pokemonId} not found`);
    });
});
