// var genera = document.getElementById('genera');
//
// genera.addEventListener("click", function() {
//     console.log("genera");
// });

document.getElementById('genera').addEventListener("click", function() {
    var nomeCognome = document.getElementById('nome-cognome').value;
    document.getElementById('nome-passeggero').innerHTML = nomeCognome;

    var carrozza = Math.floor(Math.random() * 10);
    document.getElementById('n-carrozza').innerHTML = carrozza;

    var codiceCP = Math.floor(Math.random() * 100000);
    document.getElementById('codice').innerHTML = codiceCP;
});
