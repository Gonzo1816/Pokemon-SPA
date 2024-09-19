import PokemonService from '/js/service/PokemonService.js';
import CriesView from '/js/view/CriesView.js';
import homeController from '/js/controler/homeController.js';

async function fetchCries(pokemonName) {
    try {
        let cries = homeController.getCries();
        if (!cries) {
            const data = await PokemonService.fetchPokemonData(pokemonName);
            cries = data.cries;
        }
        CriesView.render(cries);
    } catch (error) {
        AboutView.renderError(error.message);
    }
}

function init() {
    const params = new URLSearchParams(window.location.hash.slice(2));
    const pokemonName = homeController.getSelectedPokemonName();
    if (pokemonName) {
        fetchCries(pokemonName);
    } else {
        CriesView.renderError('No Pokémon name provided');
    }
}

export default { init };