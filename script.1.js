window.onload = () => {
  const burger = document.querySelector(".burger");
  const menu = document.querySelector(".menu");

  burger.addEventListener("mousedown", () => {
    menu.classList.toggle("active");
  });
};
