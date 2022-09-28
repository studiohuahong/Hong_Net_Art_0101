//DRAFT SCRIPT

/* selecting elements */
const staticCat = document.querySelector(".static.cat-container");
const kittyFace = document.querySelector('.cat-face');
const kittyTail = document.querySelector('.cat-tail');
const kittyMessage = document.querySelector(".cat-speech-bubble");
const textCollection = ["Hi, I am Jenga Jam!","Meow I want Salmon Can!","Zzzzzz...","Where is my ball?","LASER!!!"];
const faceCollection = ["o w o","^ w ^","@ ^ @","$ * $","* ^ *","! o !","- ^ -","# * #"];

const staticBall = document.querySelector(".static.ball-container");

/* manipulating content, styles, classes of elements */
//kittyFace.innerHTML = "o w o";
//kittyMessage.innerText = "Hi, I am Jenga Jam!";
kittyTail.style.backgroundColor = 'black'; //notice tail remains black
// staticCat.classList.add("calico");

/* event listeners */
// pet the cat
staticCat.addEventListener("mouseenter", startWaggingTail);
staticCat.addEventListener("mouseleave", stopWaggingTail);
function startWaggingTail() {
  staticCat.classList.add("aggro");
}
function stopWaggingTail() {
  staticCat.classList.remove("aggro");
}
// toggle wagging animation on click
staticCat.onclick = () => {
  staticCat.classList.toggle("aggro");
};

// onclick the cat moves elsewhere
staticCat.addEventListener("click", function () {
  //we're being lazy with a static buffer, could make it cat-sized
  const catBuffer = 200;
  // pick a random screen position
  let randomX = rng(catBuffer, window.innerWidth - catBuffer);
  let randomY = rng(catBuffer, window.innerHeight - catBuffer);
  // console.log(randomX);
  this.style.left = `${randomX}px`;
  this.style.top = `${randomY}px`;

  let randomIndex = getRandomInt(5)
  kittyMessage.innerText = textCollection[randomIndex];

  let randomIndexFace = getRandomInt(8)
  kittyFace.innerHTML = faceCollection[randomIndexFace]
  // console.log(randomIndex);
});

// onclick the cat moves elsewhere
staticBall.addEventListener("click", function () {
  //we're being lazy with a static buffer, could make it cat-sized
  const ballBuffer = 200;
  // pick a random screen position
  let randomX = rng(ballBuffer, window.innerWidth - ballBuffer);
  let randomY = rng(ballBuffer, window.innerHeight - ballBuffer);
  // console.log(randomX);
  this.style.left = `${randomX}px`;
  this.style.top = `${randomY}px`;

  // console.log(randomIndex);
});

/*** HELPER FUNCTIONS ***/
function rng(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}