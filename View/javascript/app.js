// =========================
// SIDEBAR LOGIC
// =========================
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");
const closeBtn = document.getElementById("sidebarClose");
const menuToggle = document.getElementById("menuToggle");

function openSidebar() {
  sidebar?.classList.add("open");
  overlay?.classList.add("show");
}

function closeSidebar() {
  sidebar?.classList.remove("open");
  overlay?.classList.remove("show");
}

function toggleSidebar() {
  sidebar?.classList.toggle("open");
  overlay?.classList.toggle("show");
}

// Events
menuToggle?.addEventListener("click", toggleSidebar);
closeBtn?.addEventListener("click", closeSidebar);
overlay?.addEventListener("click", closeSidebar);

// ESC key closes sidebar or modal
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    if (sidebar?.classList.contains("open")) closeSidebar();
    if (modalOverlay?.classList.contains("show")) closeModal();
    if (rightMenu?.classList.contains("open")) closeRightMenu();
  }
});

// =========================
// MODAL LOGIC
// =========================
const modalOverlay = document.getElementById("modalOverlay");
const modalTitle = document.getElementById("modalTitle");
const modalContent = document.getElementById("modalContent");
const modalClose = document.getElementById("modalClose");

function closeModal() {
  modalOverlay?.classList.remove("show");
}

modalClose?.addEventListener("click", closeModal);

// =========================
// LOCATION CARDS
// =========================
const locationCards = document.querySelectorAll(".location-card");

locationCards.forEach(card => {
  card.addEventListener("click", () => {
    const location = card.dataset.location;
    if (!location) return;

    modalTitle.innerText = `${location} Information`;
    modalContent.innerHTML = `
      <p>Details for the location: <strong>${location}</strong></p>
      <p>You can display more info here, e.g., population, number of residents, etc.</p>
    `;
    modalOverlay.classList.add("show");
  });
});

// =========================
// RESIDENTS LOGIC
// =========================
const residentsContainer = document.getElementById("residentsContainer");
const residentSearch = document.getElementById("residentSearch");

// Sample residents data (replace with your actual data)
const residents = [
  { name: "John Doe", block: "A", lot: "1", status: "active" },
  { name: "Jane Smith", block: "B", lot: "3", status: "inactive" },
  { name: "Mark Lee", block: "A", lot: "2", status: "active" },
];

function renderResidents(filter = "") {
  if (!residentsContainer) return;

  residentsContainer.innerHTML = "";

  const filtered = residents.filter(resident =>
    resident.name.toLowerCase().includes(filter.toLowerCase())
  );

  filtered.forEach(resident => {
    const row = document.createElement("div");
    row.className = "resident-card";

    row.innerHTML = `
      <div>
        <div class="resident-name">${resident.name}</div>
        <div class="resident-lot">${resident.block} – ${resident.lot}</div>
      </div>
      <div class="resident-status-badge ${resident.status}">
        ${capitalize(resident.status)}
      </div>
    `;

    // Highlight lot on hover
    row.addEventListener("mouseenter", () => {
      document.querySelectorAll(".lot").forEach(lot => {
        if (lot.dataset.block === resident.block && lot.dataset.lot === resident.lot) {
          lot.classList.add("highlight");
        }
      });
    });

    row.addEventListener("mouseleave", () => {
      document.querySelectorAll(".lot").forEach(lot => {
        lot.classList.remove("highlight");
      });
    });

    // Click opens modal with residents in same lot
    row.addEventListener("click", () => {
      const residentsInLot = residents.filter(
        r => r.block === resident.block && r.lot === resident.lot
      );

      modalTitle.innerText = `${resident.block} - Lot ${resident.lot}`;
      modalContent.innerHTML = residentsInLot
        .map(
          r => `
            <div class="modal-resident">
              <strong>${r.name}</strong>
              <span class="resident-status-badge ${r.status}">${capitalize(r.status)}</span>
            </div>
          `
        )
        .join("");

      modalOverlay.classList.add("show");
    });

    residentsContainer.appendChild(row);
  });
}

function capitalize(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

/* Initial render */
renderResidents();

/* Search input filter */
residentSearch?.addEventListener("input", () => {
  renderResidents(residentSearch.value);
});

// =========================
// OPTIONAL: Right Menu Logic
// =========================
const rightMenu = document.getElementById("rightMenu");
const rightMenuOverlay = document.getElementById("rightMenuOverlay");

function openRightMenu() {
  rightMenu?.classList.add("open");
  rightMenuOverlay?.classList.add("show");
}

function closeRightMenu() {
  rightMenu?.classList.remove("open");
  rightMenuOverlay?.classList.remove("show");
}
