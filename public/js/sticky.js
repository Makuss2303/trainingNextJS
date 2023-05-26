var _header = document.querySelector("#header");
var toggleClass = "is-sticky";
window.addEventListener("scroll", () => {
  var currentScroll = window.pageYOffset;
  if (currentScroll > 150) {
    _header.classList.add(toggleClass);
  } else {
    _header.classList.remove(toggleClass);
  }
});
