// app.js
document.addEventListener("DOMContentLoaded", () => {
  const rightMenu = document.getElementById("rightMenu");
  const rightMenuOverlay = document.getElementById("rightMenuOverlay");

  // Topbar menu
  window.openRightMenu = () => {
    rightMenu?.classList.add("open");
    rightMenuOverlay?.classList.add("show");
  };

  window.closeRightMenu = () => {
    rightMenu?.classList.remove("open");
    rightMenuOverlay?.classList.remove("show");
  };

  // Page switching
  const menuItems = document.querySelectorAll(".right-menu-item");
  menuItems.forEach(item => {
    item.addEventListener("click", () => {
      const page = item.dataset.page;
      menuItems.forEach(i => i.classList.remove("active"));
      item.classList.add("active");

      document.querySelectorAll(".app-page").forEach(p => p.classList.remove("active-page"));
      const selectedPage = document.getElementById(`section-${page}`);
      selectedPage?.classList.add("active-page");

      // Refresh map size when dashboard is selected
      if (page === "dashboard" && window.map) {
        setTimeout(() => window.map.invalidateSize(), 300);
      }

      if (page === "residents" && window.renderResidentsTable) {
        window.renderResidentsTable();
      }

      closeRightMenu();
    });
  });
});