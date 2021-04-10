const $ = document;
function toggleMenu() {
  $.querySelector(".menu").classList.toggle("active");
  $.querySelector("#description").classList.toggle("notActive");
}
