import StatsView from '/js/view/StatsView.js';
import homeController from '/js/controler/homeController.js';
import PokemonService from '/js/service/PokemonService.js';


async function fetchStats(pokemonName) {
    try {
        let stats = homeController.getBaseStats();
        
        if (!stats) {
            const data = await PokemonService.fetchPokemonData(pokemonName);
            stats = data.stats;
        }
        StatsView.render(stats);
    } catch (error) {
        StatsView.renderError(error.message);
    }
}


function init() {
  const params = new URLSearchParams(window.location.hash.slice(2));
    const pokemonName = homeController.getSelectedPokemonName();
    if (pokemonName) {
        fetchStats(pokemonName);
    } else {
        StatsView.renderError('No Pokémon name provided');
    }
}


export default { init };
