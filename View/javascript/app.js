document.addEventListener("DOMContentLoaded", () => {

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

  menuToggle?.addEventListener("click", toggleSidebar);
  closeBtn?.addEventListener("click", closeSidebar);
  overlay?.addEventListener("click", closeSidebar);


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
  modalOverlay?.addEventListener("click", (e) => {
    if (e.target === modalOverlay) closeModal();
  });


  // =========================
  // OPEN LOT MODAL
  // =========================
  function openLotModal(block, lot) {
    const residentsInLot = residents.filter(r => r.block === block && r.lot === lot);
    modalTitle.innerText = `Block ${block} - Lot ${lot}`;

    let contentHTML = `
      <div class="detail-group">
        <b>Address:</b> Via Verde-Homapon 2
      </div>

      <div class="detail-group">
        <b>Property:</b> Block ${block} | Lot ${lot}
      </div>
    `;

    if (residentsInLot.length === 0) {
      // No residents in lot
      contentHTML += `
        <div class="detail-group">
          <b>Client:</b> —
        </div>
        <div class="detail-group">
          <b>Status:</b>
          <span class="status-tag vacant">No Residents</span>
        </div>
        <div class="detail-group">
          <b style="display:block; margin-bottom:12px;">Billing</b>
          <div class="bill-row">
            <span>Electric Bill</span>
            <span>₱ 0.00</span>
          </div>
          <div class="bill-row">
            <span>Water Bill</span>
            <span>₱ 0.00</span>
          </div>
        </div>
      `;
    } else {
      // Residents exist
      const totalElectricity = residentsInLot.reduce((sum, r) => sum + r.electricity, 0);
      const totalWater = residentsInLot.reduce((sum, r) => sum + r.water, 0);
      const status = residentsInLot.some(r => r.status === "active") ? "Active" : "Inactive";
      const residentNames = residentsInLot.map(r => r.name).join(", ");

      contentHTML += `
        <div class="detail-group">
          <b>Client:</b> ${residentNames}
        </div>
        <div class="detail-group">
          <b>Status:</b>
          <span class="status-tag ${status.toLowerCase()}">${status}</span>
        </div>
        <div class="detail-group">
          <b>Created:</b> ${new Date().toLocaleString()}
        </div>
        <div class="detail-group">
          <b style="display:block; margin-bottom:12px;">Billing</b>
          <div class="bill-row">
            <span>Electric Bill</span>
            <span>₱ ${totalElectricity.toFixed(2)}</span>
          </div>
          <div class="bill-row">
            <span>Water Bill</span>
            <span>₱ ${totalWater.toFixed(2)}</span>
          </div>
        </div>
      `;
    }

    modalContent.innerHTML = contentHTML;
    modalOverlay?.classList.add("show");
  }

  // Expose globally for map.js to call
  window.openLotModal = openLotModal;


  // =========================
  // RIGHT MENU
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

});
