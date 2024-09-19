import MovesView from '/js/view/MovesView.js';
import PokemonService from '/js/service/PokemonService.js';
import homeController from '/js/controler/homeController.js';


async function fetchMoves(pokemonName) {
    try {
      let moves = homeController.getMoves();
        const data = await PokemonService.fetchPokemonData(pokemonName);
        moves = data.moves;
        MovesView.render(moves);
    } catch (error) {
        MovesView.renderError(error.message);
    }
}


async function init() {
  const params = new URLSearchParams(window.location.hash.slice(2));
    const pokemonName = homeController.getSelectedPokemonName();
    if (pokemonName) {
        fetchMoves(pokemonName);
    } else {
        MovesView.renderError('No Pokémon name provided');
    }
}

export default { init };
