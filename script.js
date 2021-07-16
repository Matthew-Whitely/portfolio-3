const hamburgerMenu = document.querySelector(".hamburgerIcon");
const overlay = document.querySelector(".overlay");
console.log(hamburgerMenu);
console.log(overlay);
hamburgerMenu.addEventListener("click", function () {
  overlay.classList.toggle("hidden");
});
