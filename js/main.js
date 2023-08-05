var theTogler = document.querySelector(".the-togler");
var navbar = document.querySelector(".navbar");
theTogler.addEventListener("click", function () {
  if (navbar.style.display === "none") {
    navbar.style.display = "block";
  } else {
    navbar.style.display = "none";
  }
});
