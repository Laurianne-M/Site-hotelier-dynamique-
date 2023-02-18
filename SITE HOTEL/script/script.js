const header = document.querySelector("header");

//le header disparait au scroll//
window.addEventListener("scroll", (e) => {
  if (scrollY > 0) {
    header.style.top = "-400px";
  } else {
    header.style.top = "0px";
  }
});
