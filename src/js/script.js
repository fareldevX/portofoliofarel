// bars click
const bars = document.getElementById("bars");
const text = document.querySelector(".text");

bars.addEventListener("click", () => {
  text.classList.toggle("active");
});

document.addEventListener("click", (e) => {
  if (!text.contains(e.target) && !bars.contains(e.target)) {
    text.classList.remove("active");
  }
});
