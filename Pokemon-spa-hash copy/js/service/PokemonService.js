const BASE_URL = 'https://pokeapi.co/api/v2/pokemon';

async function fetchPokemonData(pokemonName) {
    const response = await fetch(BASE_URL + '/' + pokemonName);
    if (!response.ok) {
        throw new Error('Pokémon not found');
    }
    return await response.json();
}

export default { fetchPokemonData };