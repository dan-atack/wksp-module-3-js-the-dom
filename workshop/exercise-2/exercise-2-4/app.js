// Preset values
const FROGS = 5;

// 1. Create for loop that makes use of FROGS to know how many lanes to create.

// Area 2-1

for (let laneNum = 0; laneNum < FROGS; laneNum++) {    // for every number up to the amount of FROGS,
    let currentLane = document.createElement("li");     // create an li
    let iden = `Lane-${laneNum+1}`;                     // identity = a string with the current lane's number
    let spanner = document.createElement("span");       // create a span
    spanner.id = iden;                                  // spanner id is assigned using identity variable
    currentLane.className = iden;                       // current lane gets identity string as its class
    spanner.innerText = iden;                           // spanner is also given identity again as text, to make it visible.
    document.querySelector("#track").appendChild(currentLane);          // lane is added to the track
    document.querySelector(`.Lane-${laneNum+1}`).appendChild(spanner);    // span is added to lane
};  // SWEET JESUS!

// Area 2-2

let racers = [];

for (let i = 0; i < FROGS; i++) {
    racers.push(frogStable[i]);
};

// Area 2-3

/* Section 3 action plan: 

For each lane, add one frog, to be represented by a button element... for now at least. Button can have name and number as its text.

*/

for (let x = 0; x < racers.length; x++) {                       // For every racer,
    let frog = document.createElement("button");                // create a button to be a frog?? Why not!
    frog.id = `Frog-${x+1}`;                                    // Frogs will need unique IDs to make them hop separately later on.
    frog.innerText = `${racers[x].name} ${racers[x].number}`;   // Button labeled with name and number of the frog
    frog.style.backgroundColor = racers[x].color;               // Frogs get their color as the button's background
    frog.className = "frog";                                    // Class name added.
    document.querySelector(`.Lane-${x+1}`).appendChild(frog);   // Button added to each lane using index+1 to match one frog to each lane id
    racers[x].progress = 0;                                     // Create progress attribute for each frog in the racers array
    let racerName = document.createElement("span");
    racerName.innerText = `|Racer ${x+1} Progress: `;
    let outro = document.createElement("span");
    outro.innerText = `%....|`;
    let progressBar = document.createElement("span");                // Create progress bar visual display span
    progressBar.id = `Frog-${x+1}-Prog`;                             // Add ID to progress bar for later targeting (concieved during exercise 4)
    progressBar.innerText = `${racers[x].progress}`;   // Connect frog object progress attribute to span
    document.querySelector('div').appendChild(racerName);
    document.querySelector(`div`).appendChild(progressBar);                          // Add progress displays to div below the racetrack.
    document.querySelector('div').appendChild(outro);
};

/*
Test Line Garage:

let testline = document.createElement("h2");   // console.log was being a drag so I made this to verify that I did in fact have some frogs.
testline.innerText = `${frog.progress}`;
document.querySelector(".main").appendChild(testline);

*/

// Area 2-4: The Racing Frogs Function

function racingFrog(frogs,idx) {                                       // Since we'll eventually run this for all frogs, there will be an argument for the array, and the index position of each frog.
    let hopping = setInterval(function() {                                // Set interval function is contained within a box function so it can be called separately from its definition.
        frogs[idx].progress += Math.floor(Math.random()*10);               // The frog's progress value increases by a random amount between 1 and 10 each time the function runs, which is every 0.5 seconds.
        document.getElementById(`Frog-${idx+1}`).style.left = `${frogs[idx].progress}%`;    // The frog button element's position from the left edge of the screen is determined by its progress value
        document.getElementById(`Frog-${idx+1}-Prog`).innerText = frogs[idx].progress;      // The frog's progress number is also updated in its span element below the racetrack.
        if (frogs[idx].progress > 100) {                                                    // If a frog gets to the end of the screen (left = 100% on the css) it stops hopping.
            clearInterval(hopping);
        }
    }, 500);   // Every 500 milliseconds the frog hops again.
};

for (let x = 0; x < FROGS; x++) {  // for all the frogs in the stable...
    racingFrog(racers, x);         // ... Get hopping!
};


/*

Move the frog.

*/

// CSS Always comes in last!!!!

let stylesheet = document.createElement("link");
stylesheet.href="/workshop/exercise-2/assets/styles.css";
stylesheet.rel="stylesheet";
document.querySelector("head").appendChild(stylesheet);      // Ooh, visible progress at last! :)
