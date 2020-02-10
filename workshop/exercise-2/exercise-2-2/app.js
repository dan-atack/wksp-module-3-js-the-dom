// Preset values
const FROGS = 3;

// 1. Create for loop that makes use of FROGS to know how many lanes to create.

for (let laneNum = 1; laneNum <= FROGS; laneNum++) {    // for every number up to the amount of FROGS,
    let currentLane = document.createElement("li");     // create an li
    let iden = `Lane-${laneNum}`;                       // identity = a string with the current lane's number
    let spanner = document.createElement("span");       // create a span
    spanner.id = iden;                                  // spanner id is assigned using identity variable
    currentLane.className = iden;                       // current lane gets identity string as its class
    spanner.innerText = iden;                           // spanner is also given identity again as text, to make it visible.
    document.querySelector("#track").appendChild(currentLane);          // lane is added to the track
    document.querySelector(`.Lane-${laneNum}`).appendChild(spanner);    // span is added to lane
};  // SWEET JESUS!

let racers = [];

for (let i = 1; i <= FROGS; i++) {
    racers.push(frogStable[i]);
};

//let testline = document.createElement("h2");   // console.log was being a drag so I made this to verify that I did in fact have some frogs.
//testline.innerText = `${racers[2].name}`;
//document.querySelector(".main").appendChild(testline);

