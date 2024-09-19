const AbilityView = {
    render(abilities) {
        const container = document.getElementById('app');
        if (!container) {
            console.error('Element with id "ability-container" not found.');
            return;
        }

        container.innerHTML = '';  // Clear previous content

        if (abilities.length === 0) {
            container.innerHTML = '<p>No abilities found.</p>';
            return;
        }

        const list = document.createElement('ul');
        list.classList.add('list-group');
        abilities.forEach(ability => {
            const listItem = document.createElement('li');
            listItem.classList.add('list-group-item');
            listItem.textContent = ability.ability.name;
            list.appendChild(listItem);
        });
        container.appendChild(list);
    },
    
    renderError(message) {
        const container = document.getElementById('app');
        if (!container) {
            console.error('Element with id "ability-container" not found.');
            return;
        }

        container.innerHTML = `<p class="text-danger">Error: ${message}</p>`;
    }
};

export default AbilityView;
