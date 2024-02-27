// oppgave 1
/*
function sum(a, b, c) {
    return a+b+c;

}
    let tall1 = Number(prompt("Skriv inn tall 1"));
    let tall2 = Number(prompt("Skriv inn tall 2"));
    let tall3 = Number(prompt("Skriv inn tall 3"));

console.log(sum(tall1, tall2, tall3));*/

// oppgave 2
/*
function random() {
    var tall = Math.round(Math.random()*10);
    var tall2 = Math.round(Math.random()*10);  

    if (tall > tall2) {
        return tall + "er større enn" + tall2;
    } else if (tall < tall2) {
        return tall + "er mindre enn" + tall2;
    } else {
        return tall + "er lik" + tall2;
    }
}

console.log(random());*/

// oppgave 3
/*
function kalkulator(a, b) {

    if (operator == '+') {
        resultat = a+b;
    }
    else if (operator == '-') {
        resultat = a-b;
    }
    else if (operator == '*') {
        resultat = a*b;
    }
    else {
        resultat = a/b;
    }

    alert(`svaret er ${resultat}`);
}

let num1 = parseFloat(prompt("Skriv inn tall 1"));
let operator = prompt(`Skriv inn enten (+, -, * eller /)`);
let num2 = parseFloat(prompt("Skriv inn tall 2"));

kalkulator(num1, num2);*/

// oppgave 4
/*
function randomTall() {
    num1 = parseFloat(prompt("Skriv inn tall 1"));
    num2 = parseFloat(prompt("Skriv inn tall 2"));
    var random = Math.round(Math.random() * (num2 - num1 - 1) + num1 + 1);   

    alert(`Tallet du fikk er ${random}`);
}

randomTall();*/

// oppgave 5
/*
function sortere() {
    var tallListe = [];

    for (let i = 1; i <= 5; i++) {
        var tall = parseFloat(prompt("Skriv inn tall " + i));
        tallListe.push (tall);
    }
    
    tallListe.sort(function (a, b) {
        return a - b;
    });

    alert("Tall sortert fra minst til størst: " + tallListe.join(", "))

}

sortere();*/

// oppgave 6 utfordring
/*
function royken() {
    let tekst = '';

    for (let i = 0; i < 9; i++) {
        if (i % 3 === 0) {
            tekst += '<div class="rad">';
        }
        tekst += '<div class="boks">Røyken VGS</div>';
        if ((i + 1) % 3 === 0) {
            tekst += '</div>';
        }
    }
    document.body.innerHTML = tekst;
}

royken();*/

// oppgave 7 utfordring
/*
function størsteTall() {
    var num1 = parseFloat(prompt("Skriv inn tall 1"));
    var num2 = parseFloat(prompt("Skriv inn tall 2"));
    var num3 = parseFloat(prompt("Skriv inn tall 3"));

    if (isNaN (num1) || isNaN(num2) || isNaN(num3)) {
        alert("Skriv inn et gyldig tall");
        return;
    }

    var BigNumber = Math.max(num1, num2, num3);
    alert("Det største tallet er " + BigNumber);
}

størsteTall();*/

// oppgave 8 

function prosess() {
    var startTall = parseInt(prompt("Skriv inn et heltall"));

    if (isNaN(startTall) || !Number.isInteger(startTall)) {
        alert("Skriv inn et gyldig tall")
        return;
    }

    alert(startTall);

    while (startTall !== 1) {
        if (startTall % 2 === 0) {
            startTall = startTall / 2;
        }
        else {
            startTall = 3 * startTall + 1;
        }
        alert(startTall);
    }
}

prosess();