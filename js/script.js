const homeBtn = document.getElementById("home-btn");
console.log(homeBtn);
homeBtn.addEventListener("click", function () {
  window.location.href = "index.html";
});

const destinationBtn = document.getElementById("destination-btn");
console.log(destinationBtn);
destinationBtn.addEventListener("click", function () {
  window.location.href = "destination.html";
});

const crewBtn = document.getElementById("crew-btn");
crewBtn.addEventListener("click", function () {
  window.location.href = "crew.html";
});

const technologyBtn = document.getElementById("technology-btn");
technologyBtn.addEventListener("click", function () {
  window.location.href = "technology.html";
});
