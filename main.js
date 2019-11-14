var chilometri = parseInt(prompt('Per favore inserisci i chilometri del tuo viaggio'));
console.log(chilometri);
var età = parseInt(prompt('dicci la tua età così calcolo la scontistica'));
console.log(età);
//calcolo del costo del Biglietto
var biglietto = chilometri * 0.21;

//calcolo dello sconto
if (età < 18) { // se il passeggero ha meno di 18 anni
  var sconto1 = (biglietto * 20) / 100;
  document.getElementById('costo').innerHTML = sconto1;
}
else if (età > 65 ) { // se il passeggero ha più di 65 anni
  var sconto2 = (biglietto * 40) / 100;
  document.getElementById('costo').innerHTML = sconto2;
}
else { // se il passeggero ha un'età maggiore di 18 e minore di 65 anni
  document.getElementById('costo').innerHTML = biglietto;
}
