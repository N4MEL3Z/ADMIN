// map.js
import { PROJECT_MARKERS } from './marker.js';


document.addEventListener("DOMContentLoaded", () => {

  const mapContainer = document.getElementById('mapContainer');

  let map;
  let currentLayer;
  let markersLayer;
  let activeProject = null;

  // =========================
  // PROJECT MAP CONFIG
  // =========================
  const MAPS = {
    "STO.TOMAS PHASE 1": { image: '../assets/img/maps/subdivision1.png', size: [2000, 1500], block: "A" },
    "Imperial Meadows": { image: '../assets/img/maps/ISM SITE MAP.jpg', size: [2000, 1500], block: "B" },
    "Brgy. Tartaria": { image: '../assets/img/maps/Silang Cavite.jpg', size: [2000, 1500], block: "C" },
    "Rancho Imperial": { image: '../assets/img/maps/Rancho imperial de Silang-Model with color.jpg', size: [2000, 1500], block: "D" },
    "Tagaytay Meridien": { image: '../assets/img/maps/Tagaytay Meridien map 1.jpg', size: [2000, 1500], block: "E" },
    "The Venetto Heights": { image: '../assets/img/maps/The-Venetto-Heights-Updated-2014-Model.jpg', size: [2000, 1500], block: "F" },
    "Trece Martires": { image: '../assets/img/maps/W-Trece Martires.jpg', size: [2000, 1500], block: "G" },
    "Padre Garcia": { image: '../assets/img/maps/PADRE GARCIA phase1.jpg', size: [2000, 1500], block: "G" },
    "Priya Meridian": { image: '../assets/img/maps/Priya Meridian.jpg', size: [2000, 1500], block: "G" },
    "Cinta Dessa": { image: '../assets/img/maps/Cinta Dessa.jpg', size: [2000, 1500], block: "G" }
  };

  // =========================
  // LOCATION CLICK
  // =========================
  document.querySelectorAll('.location-card').forEach(card => {
    card.addEventListener('click', () => {
      const projectKey = card.dataset.location;
      const projectData = MAPS[projectKey];
      if (!projectData) return;

      activeProject = projectKey;
      mapContainer.style.display = 'block';

      if (!map) {
        map = L.map('mapContainer', { crs: L.CRS.Simple, minZoom: -1, maxZoom: 2 });
        map.on('click', e => console.log("Clicked at pixel coords:", e.latlng));
      }

      if (currentLayer) map.removeLayer(currentLayer);
      if (markersLayer) map.removeLayer(markersLayer);

      const bounds = [[0, 0], [projectData.size[1], projectData.size[0]]];
      currentLayer = L.imageOverlay(projectData.image, bounds).addTo(map);
      map.fitBounds(bounds);

      markersLayer = L.layerGroup().addTo(map);

      const projectMarkers = PROJECT_MARKERS[projectKey] || [];

      projectMarkers.forEach(markerData => {
        const lotNumber = markerData.name.replace("Lot ", "");

        const residentsInLot = residents.filter(r =>
          r.project === projectKey &&
          r.block === projectData.block &&
          r.lot === lotNumber
        );

        let pinClass = "no-resident";
        if (residentsInLot.length > 0) {
          const allActive = residentsInLot.every(r => r.status === "active");
          const allInactive = residentsInLot.every(r => r.status === "inactive");

          if (allActive) pinClass = "active-resident";
          else if (allInactive) pinClass = "inactive-resident";
          else pinClass = "mixed-resident";
        }

        const icon = L.divIcon({
          className: `custom-pin ${pinClass}`,
          html: `<div class="pin"></div>`,
          iconSize: [20, 20],
          iconAnchor: [10, 20]
        });

        const marker = L.marker(markerData.pos, { icon }).addTo(markersLayer);

        marker.bindTooltip(`${markerData.name} (${residentsInLot.length} resident${residentsInLot.length !== 1 ? "s" : ""})`);
        marker.on('click', () => window.openLotModal(projectKey, projectData.block, lotNumber));
      });
    });
  });

});
