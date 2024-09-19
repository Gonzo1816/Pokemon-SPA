
const MovesView = {
  render(moves) {
      const container = document.getElementById('app');
      if (!container) {
          console.error('Element with id "ability-container" not found.');
          return;
      }

      container.innerHTML = '';  // Clear previous content

      if (moves.length === 0) {
          container.innerHTML = '<p>No moves found.</p>';
          return;
      }

      const list = document.createElement('ul');
      list.classList.add('list-group');
      moves.forEach(move => {
          const listItem = document.createElement('li');
          listItem.classList.add('list-group-item');
          
          // Fetch additional move details
          fetch(move.move.url)
              .then(response => response.json())
              .then(moveDetails => {
                  listItem.innerHTML = `
                      <strong>${move.move.name}</strong>
                      <br>Type: ${moveDetails.type.name}
                      <br>Power: ${moveDetails.power || 'N/A'}
                      <br>Accuracy: ${moveDetails.accuracy || 'N/A'}%
                      <br>PP: ${moveDetails.pp}
                  `;
              })
              .catch(error => {
                  console.error('Error fetching move details:', error);
                  listItem.textContent = move.move.name + ' (Error loading details)';
              });

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

export default MovesView
