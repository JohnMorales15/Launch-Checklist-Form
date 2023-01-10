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
   this.fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
      response.json().then(function(json){
         let planet = document.getElementById("missionTarget");
         let destination = Math.round(Math.random()*5);
         planet.innerHTML = 
         `
         <h2>Mission Destination</h2>
         <ul>
            <li>Name: ${json[destination].name}</li>
            <li>Diameter: ${json[destination].diameter}</li>
            <li>Star: ${json[destination].star}</li>
            <li>Distance from Earth: ${json[destination].distance}</li>
            <li>Number of Moons: ${json[destination].moons}</li>
         </ul>
         <img src="${json[destination].image}">`
      });
   });

   let form = this.document.getElementById("launchForm");
   form.addEventListener("submit", function(event){
      let pilotName = document.querySelector("input[name=pilotName]").value;
      let copilot = document.querySelector("input[name=copilotName]").value;
      let fuelLevel = document.querySelector("input[name=fuelLevel]").value;
      let cargoMass = document.querySelector("input[name=cargoMass]").value;
      if (pilotName === "" || copilot === "" || fuelLevel === "" || cargoMass === ""){
         alert("All fields are required!")
         event.preventDefault();
      } else if (isNaN(pilotName) === false || isNaN(copilot) === false){
         alert("Please input name for Pilot and Co-Pilot");
         event.preventDefault();
      } else if (isNaN(fuelLevel) === true || isNaN(cargoMass) === true){
         alert("Please input numerical value for Fuel level and Cargo Mass");
         event.preventDefault();
      } else {
         document.getElementById("itemStatus").style.visibility = "visible";
         document.getElementById("pilotStatus").innerHTML = "Pilot " + pilotName + " is ready.";
         document.getElementById("copilotStatus").innerHTML = "Co-Pilot " + copilot + " is ready.";
         if(fuelLevel <= 10000){
            document.getElementById("launchStatus").innerHTML = "Shuttle NOT READY for launch!";
            document.getElementById("launchStatus").style.color = "red";
            document.getElementById("fuelStatus").innerHTML = "Not enough fuel for journey";
            document.getElementById("fuelStatus").style.color = "maroon";
         } else {
            document.getElementById("fuelStatus").innerHTML = "Fuel level check passed";
            document.getElementById("fuelStatus").style.color = "black";
         };
         if(cargoMass >= 10000){
            document.getElementById("launchStatus").innerHTML = "Shuttle NOT READY for launch!";
            document.getElementById("launchStatus").style.color = "red";
            document.getElementById("cargoStatus").innerHTML = "Cargo mass too heavy for lift off";
            document.getElementById("cargoStatus").style.color = "maroon";
         } else {
            document.getElementById("cargoStatus").innerHTML = "Cargo mass check passed";
            document.getElementById("cargoStatus").style.color = "black";
         };
         if (fuelLevel > 10000 && cargoMass < 10000){
            document.getElementById("launchStatus").innerHTML = "Shuttle READY for launch!";
            document.getElementById("launchStatus").style.color = "green";
         }
         event.preventDefault();
      };
   });
});
