document.addEventListener("DOMContentLoaded", function() {
  var header = document.querySelector("header");

  window.addEventListener("scroll", function() {
    if (window.scrollY > 100) {
      header.style.backgroundColor = "pink"; 
      header.style.h1="white";// Change the background color on scroll
    } else {
      header.style.backgroundColor = "#fbfbfb"; // Reset the background color when scrolled to the top
    }
  });
});
function text(){
  alert("Welcome to the " + "Navbar" + " application."+" You are now " + "connected to us with the registered email!!");
}