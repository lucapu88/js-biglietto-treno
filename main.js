var chilometri = parseInt(prompt('Per favore inserisci la cifra dei chilometri del tuo viaggio'));
console.log(chilometri);
var età = parseInt(prompt('Grazie! Ora dicci la tua età così calcolo la scontistica'));
console.log(età);
//calcolo del costo del Biglietto
var biglietto =  Math.ceil(chilometri * 0.21);

//calcolo dello sconto
if (età < 18) { // se il passeggero ha meno di 18 anni
  var sconto1 = (biglietto * 20) / 100;
  document.getElementById('costo').innerHTML = sconto1 + '€';
  console.log(sconto1);
}
else if (età > 65 ) { // se il passeggero ha più di 65 anni
  var sconto2 = (biglietto * 40) / 100;
  document.getElementById('costo').innerHTML = sconto2 + '€';
  console.log(sconto2);
}
else { // se il passeggero ha un'età maggiore di 18 e minore di 65 anni
  document.getElementById('costo').innerHTML = biglietto;
  console.log(biglietto);
}

//se viene inserito un valore che non è un numero
if(isNaN(chilometri)) {
    document.getElementById('costo').innerHTML = ('Scusa, hai inserito dei caratteri. Per favore inserisci solo numeri');
}
if(isNaN(età)) {
    document.getElementById('costo').innerHTML = ('Scusa, hai inserito dei caratteri. Per favore aggiorna la pagina e inserisci solo numeri');
}

//se viene data un'età troppo alta
if (età > 120) {
  document.getElementById('costo').innerHTML = ('Credo tu non sia vivo');
}
//se viene data un'età in negativo
if (età < 0) {
  document.getElementById('costo').innerHTML = ('Mi dispiace ma non sei ancora nato');
}
//se viene dato un chilometraggio in negativo
if (chilometri < 0) {
  document.getElementById('costo').innerHTML = ('Non so dove tu voglia andare ma indietro non si può! inserisci una distanza al di sopra dello 0');
}

//rendo il display visibile dopo aver compilato i prompt
document.getElementById('costo-biglietto').setAttribute('class','visible');
