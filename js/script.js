document.getElementById('genera').addEventListener("click", function() {
    var nomeCognome = document.getElementById('nome-cognome').value;
    document.getElementById('nome-passeggero').innerHTML = nomeCognome;

    // Prendere un numero random da 1 a 9.
    var carrozza = Math.floor(Math.random() * 10);
    document.getElementById('n-carrozza').innerHTML = carrozza;

    // Prendere un numero random da 1 a 999.999.
    var codiceCP = Math.floor(Math.random() * 100000);
    document.getElementById('codice').innerHTML = codiceCP;

    // Età del passeggero.
    var eta = document.getElementById('lista-eta').value;
    var offerta;

    // Calcolo prezzo del biglietto.
    var km = document.getElementById('km').value;
    var prezzoBiglietto = km * 0.22;
    var prezzo;

    // Funzione per calcolare il prezzo in base allo sconto.
    if (eta == "maggiorenne") {
        prezzo = prezzoBiglietto;
        offerta = "Standard";
        document.getElementById('costo').innerHTML = prezzo;
        document.getElementById('offerta').innerHTML = offerta;
    } else if (eta == "minorenne" ) {
        prezzo = prezzoBiglietto - prezzoBiglietto * 0.20;
        offerta = "Sconto Minorenni";
        document.getElementById('costo').innerHTML = prezzo;
        document.getElementById('offerta').innerHTML = offerta;
    } else if (eta == "over65") {
        prezzo = prezzoBiglietto - prezzoBiglietto * 0.40;
        offerta = "Sconto Silver";
        document.getElementById('costo').innerHTML = prezzo;
        document.getElementById('offerta').innerHTML = offerta;
    }



});
