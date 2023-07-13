var choices = [
  { name: "batu", image: "img/rock.jpg" },
  { name: "gunting", image: "img/scisscor.jpg" },
  { name: "kertas", image: "img/paper.jpg" },
];
var playerChoice;
var resultText = document.getElementById("resultText");
var replayButton = document.getElementById("replayButton");
var fotoElements = document.getElementsByClassName("foto");
var contohElement = document.querySelectorAll(".contoh");

function play(choice) {
  playerChoice = choice;
  var compIndex = Math.floor(Math.random() * choices.length);
  var comp = choices[compIndex].name;
  var hasil;
  replayButton.style.display = "block";
  if (playerChoice === comp) {
    hasil = `Seri! Kamu memilih ${playerChoice} dan komputer memilih ${comp}`;
  } else if (
    (playerChoice === "batu" && comp === "gunting") ||
    (playerChoice === "gunting" && comp === "kertas") ||
    (playerChoice === "kertas" && comp === "batu")
  ) {
    hasil = `Kamu Menang! Kamu memilih ${playerChoice} dan komputer memilih ${comp}`;
  } else {
    hasil = `Kamu Kalah. Kamu memilih ${playerChoice} dan komputer memilih ${comp}`;
  }

  resultText.textContent = hasil;
  resultText.classList.remove("hidden");

  disableAllButtons();
  replayButton.classList.remove("hidden");

  for (var i = 0; i < fotoElements.length; i++) {
    var choiceClass = fotoElements[i].classList[0];
    if (choiceClass === "player-choice") {
      fotoElements[i].src = choices.find(
        (choice) => choice.name === playerChoice
      ).image;
      fotoElements[i].classList.remove("hidden");
    } else if (choiceClass === "comp-choice") {
      fotoElements[i].src = choices.find(
        (choice) => choice.name === comp
      ).image;
      fotoElements[i].classList.remove("hidden");
    } else {
      fotoElements[i].classList.add("hidden");
    }
  }

  // Sembunyikan foto contoh
  for (var element of contohElement) {
    element.classList.add("hidden");
  }
}

function disableAllButtons() {
  var buttons = document.getElementsByClassName("button");
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].classList.add("hidden");
  }
}

function replay() {
  resultText.classList.add("hidden");

  var buttons = document.getElementsByClassName("button");
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("hidden");
  }
  for (var i = 0; i < fotoElements.length; i++) {
    fotoElements[i].classList.add("hidden");
  }
  for (var i = 0; i < contohElement.length; i++) {
    contohElement[i].classList.remove("hidden");
  }
  replayButton.style.display = "none"; // Menyembunyikan tombol replay setelah menyembunyikannya
}
