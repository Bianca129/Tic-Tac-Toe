let boxen = document.getElementsByClassName("box");
let arr1 = ["", "", "", "", "", "", "", "", ""]; //Array für Spieler1
let arr2 = ["", "", "", "", "", "", "", "", ""]; //Array für Spieler2
let player_1 = "X";
let player_2 = "O";
let ps = document.getElementsByClassName("ergebnis");

let anzahlGewonnenX = 0;
let anzahlGewonnenY = 0;

let start = false;

let stop = false;

let zaehler = 0;
let letzterSpieler = "";

let gewinn = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let gewinnFelder = [];

function setzen(element) {
  if (stop == false) {
    //Wenn Spiel noch nicht fertig gespielt ist
    if (start) {
      if (element.innerHTML != player_1 && element.innerHTML != player_2) {
        //ausgewähltes Feld muss leer sein, dann setzt Spieler1 sein x
        element.innerHTML = player_1;
        element.classList.add("boxX");
        let num1 = +element.id;
        arr1[num1] = num1;
        start = false;
        zaehler++;
        ps[0].innerHTML = "Spieler 1 (0) ist an der Reihe.";
      }
    }

    if (start == false) {
      if (element.innerHTML != player_1 && element.innerHTML != player_2) {
        //ausgewähltes Feld muss leer sein, dann setzt Spieler2 sein o
        element.innerHTML = player_2;
        element.classList.add("boxY");
        let num2 = +element.id;
        arr2[num2] = num2;
        start = true;
        zaehler++;
        ps[0].innerHTML = "Spieler 2 (X) ist an der Reihe.";
      }
    }
    pruefen();
  }
}

function pruefen() {
  let winner = false;

  for (let i = 0; i < gewinn.length; i++) {
    let g = gewinn[i];

    let zelleA1 = arr1[g[0]];
    let zelleB1 = arr1[g[1]];
    let zelleC1 = arr1[g[2]];

    let zelleA2 = arr2[g[0]];
    let zelleB2 = arr2[g[1]];
    let zelleC2 = arr2[g[2]];

    if (
      zelleA1 == arr1[zelleA1] &&
      zelleB1 == arr1[zelleB1] &&
      zelleC1 == arr1[zelleC1]
    ) {
      gewinnFelder = [zelleA1, zelleB1, zelleC1];
      winner = true;
      gewinner(winner);
      stop = true;
    }

    if (
      zelleA2 == arr2[zelleA2] &&
      zelleB2 == arr2[zelleB2] &&
      zelleC2 == arr2[zelleC2]
    ) {
      gewinnFelder = [zelleA2, zelleB2, zelleC2];
      winner = false;
      gewinner(winner);
      stop = true;
    }

    if (zaehler == 9) {
      ps[0].innerHTML = "Unentschieden";
    }
  }
  for (let i = 0; i < boxen.length; i++) {
    for (let j = 0; j < gewinnFelder.length; j++) {
      if (boxen[i].id == String(gewinnFelder[j])) {
        boxen[i].style.border = "3px solid red";
      }
    }
  }
  return winner;
}

function gewinner(winner) {
  letzterSpieler = ps[0].innerHTML;
  let neuerSpielstand = document.getElementById("spielstand");
  if (winner) {
    ps[0].innerHTML = "Spieler 2 (X) hat gewonnen";
    anzahlGewonnenX++;
  }
  if (winner == false) {
    ps[0].innerHTML = "Spieler 1 (0) hat gewonnen";
    anzahlGewonnenY++;
  }
  neuerSpielstand.innerHTML =
    "Spielstand (O vs. X): " + anzahlGewonnenY + ":" + anzahlGewonnenX;
}

function replay() {
  arr1 = ["", "", "", "", "", "", "", "", ""]; //Array für Spieler1
  arr2 = ["", "", "", "", "", "", "", "", ""]; //Array für Spieler2
  gewinnFelder = [];
  start != start;

  stop = false;
  zaehler = 0;

  for (let i = 0; i < boxen.length; i++) {
    boxen[i].innerHTML = "";
    boxen[i].classList.remove("boxX");
    boxen[i].classList.remove("boxY");
    boxen[i].style.border = "3px solid #52c5c5";
  }

  ps[0].innerHTML = letzterSpieler;
}
