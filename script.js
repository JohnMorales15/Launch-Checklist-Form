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
      } else if (isNaN(pilotName.value) === false || isNaN(copilot.value) === false){
         alert("Please input name for Pilot and Co-Pilot");
         event.preventDefault();
      } else if (isNaN(fuelLevel.value) === true || isNaN(cargoMass.value) === true){
         alert("Please input numerical value for Fuel level and Cargo Mass");
         event.preventDefault();
      } else {
         document.getElementById("itemStatus").style.visibility = "visible";
         document.getElementById("pilotStatus").innerHTML = "Pilot " + pilotName.value + " is ready.";
         document.getElementById("copilotStatus").innerHTML = "Co-Pilot " + copilot.value + " is ready.";
         if(fuelLevel.value <= 10000){
            document.getElementById("launchStatus").innerHTML = "Shuttle NOT READY for launch!";
            document.getElementById("launchStatus").style.color = "red";
            document.getElementById("fuelStatus").innerHTML = "Not enough fuel for journey";
            document.getElementById("fuelStatus").style.color = "maroon";
         } else {
            document.getElementById("fuelStatus").innerHTML = "Fuel level check passed";
            document.getElementById("fuelStatus").style.color = "black";
         };
         if(cargoMass.value >= 10000){
            document.getElementById("launchStatus").innerHTML = "Shuttle NOT READY for launch!";
            document.getElementById("launchStatus").style.color = "red";
            document.getElementById("cargoStatus").innerHTML = "Cargo mass too heavy for lift off";
            document.getElementById("cargoStatus").style.color = "maroon";
         } else {
            document.getElementById("cargoStatus").innerHTML = "Cargo mass check passed";
            document.getElementById("cargoStatus").style.color = "black";
         };
         if (fuelLevel.value > 10000 && cargoMass.value < 10000){
            document.getElementById("launchStatus").innerHTML = "Shuttle READY for launch!";
            document.getElementById("launchStatus").style.color = "green";
         }
         event.preventDefault();
      }
   })
})
