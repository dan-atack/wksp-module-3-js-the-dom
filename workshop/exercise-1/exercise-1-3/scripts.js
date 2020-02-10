// Variable Declarations first!

const headline = document.createElement("h1");
const paragraph = document.createElement('p');
const subheader = document.createElement('h2');
const imdb = document.createElement('p');
const img1 = document.createElement('img');
const bodypara1 = document.createElement('p');
const bodypara2 = document.createElement('p');
const source = document.createElement('a');
const stylesheet = document.createElement('link');
let bod = document.body;
let main = document.getElementById("main");

// Variable attribute assignments next!

headline.innerText = "The best How I Met Your Mother episode (according to fans)";
paragraph.innerText = "As impossible as it seems to name just one of the amazing 208 episodes as the best, the fans have spoken and the highest-rated episode is, wait for it...";
subheader.innerText = "The Slap Bet (Season 2, Episode 9)";
imdb.innerText = "IMDB Rating: 9.5";
img1.setAttribute ("src","images/robin-sparkles.jpg", "alt","Robin Sparkles");
bodypara1.innerText = "Yadda yadda yadda (that's a quote from what is, in my humble opinion, a much much better sitcom)";
bodypara2.innerText = "My favourite episode of the IT Crowd is the one where Moss and Roy give Jenn 'the internet' and tell her to be careful not to drop it. The D & D episode is also hilarious... I don't want to stereotype, but as far as I've seen, the Americans don't hold a candle to the British in the sitcom department. Cartoons, however, are another story - see The Simpsons, Futurama, South Park, Rick and Morty, Robot Chicken... Even Family Guy has its moments.";
source.href="https://himym2017.wordpress.com/2017/03/25/the-best-himym-episode-according-to-fans/";
source.innerText = "Source";
stylesheet.href = "styles.css";
stylesheet.rel = "stylesheet";

// Assign class names to the HTML:

/* 

headline.className = "headline";
paragraph.className = "introtext";
subheader.className = "subheader";
imdb.className = "imdb";
img1.className = "img1";
bodypara1.className = "bodypara";
bodypara2.className = "bodypara";
source.className = "source";

*/  // Not sure if these tags worked, since when I turned them off everything kept working!

// Content insertion last!

document.querySelector('#main').appendChild(headline);
document.querySelector('#main').appendChild(paragraph);
document.querySelector('#main').appendChild(subheader);
document.querySelector('#main').appendChild(imdb);
document.querySelector('#main').appendChild(img1);
document.querySelector('#main').appendChild(bodypara1);
document.querySelector('#main').appendChild(bodypara2);
document.querySelector('#main').appendChild(source);
// document.querySelector("head").appendChild(stylesheet);

// CSS via Javascript :)

bod.style.background = "rgba(246,187,33, .8) url('./images/yellow-umbrella.jpg') no-repeat";
bod.style.backgroundSize = "100%";
bod.style.fontFamily = "Playfair Display, serif";

main.style.background = "#fafafa";
main.style.borderRadius = "4px";
main.style.boxShadow = "8px 10px 25px 0 rgba(128, 128, 128, .44)";
main.style.minWidth = "320px";
main.style.width = "600px";
main.style.margin = "36px";
main.style.padding = "4px 32px 32px";

headline.style.fontFamily = "Open Sans, sans-serif";
headline.style.textAlign = "center";

subheader.style.fontFamily = "Open Sans, sans-serif";
subheader.style.textAlign = "left";

bodypara1.style.fontSize = "17px";
bodypara1.style.lineHeight = "1.5em";

bodypara2.style.fontSize = "17px";
bodypara2.style.lineHeight = "1.5em";

paragraph.style.fontSize = "17px";
paragraph.style.lineHeight = "1.5em";

imdb.style.fontSize = "17px";
imdb.style.lineHeight = "1.5em";

img1.style.border = "#fafafa";
img1.style.borderRadius = "4px";
img1.style.boxShadow = "4px 4px 14px rgba(128, 128, 128, .4)";
img1.style.width = "100%";

source.style.color = "#174E7C";
source.style.display = "block";
source.style.fontWeight = "700";
source.style.marginTop = "auto";
source.style.textAlign = "right";
source.style.textDecoration = "none";