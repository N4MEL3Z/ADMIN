// residentManagement.js
document.addEventListener("DOMContentLoaded", () => {

  // =========================
  // Render Residents Table
  // =========================
  function renderResidentsTable(filter = "") {
    const tbody = document.getElementById("residentsTableBody");
    if (!tbody) return;

    const residentsList = window.residents || [];

    const filteredResidents = residentsList
      .map((res, index) => ({ ...res, originalIndex: index }))
      .filter(res => {
        const searchTerm = filter.toLowerCase();
        return (
          res.name.toLowerCase().includes(searchTerm) ||
          res.project.toLowerCase().includes(searchTerm) ||
          res.block.toLowerCase().includes(searchTerm) ||
          res.lot.toLowerCase().includes(searchTerm)
        );
      });

    tbody.innerHTML = "";

    filteredResidents.forEach(res => {
      const tr = document.createElement("tr");

      tr.innerHTML = `
        <td>${res.name}</td>
        <td>${res.project}</td>
        <td>${res.block}</td>
        <td>${res.lot}</td>
        <td><span class="status-tag ${res.status.toLowerCase()}">${res.status}</span></td>
        <td>
          <button class="edit-btn" onclick="editResident(${res.originalIndex})">Edit</button>
          <button class="delete-btn" onclick="deleteResident(${res.originalIndex})">Delete</button>
        </td>
      `;

      tbody.appendChild(tr);
    });
  }

  window.renderResidentsTable = renderResidentsTable;

  // =========================
  // Search
  // =========================
  const searchInput = document.getElementById("residentSearch");
  if (searchInput) {
    searchInput.addEventListener("input", e => renderResidentsTable(e.target.value));
  }

  // =========================
  // Add Resident Modal
  // =========================
  window.openResidentForm = () =>
    document.getElementById("addResidentModal")?.classList.add("show");
  window.closeAddModal = () =>
    document.getElementById("addResidentModal")?.classList.remove("show");

  const addForm = document.getElementById("addResidentForm");
  if (addForm) {
    addForm.addEventListener("submit", function (e) {
      e.preventDefault();

      window.residents.push({
        name: addName.value,
        project: addProject.value,
        block: addBlock.value,
        lot: addLot.value,
        status: addStatus.value
      });

      renderResidentsTable();
      closeAddModal();
      this.reset();
    });
  }

  // =========================
  // Edit Resident Modal
  // =========================
  window.editResident = function (index) {
    const resident = window.residents[index];

    editIndex.value = index;
    editName.value = resident.name;
    editProject.value = resident.project;
    editBlock.value = resident.block;
    editLot.value = resident.lot;
    editStatus.value = resident.status;

    document.getElementById("editResidentModal")?.classList.add("show");
  };

  window.closeEditModal = () =>
    document.getElementById("editResidentModal")?.classList.remove("show");

  const editForm = document.getElementById("editResidentForm");
  if (editForm) {
    editForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const index = editIndex.value;

      window.residents[index] = {
        name: editName.value,
        project: editProject.value,
        block: editBlock.value,
        lot: editLot.value,
        status: editStatus.value
      };

      renderResidentsTable();
      closeEditModal();
    });
  }

  // =========================
  // Delete Resident
  // =========================
  let deleteIndex = null;

  window.deleteResident = function (index) {
    deleteIndex = index;
    document.getElementById("deleteResidentModal")?.classList.add("show");
  };

  window.closeDeleteModal = () =>
    document.getElementById("deleteResidentModal")?.classList.remove("show");

  window.confirmDelete = function () {
    if (deleteIndex !== null) {
      window.residents.splice(deleteIndex, 1);
      renderResidentsTable();
      closeDeleteModal();
      deleteIndex = null;
    }
  };

  // Initial render
  renderResidentsTable();
});