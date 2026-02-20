// mapModal.js
window.openLotModal = function(projectKey, block, lotNumber) {
  const modalTitle = document.getElementById("modalTitle");
  const modalContent = document.getElementById("modalContent");
  const modalOverlay = document.getElementById("modalOverlay");
  if (!modalContent || !modalOverlay) return;

  const residentsList = window.residents || [];
  const residentsInLot = residentsList.filter(r =>
    r.project === projectKey && r.block === block && r.lot === lotNumber
  );

  modalTitle && (modalTitle.innerText = `Block ${block} - Lot ${lotNumber}`);

  let contentHTML = `
    <div class="detail-group"><b>Address:</b> Via Verde-Homapon 2</div>
    <div class="detail-group"><b>Property:</b> Block ${block} | Lot ${lotNumber}</div>
  `;

  if (residentsInLot.length === 0) {
    contentHTML += `
      <div class="detail-group"><b>Client:</b> —</div>
      <div class="detail-group"><b>Status:</b> <span class="status-tag vacant">No Residents</span></div>
    `;
  } else {
    const names = residentsInLot.map(r => r.name).join(", ");
    const totalElectric = residentsInLot.reduce((sum, r) => sum + (r.electricity || 0), 0);
    const totalWater = residentsInLot.reduce((sum, r) => sum + (r.water || 0), 0);
    const status = residentsInLot.some(r => r.status === "active") ? "active" : "inactive";

    contentHTML += `
      <div class="detail-group"><b>Client(s):</b> ${names}</div>
      <div class="detail-group"><b>Status:</b> <span class="status-tag ${status}">${status}</span></div>
      <div class="detail-group"><b>Electricity Bill:</b> ₱ ${totalElectric.toFixed(2)}</div>
      <div class="detail-group"><b>Water Bill:</b> ₱ ${totalWater.toFixed(2)}</div>
    `;
  }

  modalContent.innerHTML = contentHTML;
  modalOverlay.classList.add("show");

  document.getElementById("modalClose")?.addEventListener("click", () => {
    modalOverlay.classList.remove("show");
  });
};  