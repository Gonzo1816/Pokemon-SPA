const homeView = {
    render() {
        const appDiv = document.getElementById('app');
        appDiv.innerHTML = `
            <div class="container">
                <h1>Pokémon Image Fetcher</h1>
                <label for="pokemon-name">Insert the name of the Pokémon:</label>
                <input type="text" id="pokemon-name">
                <button id="fetch-button">Get Pokémon Image</button>
                <div id="pokemon-info">
                    <img id="pokemon-image" src="img/NotFound.png" alt="Pokémon Image">
                    <div id="pokemon-type"></div>
                    <div id="displayPokemonName"></div>
                    <div id="pokemonNumber"></div>
                </div>
            </div>
        `;
    }
};

export default homeView;