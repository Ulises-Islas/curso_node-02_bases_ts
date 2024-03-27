const { httpClient } = require('../plugins');

export const getPokemonById = async (id: string|number) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const pokemon = await httpClient.get(url);
    return pokemon.name;
    //return fetch( url).then((res) => res.json()).then((data) => data.name); 
}