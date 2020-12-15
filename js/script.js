// variabili
var nomeInput = document.getElementById('nome').value;
var distanza = document.getElementById('km').value;
var age = document.getElementById('eta').value;
var prodotto = km * 0.21 ;
var costoBiglietto = 0.21 * distanza;


//calcolo scontistica in base all'età
if (age < 18){
  costoBiglietto = (prodotto - (prodotto * 20 / 100));
}
else if (age > 65){
  costoBiglietto = (prodotto - (prodotto * 40 / 100));
}
else {
  costoBiglietto = prodotto;
}
document.getElementById('costoBiglietto').innerHTML += Math.round(costoBiglietto) + "&#36;" ;
