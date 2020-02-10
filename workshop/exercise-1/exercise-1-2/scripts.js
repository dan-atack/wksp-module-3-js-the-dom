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

headline.className = "headline";
paragraph.className = "introtext";
subheader.className = "subheader";
imdb.className = "imdb";
img1.className = "img1";
bodypara1.className = "bodypara";
bodypara2.className = "bodypara";
source.className = "source";

// Content insertion last!

document.querySelector('#main').appendChild(headline);
document.querySelector('#main').appendChild(paragraph);
document.querySelector('#main').appendChild(subheader);
document.querySelector('#main').appendChild(imdb);
document.querySelector('#main').appendChild(img1);
document.querySelector('#main').appendChild(bodypara1);
document.querySelector('#main').appendChild(bodypara2);
document.querySelector('#main').appendChild(source);
document.querySelector("head").appendChild(stylesheet);

