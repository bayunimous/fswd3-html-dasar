const menuBtn = document.querySelector(".menu-btn");
const navList = document.querySelector(".nav-list");

menuBtn.addEventListener("click", () => {
  navList.classList.toggle("show");
});

const date = document.querySelector("#date");
const year = new Date().getFullYear();

date.textContent = year;

const topBtn = document.querySelector(".top-btn");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    topBtn.classList.add("show");
  } else {
    topBtn.classList.remove("show");
  }
});

topBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
