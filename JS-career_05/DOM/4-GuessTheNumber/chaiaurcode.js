let randomNumber = parseInt(Math.random() * 1000 + 1);
console.log(randomNumber);
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
let guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas'); // a div of "previous guesses and guess-remaining", we will hide it when the game is over!

const p = document.createElement('p');

let prevGuess = []; // we will show user an arr of prev guesses so user donot waste his chances and use the same guess twice.
let numGuess = 1;

let playGame = true; // condition, once false, game will end!

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault(); // form value (upon sibmitting) goes to server, we want to block this property.
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  // implement checks
  // insert value in prev guesses array
  if (isNaN(guess)) {
    alert('Please Enter A Valid Number!');
  } else if (guess < 1) {
    alert('Please Enter Number greater than 1!');
  } else if (guess > 1000) {
    alert('Please Enter Number lesser than 100!');
  } else {
    prevGuess.push(guess);
    if (numGuess === 10) {
      cleanUpGuess(guess); // is it display the number?
      displayMessage(`Game Over! Random Number was ${randomNumber}`);
      endGame();
    } else {
      cleanUpGuess(guess);
      checkGuess(guess); // Is guessed num higher or lower or equal than randomNumber
    }
  }
}

function checkGuess(guess) {
  // Is guessed num higher or lower or equal than randomNumber
  if (guess === randomNumber) {
    displayMessage('You guessed it right!!!');
    endGame();
  } else if (guess < randomNumber) {
    displayMessage('Number is too low!');
  } else if (guess > randomNumber) {
    displayMessage('Number is too high!');
  }
}

function cleanUpGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += ` ${guess}`;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
  // print message on dom
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 1000 + 1);
    // guessSlot = [];
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
  });
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}
