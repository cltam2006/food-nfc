document.addEventListener("DOMContentLoaded", function () {
  // Get color from query parameters, default to blue
  const urlParams = new URLSearchParams(window.location.search);
  const color = urlParams.get('color') || 'blue';

  const centerText = document.querySelector(".center-text");

  centerText.textContent = color;
  
  // Apply the color to all ripples
  const ripples = document.querySelectorAll(".ripple");
  ripples.forEach((ripple) => {
    ripple.style.borderColor = color;
  });

  // Stop the animation after 5 seconds
  setTimeout(function () {
    ripples.forEach((ripple) => {
      ripple.style.animation = "none";
    });

    const centerText = document.querySelector(".center-text");
    centerText.textContent = "OK";
    centerText.style.color = color;
    centerText.style.opacity = 0.45;
  }, 3000);
});