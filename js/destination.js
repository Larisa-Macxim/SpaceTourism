const h1Destination = document.getElementById("h1-destination");
const paragraphDestination = document.getElementById("paragraph-destination");
const imageDestination = (document.getElementById("destination-image").src =
  "./assets/destination/image-moon.png");
const h4Distance = document.getElementById("h4-distance");
const h1Distance = document.getElementById("h1-distance");
const h4Time = document.getElementById("h4-time");
const h1Time = document.getElementById("h1-time");
const Moon = document.getElementById("moon-button");
const Mars = document.getElementById("mars-button");
const Europa = document.getElementById("europa-button");
const Titan = document.getElementById("titan-button");

// const moon = document.getElementById("moon");
// const mars = document.getElementById("mars");

function changeDestinationMoon() {
  h1Destination.innerHTML = "MOON";
  paragraphDestination.innerHTML =
    " See our planet as you've never seen it before. A perfect relaxing trip  away to help regain perspective and come back refreshed. While you're there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.";
  h4Distance.innerHTML = "AVG. DISTANCE";
  h1Distance.innerHTML = "384,400 KM";
  h4Time.innerHTML = "EST. TRAVEL TIME";
  h1Time.innerHTML = "3 DAYS";
  imageDestination.innerHTML = document.getElementById(
    "destination-image"
  ).src = "./assets/destination/image-moon.png";
}

function changeDestinationMars() {
  h1Destination.innerHTML = "MARS";
  paragraphDestination.innerHTML =
    "  Don't forget to pack your hiking boots. You'll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It's two and a half times the size of Everest!";
  h4Distance.innerHTML = "AVG. DISTANCE";
  h1Distance.innerHTML = "225 MIL. KM";
  h4Time.innerHTML = "EST. TRAVEL TIME";
  h1Time.innerHTML = "9 MONTHS";
  imageDestination.innerHTML = document.getElementById(
    "destination-image"
  ).src = "./assets/destination/image-mars.png";
}
function changeDestinationEuropa() {
  h1Destination.innerHTML = "EUROPA";
  paragraphDestination.innerHTML =
    " The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.";
  h4Distance.innerHTML = "AVG. DISTANCE";
  h1Distance.innerHTML = "628 MIL. KM";
  h4Time.innerHTML = "EST. TRAVEL TIME";
  h1Time.innerHTML = "3 YEARS";
  imageDestination.innerHTML = document.getElementById(
    "destination-image"
  ).src = "./assets/destination/image-europa.png";
}

function changeDestinationTitan() {
  h1Destination.innerHTML = "TITAN";
  paragraphDestination.innerHTML =
    " The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.";
  h4Distance.innerHTML = "AVG. DISTANCE";
  h1Distance.innerHTML = "1.6 BIL. KM";
  h4Time.innerHTML = "EST. TRAVEL TIME";
  h1Time.innerHTML = "7 YEARS";
  imageDestination.innerHTML = document.getElementById(
    "destination-image"
  ).src = "./assets/destination/image-titan.png";
}

// moon.addEventListener(click, changeDestinationMoon);
// mars.addEventListener(click, changeDestinationMars);

// const marsBtn = document.getElementById("mars-btn");
// console.log(marsBtn);
// marsBtn.addEventListener("click", function () {
//   window.location.href = "mars.html";
// });

Mars.addEventListener("click", changeDestinationMars);
Moon.addEventListener("click", changeDestinationMoon);
Europa.addEventListener("click", changeDestinationEuropa);
Titan.addEventListener("click", changeDestinationTitan);

const homeBtn = document.getElementById("home-btn");
console.log(homeBtn);
homeBtn.addEventListener("click", function () {
  window.location.href = "index.html";
});

const destinationBtn = document.getElementById("destination-btn");
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
