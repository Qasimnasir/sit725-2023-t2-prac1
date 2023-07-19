document.addEventListener("DOMContentLoaded", function() {
    const introductionSection = document.getElementById("introduction");
    const imageSection = document.getElementById("image-section");
    const animateButton = document.getElementById("animateButton");
  
    animateButton.addEventListener("click", function() {
      introductionSection.classList.add("fade-in");
      imageSection.classList.add("slide-in");
    });
  });