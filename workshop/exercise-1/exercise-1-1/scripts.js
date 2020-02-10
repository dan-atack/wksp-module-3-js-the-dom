const headline = document.createElement("h1");

headline.innerText = "The best How I Met Your Mother episode (according to fans)";

document.querySelector('body').appendChild(headline);

const paragraph = document.createElement('p');

paragraph.innerText = "As impossible as it seems to name just one of the amazing 208 episodes as the best, the fans have spoken and the highest-rated episode is, wait for it...";

document.querySelector('body').appendChild(paragraph);

const subheader = document.createElement('h2');

subheader.innerText = "The Slap Bet (Season 2, Episode 9)";

document.querySelector('body').appendChild(subheader);

const imdb = document.createElement('p');

imdb.innerText = "IMDB Rating: 9.5";

document.querySelector('body').appendChild(imdb);

const img1 = document.createElement('img');

img1.setAttribute ("src","images/robin-sparkles.jpg", "alt","Robin Sparkles");

document.querySelector('body').appendChild(img1);

const bodypara1 = document.createElement('p');

bodypara1.innerText = "Yadda yadda yadda (that's a quote from what is, in my humble opinion, a much much better sitcom)";

document.querySelector('body').appendChild(bodypara1);

const bodypara2 = document.createElement('p');

bodypara2.innerText = "My favourite episode of the IT Crowd is the one where Moss and Roy give Jenn 'the internet' and tell her to be careful not to drop it. The D & D episode is also hilarious... I don't want to stereotype, but as far as I've seen, the Americans don't hold a candle to the British in the sitcom department. Cartoons, however, are another story - see The Simpsons, Futurama, South Park, Rick and Morty, Robot Chicken... Even Family Guy has its moments.";

document.querySelector('body').appendChild(bodypara2);

const source = document.createElement('a');

source.href="https://himym2017.wordpress.com/2017/03/25/the-best-himym-episode-according-to-fans/";

source.innerText = "Source";

document.querySelector('body').appendChild(source);

const stylesheet = document.createElement('link');

stylesheet.href = "styles.css";

stylesheet.rel = "stylesheet";

document.querySelector("head").appendChild(stylesheet);

