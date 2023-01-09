// Write your JavaScript code here!

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ul>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ul>
<img src="${}">
*/



window.addEventListener("load", function() {
   let form = this.document.getElementById("launchForm");
   form.addEventListener("submit", function(event){
      let pilotName = document.querySelector("input[name=pilotName]");
      let copilot = document.querySelector("input[name=copilotName]");
      let fuelLevel = document.querySelector("input[name=fuelLevel]");
      let cargoMass = document.querySelector("input[name=cargoMass]");
      if (pilotName.value === "" || copilot.value === "" || fuelLevel.value === "" || cargoMass.value === ""){
         alert("All fields are required!")
         event.preventDefault();
      } else if (isNaN(fuelLevel.value) === true || isNaN(cargoMass.value) === true){
         alert("Please input numerical value for Fuel level and Cargo Mass");
         event.preventDefault();
      }
   })
})
