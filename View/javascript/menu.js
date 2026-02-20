// menu.js
window.openRightMenu = function () {
  const rightMenu = document.getElementById("rightMenu");
  const rightMenuOverlay = document.getElementById("rightMenuOverlay");
  rightMenu?.classList.add("open");
  rightMenuOverlay?.classList.add("show");
};

window.closeRightMenu = function () {
  const rightMenu = document.getElementById("rightMenu");
  const rightMenuOverlay = document.getElementById("rightMenuOverlay");
  rightMenu?.classList.remove("open");
  rightMenuOverlay?.classList.remove("show");
};