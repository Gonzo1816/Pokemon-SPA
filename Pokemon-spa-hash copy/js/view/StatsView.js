const StatsView = {
  render(stats) {
      const container = document.getElementById('app');
      if (!container) {
          console.error('Element with id "stats-container" not found.');
          return;
      }

      container.innerHTML = '';  // Clear previous content

      if (stats.length === 0) {
          container.innerHTML = '<p>Could not find base stats.</p>';
          return;
      }

      const list = document.createElement('ul');
      list.classList.add('list-group');
      stats.forEach(stats => {
          const listItem = document.createElement('li');
          listItem.classList.add('list-group-item');
          listItem.textContent =  `${stats.stat.name}: ${stats.base_stat}`;
          list.appendChild(listItem);
      });
      container.appendChild(list);
  },
  
  renderError(message) {
      const container = document.getElementById('app');
      if (!container) {
          console.error('Element with id "stats-container" not found.');
          return;
      }

      container.innerHTML = `<p class="text-danger">Error: ${message}</p>`;
  }
};

export default StatsView;
