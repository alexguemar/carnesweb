const menuBtn = document.querySelector(".nav-button");
const menuOpen = document.querySelector(".nav-mobile");

menuBtn.addEventListener("click", () => {
  menuOpen.classList.toggle("show");
  menuBtn.classList.toggle("opened");
});
