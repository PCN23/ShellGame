// import functions and grab DOM elements
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');

const winEl = document.getElementById('winResults');
const losEl = document.getElementById('losResults');
const totalEl = document.getElementById('totalResults');
// let state
let wins = 0
let loses = 0
// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
button1.addEventListener('click', () => {
  const randomNumber1 = Math.ceil(Math.random() * 10); 
    if (randomNumber1 === 1 ) {
      wins++;
    } else {
      loses++;
    }
  winEl.textContent = wins
  console.log(winEl);
 });