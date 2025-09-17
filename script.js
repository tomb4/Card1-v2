let cards = [
  { front: "Capital of France?", back: "Paris" },
  { front: "2 + 2", back: "4" },
  { front: "Largest planet?", back: "Jupiter" }
];
let currentIndex = 0;

const flashcard = document.getElementById("flashcard");
const front = document.getElementById("front");
const back = document.getElementById("back");

function renderCard() {
  front.textContent = cards[currentIndex].front;
  back.textContent = cards[currentIndex].back;
  flashcard.classList.remove("flipped");
}

flashcard.addEventListener("click", () => {
  flashcard.classList.toggle("flipped");
});

function nextCard() {
  currentIndex = (currentIndex + 1) % cards.length;
  renderCard();
}

function prevCard() {
  currentIndex = (currentIndex - 1 + cards.length) % cards.length;
  renderCard();
}

function addCard() {
  const frontText = document.getElementById("frontInput").value;
  const backText = document.getElementById("backInput").value;
  if (frontText && backText) {
    cards.push({ front: frontText, back: backText });
    document.getElementById("frontInput").value = "";
    document.getElementById("backInput").value = "";
    currentIndex = cards.length - 1;
    renderCard();
  }
}

renderCard();
