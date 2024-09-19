import PokemonService from '/js/service/PokemonService.js';
import AbilityView from '/js/view/AbilityView.js';
import homeController from '/js/controler/homeController.js';

async function fetchAbilities(pokemonName) {
    try {
        let abilities = homeController.getAbilities();
        if (!abilities) {
            const data = await PokemonService.fetchPokemonData(pokemonName);
            abilities = data.abilities;
        }
        AbilityView.render(abilities);
    } catch (error) {
        AbilityView.renderError(error.message);
    }
}

function init() {
    const params = new URLSearchParams(window.location.hash.slice(2));
    const pokemonName = homeController.getSelectedPokemonName();
    if (pokemonName) {
        fetchAbilities(pokemonName);
    } else {
        AbilityView.renderError('No Pokémon name provided');
    }
}

export default { init };