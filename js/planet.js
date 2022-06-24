
const planets = [
    {name:"Mercury", 
    diameter:"4879", 
    color:"grey"
    },
    {name:"Venus", 
    diameter:"12104", 
    color:"yellow"
    },
    {name:"Earth", 
    diameter:"12742", 
    color:"green"
    },
    {name:"Mars", 
    diameter:"6779", 
    color:"pink"
    },
    {name:"Jupiter", 
    diameter:"139822", 
    color:"yellow"
    },
    {name:"Saturn", 
    diameter:"116464", 
    color:"orange"
    },
    {name:"Uranus", 
    diameter:"50724", 
    color:"grey"
    },
    {name:"Neptune", 
    diameter:"49244", 
    color:"blue"
    },
    
];

const solarSystem = document.getElementById("solarSystem")
    for (n = 0; n < planets.length; n ++) {
         let planet = `<div class="circles  d-flex justify-content-center align-items-center  rounded-circle" style="background:linear-gradient(90deg, ${planets[n].color} 50%, ${planets[n].color} 50%, #333 50%,  black 100%);  width: ${planets[n].diameter / 6000}vw; height: ${planets[n].diameter / 6000}vw;" data-bs-toggle="tooltip" data-bs-placement="bottom" title="This is ${planets[n].name} which has a diameter of ${planets[n].diameter} and it is ${planets[n].color} in color.">
     </div>`;
     
    solarSystem.innerHTML += planet;

    };


    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl)
    })
    
