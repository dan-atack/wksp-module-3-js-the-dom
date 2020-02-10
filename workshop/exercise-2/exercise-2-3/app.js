// Preset values
const FROGS = 5;

// 1. Create for loop that makes use of FROGS to know how many lanes to create.

// Area 2-1

for (let laneNum = 0; laneNum < FROGS; laneNum++) {    // for every number up to the amount of FROGS,
    let currentLane = document.createElement("li");     // create an li
    let iden = `Lane-${laneNum+1}`;                       // identity = a string with the current lane's number
    let spanner = document.createElement("span");       // create a span
    spanner.id = iden;                                  // spanner id is assigned using identity variable
    currentLane.className = iden;                       // current lane gets identity string as its class
    spanner.innerText = iden;                           // spanner is also given identity again as text, to make it visible.
    document.querySelector("#track").appendChild(currentLane);          // lane is added to the track
    document.querySelector(`.Lane-${laneNum+1}`).appendChild(spanner);    // span is added to lane
};  // SWEET JESUS!

// Area 2-1

let racers = [];

for (let i = 0; i < FROGS; i++) {
    racers.push(frogStable[i]);
};

// let testline = document.createElement("h2");   // console.log was being a drag so I made this to verify that I did in fact have some frogs.
// testline.innerText = `${racers[2].name}`;
// document.querySelector(".main").appendChild(testline);

// Area 2-3

/* Section 3 action plan: 

For each lane, add one frog, to be represented by a button element... for now at least. Button can have name and number as its text.


*/

for (let x = 0; x < racers.length; x++) {                       // For every racer,
    let frog = document.createElement("button");                // create a button to be a frog?? Why not!
    frog.innerText = `${racers[x].name} ${racers[x].number}`;   // Button labeled with name and number of the frog
    frog.style.backgroundColor = racers[x].color;               // Frogs get their color as the button's background
    frog.className = "frog";                                    // Class name added.
    document.querySelector(`.Lane-${x+1}`).appendChild(frog);   // Button added to each lane using index+1 to match one frog to each lane id
    racers[x].progress = 0;                                     // Create progress attribute for each frog in the racers array
    let progressBar = document.createElement("span");                // Create progress bar visual display span
    progressBar.innerText = `|Racer ${x+1} Progress: ${racers[x].progress}%....|`;   // Connect frog object progress attribute to span
    document.querySelector(`div`).appendChild(progressBar);                          // Add progress displays to div below the racetrack.
};

let stylesheet = document.createElement("link");
stylesheet.href="/workshop/exercise-2/assets/styles.css";
stylesheet.rel="stylesheet";
document.querySelector("head").appendChild(stylesheet);      // Ooh, visible progress at last! :)

