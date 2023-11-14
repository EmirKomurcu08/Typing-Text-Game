let words = [
    "Apple", "Banana", "Cat", "Dog", "Elephant", "Fish", "Guitar", "Horse", "Internet", "Jazz",
    "Kangaroo", "Lemon", "Monkey", "Notebook", "Orange", "Piano", "Quasar", "Rainbow", "Sunshine", "Table",
    "Umbrella", "Violin", "Watermelon", "Xylophone", "Yellow", "Zebra", "Airplane", "Balloon", "Coffee", "Dolphin",
    "Eagle", "Flower", "Giraffe", "Hamburger", "Icecream", "Jungle", "Kite", "Lighthouse", "Mountain", "Nectar",
    "Ocean", "Penguin", "Quilt", "Raspberry", "Starfish", "Telescope", "Universe", "Voyage", "Waterfall", "X-ray",
    "Yacht", "Zipline", "Asparagus", "Basketball", "Chandelier", "Dinosaur", "Eucalyptus", "Fountain", "Gazelle",
    "Hemisphere", "Infinity", "Jigsaw", "Kaleidoscope", "Lunar", "Majestic", "Nautical", "Oregano", "Ponder", "Quicksilver",
    "Radiant", "Serendipity", "Tranquil", "Utopia", "Velocity", "Whimsical", "Xenon", "Yesteryear", "Zenith"];
  
let currentWord;
let score = 0;
let timer = 60;
let isPlaying = false;

function startGame() {
  if (!isPlaying) {
    isPlaying = true;
    document.getElementById("input-box").focus();
    document.getElementById("text-display").innerText = getRandomWord();
    updateScore();
    updateTimer();
    setInterval(updateTimer, 1000);
    setTimeout(endGame, 60000);
  }
}

function getRandomWord() {
  currentWord = words[Math.floor(Math.random() * words.length)];
  return currentWord;
}

function check() {
  const userInput = document.getElementById("input-box").value;
  if (userInput === currentWord) {
    score++;
    document.getElementById("input-box").value = "";
    document.getElementById("text-display").innerText = getRandomWord();
    updateScore();
  }
}

function updateScore() {
  document.getElementById("score").innerText = "Score: " + score;
}

function updateTimer() {
  if (isPlaying) {
    document.getElementById("timer").innerText = "Time: " +  timer;
    timer--;
  }
}

function endGame() {
  isPlaying = false;
  alert("Game over! Your total score: " + score);
  resetGame();
}

function resetGame() {
    location.reload();
}

document.getElementById("input-box").addEventListener("input", check);
