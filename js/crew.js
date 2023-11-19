const h3Title = document.getElementById("h3-title");
const namePerson = document.getElementById("name");
const descriptionPerson = document.getElementById("description-person");
const imgPerson = (document.getElementById("img-person").src =
  "./assets/crew/image-douglas-hurley.png");
const DouglasHurley = document.getElementById("btn1");
const MarkShuttleworth = document.getElementById("btn2");
const VictorGlover = document.getElementById("btn3");
const AnoushehAnsari = document.getElementById("btn4");

function changeCommander() {
  h3Title.innerHTML = "COMMANDER";
  namePerson.innerHTML = "DOUGLAS HURLEY";
  descriptionPerson.innerHTML =
    " Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.";
  imgPerson.innerHTML = document.getElementById("img-person").src =
    "./assets/crew/image-douglas-hurley.png";
}

function changeMissionSpecialist() {
  h3Title.innerHTML = "MISSION SPECIALIST";
  namePerson.innerHTML = "MARK SHUTTLEWORTH";
  descriptionPerson.innerHTML =
    "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.";
  imgPerson.innerHTML = document.getElementById("img-person").src =
    "./assets/crew/image-mark-shuttleworth.png";
}

function changePilot() {
  h3Title.innerHTML = "PILOT";
  namePerson.innerHTML = "VICTOR GLOVER";
  descriptionPerson.innerHTML =
    "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ";
  imgPerson.innerHTML = document.getElementById("img-person").src =
    "./assets/crew/image-victor-glover.png";
}

function changeFlightEngineer() {
  h3Title.innerHTML = "FLIGHT ENGINEER";
  namePerson.innerHTML = "ANOUSHEH ANSARI";
  descriptionPerson.innerHTML =
    "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.  ";
  imgPerson.innerHTML = document.getElementById("img-person").src =
    "./assets/crew/image-anousheh-ansari.png";
}

DouglasHurley.addEventListener("click", changeCommander);
MarkShuttleworth.addEventListener("click", changeMissionSpecialist);
VictorGlover.addEventListener("click", changePilot);
AnoushehAnsari.addEventListener("click", changeFlightEngineer);

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
