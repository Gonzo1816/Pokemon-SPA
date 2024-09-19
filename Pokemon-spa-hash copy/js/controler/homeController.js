import homeView from '/js/view/homeView.js';

let abilities;

let SelectedpokemonName;

let moves;

let baseStats;

let cries;


function fetchPokemonData(pokemonName) { // esta funçao é responsavel por buscar os dados do pokemon
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
SelectedpokemonName = pokemonName;
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Pokémon not found');
            }
            return response.json();
        })
        .then(data => {
            document.getElementById('pokemon-image').src = data.sprites.front_default;
            const types = data.types.map(typeInfo => typeInfo.type.name).join(', ');
            document.getElementById('pokemon-type').textContent = `Type: ${types}`;
            document.getElementById('displayPokemonName').textContent = `Name: ${data.name}`;
            document.getElementById('pokemonNumber').textContent = `Number: ${data.id}`;
            console.log(data.types);
            abilities = data.abilities;
            moves = data.moves;
            baseStats = data.stats;
            cries = data.cries;
        })
        .catch(error => {
            document.getElementById('pokemon-image').src = 'img/NotFound.png';
            document.getElementById('pokemon-type').textContent = error.message;
        });
}

function init() {
    homeView.render();
    document.getElementById('fetch-button').addEventListener('click', () => {
        const pokemonName = document.getElementById('pokemon-name').value.toLowerCase();
        fetchPokemonData(pokemonName);
    });
}

function getAbilities() {
    return abilities;
}
function getSelectedPokemonName() {
    return SelectedpokemonName;
}
function getMoves() {
    return moves;
}
function getBaseStats() {
    return baseStats;
}
function getCries() {
    return cries;
}

export default { init, getAbilities, getSelectedPokemonName, getMoves, getBaseStats, getCries };