import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
let cartas = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
let simbolos = [
  `<i class="bi bi-suit-diamond-fill"></i>`,
  `<i class="bi bi-suit-club-fill"></i>`,
  `<i class="bi bi-heart-fill"></i>`,
  `<i class="bi bi-suit-spade-fill"></i>`
];

window.onload = function() {
  mostrarCarta();
};

function randomCard() {
  let randomCard = cartas[Math.floor(Math.random() * cartas.length)];
  let randomSimbol = simbolos[Math.floor(Math.random() * simbolos.length)];

  const card = `<div class='d-flex justify-content-center p-3'>
  <div class='card position-relative'>
  <div class='top-icon position-absolute top-0 start-0 m-4'>
  ${randomSimbol}
  </div>
  <div class='number position-absolute top-50 start-50 translate-middle fs-1'> ${randomCard} </div>
  <div class='bottom-icon position-absolute bottom-0 end-0 m-4'>
  ${randomSimbol}
  </div>
  </div>`;
  return card;
}

function setCardSize() {
  let width = document.querySelector(".cardWidth").value;
  let height = document.querySelector(".cardHeight").value;
  let card = document.querySelector(".card");
  card.style.width = width + "px";
  card.style.height = height + "px";
}

function mostrarCarta() {
  document.querySelector(".card-content").innerHTML = randomCard();
}
window.mostrarCarta = mostrarCarta;

document.querySelector(".cardWidth").addEventListener("change", setCardSize);
document.querySelector(".cardHeight").addEventListener("change", setCardSize);
