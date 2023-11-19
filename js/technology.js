const LaunchVehicle = document.getElementById("btn-tech1");
const SpacePort = document.getElementById("btn-tech2");
const SpaceCapsule = document.getElementById("btn-tech3");
const h5Title = document.getElementById("h5-title");
const h1TitleTechnology = document.getElementById("h1-title-technology");
const paragraphTechnology = document.getElementById("parag-technology");
const imgTechnology = (document.getElementById("img-technology").src =
  "./assets/technology/image-launch-vehicle-landscape.jpg");
const numbersButtons = document.querySelector(".number-techno");

function changeLaunchVehicle() {
  h5Title.innerHTML = "THE TERMINOLOGY...";
  h1TitleTechnology.innerHTML = "LAUNCH VEHICLE";
  paragraphTechnology.innerHTML =
    " A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!";
  imgTechnology.innerHTML = document.getElementById("img-technology").src =
    "./assets/technology/image-launch-vehicle-landscape.jpg";
}

function changeSpacePort() {
  h5Title.innerHTML = "THE TERMINOLOGY...";
  h1TitleTechnology.innerHTML = "SPACEPORT";
  paragraphTechnology.innerHTML =
    " A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.";
  imgTechnology.innerHTML = document.getElementById("img-technology").src =
    "./assets/technology/image-spaceport-landscape.jpg";
}

function changeSpaceCapsule() {
  h5Title.innerHTML = "THE TERMINOLOGY...";
  h1TitleTechnology.innerHTML = "SPACE CAPSULE";
  paragraphTechnology.innerHTML =
    "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.";
  imgTechnology.innerHTML = document.getElementById("img-technology").src =
    "./assets/technology/image-space-capsule-landscape.jpg";
}

LaunchVehicle.addEventListener("click", changeLaunchVehicle);
SpacePort.addEventListener("click", changeSpacePort);
SpaceCapsule.addEventListener("click", changeSpaceCapsule);

button1.addEventListener("onclick", function changeTheButtonsAspects() {
  button1.style.backgroundColor = "white";
  numbersButtons.style.color = "black";
});
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
