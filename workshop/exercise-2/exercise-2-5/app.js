// Preset value
const FROGS = 3;

// 1. Create for loop that makes use of FROGS to know how many lanes to create.

// Area 2-1

for (let laneNum = 0; laneNum < FROGS; laneNum++) {                       // for every number up to the amount of FROGS,
    let currentLane = document.createElement("li");                       // create an li
    let iden = `Lane-${laneNum+1}`;                                       // identity = a string with the current lane's number
    let spanner = document.createElement("span");                         // create a span
    spanner.id = iden;                                                    // spanner id is assigned using identity variable
    currentLane.className = iden;                                         // current lane gets identity string as its class
    spanner.innerText = iden;                                             // spanner is also given identity again as text, to make it visible.
    document.querySelector("#track").appendChild(currentLane);            // lane is added to the track
    document.querySelector(`.Lane-${laneNum+1}`).appendChild(spanner);    // span is added to lane
};  // SWEET JESUS!

// Area 2-2

// BONUS CONTENT: Random Frog Selector

function semiRandom() {                           // Randomizer function good for making numbers between 1 and 5
    let result = (Math.floor(Math.random()*10));
    return result;
};

let chosen = [];                                                    // Create empty array for list of chosen index positions from the stable

while (chosen.length < FROGS) {                                     // create a list of numbers, with as many members as there are frogs
    let cur = semiRandom();                                         // Activate random number generator,
    if ((cur < frogStable.length) && (!chosen.includes(cur))) {     // If number is less than the number of frogs in the stable (and thus <= stable's highest index position), AND isn't in chosen index list already, append it.
        chosen.push(cur);
    }
};

let racers = [];

for (let i = 0; i < FROGS; i++) {
    racers.push(frogStable[(chosen[i])]);            // instead of just counting numbers regularly, now we add one number from the chosen list, which was determined at random.
};

// Area 2-3

for (let x = 0; x < racers.length; x++) {                       // For every racer,
    let frog = document.createElement("button");                // create a button to be a frog?? Why not!
    frog.id = `Frog-${x+1}`;                                    // Frogs will need unique IDs to make them hop separately later on.
    frog.innerText = `${racers[x].name} ${racers[x].number}`;   // Button labeled with name and number of the frog
    frog.style.backgroundColor = racers[x].color;               // Frogs get their color as the button's background
    frog.className = "frog";                                    // Class name added.
    document.querySelector(`.Lane-${x+1}`).appendChild(frog);   // Button added to each lane using index+1 to match one frog to each lane id
    racers[x].progress = 0;                                     // Create progress attribute for each frog in the racers array
    let racerName = document.createElement("p");                // The racerName paragraph element will be appended to the main div, and used to display progress and rankings during and after the race, respectively
    racerName.id = `Podium-Space-${racers[x].name}`;                       // The racerName takes a unique ID for later targeting.
    racerName.innerText = `| ${racers[x].name} Progress: `;
    let outro = document.createElement("span");
    outro.innerText = `%....|`;
    let progressBar = document.createElement("span");                            // Create progress bar visual display span
    progressBar.id = `Frog-${x+1}-Prog`;                                         // Add ID to progress bar for later targeting (concieved during exercise 4)
    progressBar.innerText = `${racers[x].progress}`;                             // Connect frog object progress attribute to span
    document.querySelector('div').appendChild(racerName);                        // racerName is a new paragraph appended to the div...
    document.getElementById(`Podium-Space-${racers[x].name}`).appendChild(progressBar);     // progressBar element is appended to new racerName paragraph element,
    document.getElementById(`Podium-Space-${racers[x].name}`).appendChild(outro);           // and the outro element is appended after that to the same paragraph; together they form a line of text displaying the progress % of each frog.
};

// Area 2-4: The Racing Frogs Function

function racingFrog(frogs,idx) {                                                            // Since we'll eventually run this for all frogs, there will be an argument for the array, and the index position of each frog.
    let hopping = setInterval(function() {                                                  // Set interval function is contained within a box function so it can be called separately from its definition.
        frogs[idx].progress += Math.floor(Math.random()*10);                                // The frog's progress value increases by a random amount between 1 and 10 each time the function runs, which is every 0.5 seconds.
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

// Area 2-5: The Podium

let ranking = [];
let suffixes = ["st","nd","rd","th","th"];   // It's the little details that make coding fun...

function awardsCommittee(frogs, idx) {
    let raceOn = setInterval(function() {
        if ((frogs[idx].progress >= 100) && !(ranking.includes(frogs[idx].name))) {
            ranking.push(frogs[idx].name);
            position = document.createElement("span");
            position.innerText = `Frog ${idx+1}, ${frogs[idx].name} finishes in ${ranking.length}${suffixes[(ranking.length-1)]} place!  `// spans contain text with frog's name and rank
            document.getElementById(`Podium-Space-${frogs[idx].name}`).appendChild(position);
            if (ranking.length >= FROGS) {
                clearInterval(raceOn);
                console.log(`Hopping Completed. The winners are: ${ranking[0]} in 1st place, ${ranking[1]} in 2nd, and ${ranking[2]} in 3rd!!! Congratulations everyone who participated, we hope you had fun!`);
            }
        }
    }, 500);
};

for (let i = 0; i < FROGS; i++) {
    awardsCommittee(racers, i);
};

// The computer says that Bouncer won the race, but really, I think we're all winners at this point.

// CSS finishes last!!!!

let stylesheet = document.createElement("link");
stylesheet.href="styles.css";
stylesheet.rel="stylesheet";
document.querySelector("head").appendChild(stylesheet);


