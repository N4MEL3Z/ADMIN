document.addEventListener("DOMContentLoaded", () => {
  const mapContainer = document.getElementById('mapContainer');
  let map;
  let currentLayer;
  let markersLayer;

  const modalOverlay = document.getElementById('modalOverlay');
  const modalTitle = document.getElementById('modalTitle');
  const modalContent = document.getElementById('modalContent');

  const locations = {
    Batangas: {
      image: '../assets/img/maps/subdivision1.png',
      size: [2000, 1500], // [height, width]
      markers: [
        // Block 18
        { pos: [1145, 601], name: "Lot A" },
        { pos: [1148, 614], name: "Lot B" },
        { pos: [1151, 624], name: "Lot C" },
        { pos: [1153.75, 636], name: "Lot D" }
      ]
    }
  };

  document.querySelectorAll('.location-card').forEach(card => {
    card.addEventListener('click', () => {
      const loc = card.dataset.location;
      if (loc !== 'Batangas') return;

      const data = locations[loc];

      // Show map container
      mapContainer.style.display = 'block';

      // Initialize map once
      if (!map) {
        map = L.map('mapContainer', {
          crs: L.CRS.Simple,
          minZoom: -2,
          maxZoom: 2,
        });

        // Temporary coordinate logger (remove later)
        map.on('click', (e) => {
          console.log('Clicked coordinates:', e.latlng);
        });
      }

      // Remove previous image and markers
      if (currentLayer) map.removeLayer(currentLayer);
      if (markersLayer) markersLayer.clearLayers();

      const bounds = [[0, 0], [data.size[1], data.size[0]]];
      currentLayer = L.imageOverlay(data.image, bounds).addTo(map);
      map.fitBounds(bounds);

      // --------------------------
      // Custom Styled Markers
      // --------------------------
      markersLayer = L.layerGroup().addTo(map);

      data.markers.forEach(m => {

        const customIcon = L.divIcon({
          className: 'custom-pin',
          html: `<div class="pin"></div>`,
          iconSize: [20, 20],
          iconAnchor: [10, 20]
        });

        const marker = L.marker(m.pos, { icon: customIcon })
          .addTo(markersLayer);

        marker.on('click', () => {
          modalTitle.textContent = m.name;
          modalContent.innerHTML = `
            <p>Details about <strong>${m.name}</strong> in Batangas</p>
          `;
          modalOverlay.classList.add('show');
        });
      });
    });
  });
});
