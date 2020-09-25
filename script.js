// Write your JavaScript code here!

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/

window.addEventListener("load", function() {
    fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
        response.json().then(function(json){
            let div = document.getElementById("missionTarget");
            div.innerHTML =`
            <h2>Mission Destination</h2>
<ol>
   <li>Name: ${json[1].name}</li>
   <li>Diameter: ${json[1].diameter}</li>
   <li>Star: ${json[1].star}</li>
   <li>Distance from Earth: ${json[1].distance}</li>
   <li>Number of Moons: ${json[1].moons}</li>
</ol>
<img src="${json[1].image}"></img>`;
        })
    });


    let form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
       let pilotName = document.querySelector("input[name=pilotName")
       if(pilotName.value === ""){
           alert("Pilot name is Required")
           event.preventDefault();
       }else{
        document.getElementById("pilotStatus").innerHTML = `${pilotName.value} is ready`
       }
        let copilotName = document.querySelector("input[name=copilotName")
       if(copilotName.value === ""){
           alert("Co-pilot name is Required")
           event.preventDefault();
       }else{
        document.getElementById("copilotStatus").innerHTML = `${copilotName.value} is ready`
       }
        document.getElementById("launchStatus").innerHTML = "Shuttle ready for launch"
        document.getElementById("launchStatus").style.color="green"
        document.getElementById("faultyItems").style.visibility= "hidden";
       let fuelLevel = document.querySelector("input[name=fuelLevel")
        if(fuelLevel.value < 10000){
            document.getElementById("faultyItems").style.visibility= "visible";
            document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch"
            document.getElementById("fuelStatus").innerHTML = "Not enough Fuel"
            document.getElementById("launchStatus").style.color="red"
            event.preventDefault();
        }
        let cargoMass = document.querySelector("input[name=cargoMass")
        if(cargoMass.value > 10000){
            document.getElementById("faultyItems").style.visibility= "visible";
            document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch"
            document.getElementById("cargoStatus").innerHTML = "To much cargo"
            document.getElementById("launchStatus").style.color="red"
            event.preventDefault();
        }
        event.preventDefault();
       }
    )
})



