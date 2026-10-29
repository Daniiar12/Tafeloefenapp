
let tafelinputObj = document.getElementById("inputTafel");
let tafeloutputObj = document.getElementById("outputTafel");

function showTafel() {
    let tafel = Number(tafelinputObj.value);
    if (tafelinputObj.value === "") {
        tafeloutputObj.innerHTML = "Vul eerst een getal in.";
        return;
    }
    let output = "";
    for (let teller = 1; teller < 11; teller++) {
        let uitkomst = teller * tafel;
        output += teller + " x " + tafel + " = " + uitkomst + "<br>";
    }
    tafeloutputObj.innerHTML = output;
}


function randomTussen(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function toonFeedback(element, tekst, isGoed) {
    element.innerHTML = tekst;
    element.className = "mt-3 fw-bold " + (isGoed ? "goed" : "fout");
}


let oefenTafelInputObj = document.getElementById("oefenTafelInput");
let oefenSectieObj = document.getElementById("oefenSectie");
let oefenVraagObj = document.getElementById("oefenVraag");
let oefenAntwoordObj = document.getElementById("oefenAntwoord");
let oefenFeedbackObj = document.getElementById("oefenFeedback");

let oefenTafel = 0;
let oefenGetal = 0;

function startOefenen() {
    if (oefenTafelInputObj.value === "") {
        toonFeedback(oefenFeedbackObj, "Vul eerst een tafel in.", false);
        return;
    }
    oefenTafel = Number(oefenTafelInputObj.value);
    oefenSectieObj.classList.remove("d-none");
    oefenFeedbackObj.innerHTML = "";
    nieuweOefenVraag();
}

function nieuweOefenVraag() {
    oefenGetal = randomTussen(1, 10);
    oefenVraagObj.innerHTML = oefenGetal + " x " + oefenTafel + " =";
    oefenAntwoordObj.value = "";
    oefenAntwoordObj.focus();
}

function controleerOefenen() {
    if (oefenAntwoordObj.value === "") {
        toonFeedback(oefenFeedbackObj, "Vul eerst een antwoord in.", false);
        return;
    }
    let antwoord = Number(oefenAntwoordObj.value);
    if (antwoord === oefenGetal * oefenTafel) {
        toonFeedback(oefenFeedbackObj, "Goed zo! 🎉", true);
        nieuweOefenVraag();
    } else {
        toonFeedback(oefenFeedbackObj, "Helaas, fout. Probeer het nog eens!", false);
        oefenAntwoordObj.select();
    }
}


oefenAntwoordObj.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        controleerOefenen();
    }
});


let rangeVanObj = document.getElementById("rangeVan");
let rangeTotObj = document.getElementById("rangeTot");
let rangeSectieObj = document.getElementById("rangeSectie");
let rangeVraagObj = document.getElementById("rangeVraag");
let rangeAntwoordObj = document.getElementById("rangeAntwoord");
let rangeFeedbackObj = document.getElementById("rangeFeedback");

let rangeVan = 0;
let rangeTot = 0;
let rangeTafel = 0;
let rangeGetal = 0;

function startRange() {
    if (rangeVanObj.value === "" || rangeTotObj.value === "") {
        toonFeedback(rangeFeedbackObj, "Vul beide getallen in.", false);
        return;
    }
    rangeVan = Number(rangeVanObj.value);
    rangeTot = Number(rangeTotObj.value);
    if (rangeVan > rangeTot) {
        toonFeedback(rangeFeedbackObj, "Het eerste getal moet kleiner zijn dan het tweede.", false);
        return;
    }
    rangeSectieObj.classList.remove("d-none");
    rangeFeedbackObj.innerHTML = "";
    nieuweRangeVraag();
}

function nieuweRangeVraag() {
    rangeTafel = randomTussen(rangeVan, rangeTot);
    rangeGetal = randomTussen(1, 10);
    rangeVraagObj.innerHTML = rangeGetal + " x " + rangeTafel + " =";
    rangeAntwoordObj.value = "";
    rangeAntwoordObj.focus();
}

function controleerRange() {
    if (rangeAntwoordObj.value === "") {
        toonFeedback(rangeFeedbackObj, "Vul eerst een antwoord in.", false);
        return;
    }
    let antwoord = Number(rangeAntwoordObj.value);
    if (antwoord === rangeGetal * rangeTafel) {
        toonFeedback(rangeFeedbackObj, "Goed zo ", true);
        nieuweRangeVraag();
    } else {
        toonFeedback(rangeFeedbackObj, "Helaas", false);
        rangeAntwoordObj.select();
    }
}

rangeAntwoordObj.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        controleerRange();
    }
});
