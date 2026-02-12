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
        { pos: [1144, 602], name: "Lot 63" },
        { pos: [1146, 617], name: "Lot 62" },
        { pos: [1148, 627], name: "Lot 61" },
        { pos: [1150, 637], name: "Lot 60"},
        { pos: [1152, 647], name: "Lot 59"},
        { pos: [1154, 658], name: "Lot 58"},
        { pos: [1156, 670], name: "Lot 57" },
        { pos: [1158, 680], name: "Lot 56" },
        
        { pos: [1160, 691], name: "Lot 55" },
        { pos: [1162, 702], name: "Lot 54" },
        { pos: [1164, 714], name: "Lot 53" },
        { pos: [1166, 724], name: "Lot 52" },
        { pos: [1168, 738], name: "Lot 51" },

        { pos: [1170, 748], name: "Lot 50" },
        { pos: [1172, 760], name: "Lot 49" },
        { pos: [1174, 772], name: "Lot 48" },
        { pos: [1176, 782], name: "Lot 47" },
        { pos: [1178, 794], name: "Lot 46" },

        { pos: [1180, 802], name: "Lot 45" },
        { pos: [1182, 814], name: "Lot 44" },
        { pos: [1184, 825], name: "Lot 43" },
        { pos: [1186, 835], name: "Lot 42" },
        { pos: [1188, 847], name: "Lot 41" },

        { pos: [1190, 858], name: "Lot 40" },
        { pos: [1192, 870], name: "Lot 39" },
        { pos: [1194, 880], name: "Lot 38" },
        { pos: [1196, 896], name: "Lot 37" },
        { pos: [1198, 906], name: "Lot 36" },

        { pos: [1200, 916], name: "Lot 35" },
        { pos: [1202, 928], name: "Lot 34" },
        { pos: [1204, 938], name: "Lot 33" },
        { pos: [1206, 950], name: "Lot 32" },
        { pos: [1208, 962], name: "Lot 31" },

        { pos: [1210, 972], name: "Lot 30" },
        { pos: [1212, 982], name: "Lot 29" },
        { pos: [1214, 994], name: "Lot 28" },
        { pos: [1216, 1004], name: "Lot 27" },
        { pos: [1218, 1018], name: "Lot 26" },

        { pos: [1220, 1028], name: "Lot 25" },
        { pos: [1222, 1038], name: "Lot 24" },
        { pos: [1224, 1048], name: "Lot 23" },
        { pos: [1226, 1058], name: "Lot 22" },
        { pos: [1228, 1068], name: "Lot 21" },

        { pos: [1230, 1078], name: "Lot 20" }
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
