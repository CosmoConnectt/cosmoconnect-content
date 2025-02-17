document.addEventListener("DOMContentLoaded", function () {
    // Define planets array
    const planets = [
      { name: "Mercury", model: "/models/m1.glb" },
      { name: "Venus", model:  "/models/venus.glb" },
      { name: "Earth", model:  "/models/er1.glb" },
      { name: "Mars", model:  "/models/mars.glb" },
      { name: "Jupiter", model:  "/models/jupiter.glb" },
      { name: "Saturn", model:  "/models/saturn.glb" },
      { name: "Uranus", model:  "/models/uranus.glb"},
      { name: "Neptune", model: "/models/neptune.glb" }
    ];
  
    let currentPlanetIndex = 2; // Default to Earth
  
    // Select ModelViewer element
    const viewer = document.getElementById("planet-viewer");
  
    function loadPlanet(index) {
      if (!planets[index]) {
        console.error("Invalid planet index:", index);
        return;
      }
      currentPlanetIndex = index;
      viewer.src = planets[currentPlanetIndex].model;
    }
  
    // Planet Navigation Buttons
    const leftArrow = document.getElementById("left-arrow");
    const rightArrow = document.getElementById("right-arrow");
  
    if (leftArrow && rightArrow) {
      leftArrow.addEventListener("click", () => {
        currentPlanetIndex = (currentPlanetIndex - 1 + planets.length) % planets.length;
        loadPlanet(currentPlanetIndex);
      });
  
      rightArrow.addEventListener("click", () => {
        currentPlanetIndex = (currentPlanetIndex + 1) % planets.length;
        loadPlanet(currentPlanetIndex);
      });
    } else {
      console.error("Navigation buttons not found!");
    }
  });
  