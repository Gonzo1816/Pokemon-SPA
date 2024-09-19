const CriesView = {
  render(cries) {
    const container = document.getElementById('app');
      container.innerHTML = ''; // Clear previous content

      if (cries) {
          const audioElement = document.createElement('audio');
          audioElement.controls = true;
          audioElement.src = cries.latest;
          
          const label = document.createElement('p');
          label.textContent = "Pokemon Cry:";
          
          container.appendChild(label);
          container.appendChild(audioElement);
      } else {
          container.innerHTML = '<p>No cries available for this Pokemon.</p>';
      }
  },

  renderError(message) {
    const container = document.getElementById('app');
    container.innerHTML = `<p class="text-danger">Error: ${message}</p>`;
  }
};

export default CriesView;
