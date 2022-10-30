let menu = document.querySelector("header nav svg:first-of-type");

menu.addEventListener("click", () => {
  let activate = document.getElementsByTagName("nav")[0];
  activate.classList.add("active");
  let close = document.querySelector("header nav.active ul + svg");
  document.body.style.overflow = "hidden";

  close.addEventListener("click", () => {
    activate.classList.remove("active");
    document.body.style.overflow = "auto";
  });
});
