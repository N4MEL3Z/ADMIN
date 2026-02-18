document.addEventListener("DOMContentLoaded", () => {

  // =========================
  // OPEN LOT MODAL
  // =========================
  function openLotModal(projectKey, block, lotNumber) {
    const modalTitle = document.getElementById("modalTitle");
    const modalContent = document.getElementById("modalContent");
    const modalOverlay = document.getElementById("modalOverlay");

    if (!modalContent || !modalOverlay) return;

    // Filter residents in this lot
    const residentsInLot = residents.filter(r =>
      r.project === projectKey &&
      r.block === block &&
      r.lot === lotNumber
    );

    modalTitle && (modalTitle.innerText = `Block ${block} - Lot ${lotNumber}`);

    let contentHTML = `
      <div class="detail-group">
        <b>Address:</b> Via Verde-Homapon 2
      </div>
      <div class="detail-group">
        <b>Property:</b> Block ${block} | Lot ${lotNumber}
      </div>
    `;

    if (residentsInLot.length === 0) {
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
      const totalElectricity = residentsInLot.reduce((sum, r) => sum + r.electricity, 0);
      const totalWater = residentsInLot.reduce((sum, r) => sum + r.water, 0);
      const status = residentsInLot.some(r => r.status === "active") ? "active" : "inactive";
      const residentNames = residentsInLot.map(r => r.name).join(", ");

      contentHTML += `
        <div class="detail-group">
          <b>Client:</b> ${residentNames}
        </div>
        <div class="detail-group">
          <b>Status:</b>
          <span class="status-tag ${status}">${status}</span>
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
    modalOverlay.classList.add("show");

    const modalCloseBtn = document.getElementById("modalClose");
    modalCloseBtn.onclick = () => modalOverlay.classList.remove("show");
  }

  // Expose globally for map.js
  window.openLotModal = openLotModal;

  // =========================
  // RIGHT MENU
  // =========================
  const rightMenu = document.getElementById("rightMenu");
  const rightMenuOverlay = document.getElementById("rightMenuOverlay");

  window.openRightMenu = function () {
    rightMenu.classList.add("open");
    rightMenuOverlay.classList.add("show");
  };

  window.closeRightMenu = function () {
    rightMenu.classList.remove("open");
    rightMenuOverlay.classList.remove("show");
  };

});
