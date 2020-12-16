// GENERA
var btnGenera = document.getElementById("genera");

btnGenera.addEventListener("click",
function(){
  // variabili
  var nomeInput = document.getElementById('nome').value;
  var distanza = document.getElementById('km').value;
  var age = document.getElementById('eta').value;
  //variabili con calcolo
  var costoBiglietto = 0.21 * distanza;
  var tipoTariffa = "Standard";
  var min = 10000;
  var max = 99999;
  var numeroRandom = Math.floor(Math.random() * (max - min + 1) ) + min;

  //calcolo scontistica in base all'età
  if (age == "minorenne"){
    costoBiglietto = costoBiglietto - (costoBiglietto * 20 / 100);
    tipoTariffa = "Young"
  }
  else if (age == "over"){
    costoBiglietto = costoBiglietto - (costoBiglietto * 40 / 100);
    tipoTariffa = "Senior"
  }
  else {
    costoBiglietto = costoBiglietto;
  }
  document.getElementById('costo').innerHTML += Math.round(costoBiglietto) + "&#36;" ;

  // Stampa dei dati nel Biglietto
  // NOME PASSEGGERO
  document.getElementById("nome-passeggero").innerHTML = nomeInput;
  //TARIFFA
  document.getElementById("tariffa").innerHTML = tipoTariffa;
  // CARROZZA
  document.getElementById("carrozza").innerHTML = Math.floor(Math.random()*9) +1;
  // CODICE CP RANDOM 99999
  document.getElementById("codice-cp").innerHTML = Math.floor(Math.random() * (max - min + 1) ) + min;
  // COSTO DEL BIGLIETTO CON EVENTUALE SCONTO
  document.getElementById("costo").innerHTML = costoBiglietto.toFixed(2) + " $";
  // SHOW
  document.getElementById("ticket").className = "show";
}
);
// ANNULLA
var btnAnnulla = document.getElementById("annulla");

btnAnnulla.addEventListener("click",
function(){
  //ANNULLA GLI IMPUT
  document.getElementById('nome').value = " ";
  document.getElementById('km').value = " ";
  document.getElementById('eta').value = " ";
  // ANNULLA LA STAMPA
  // NOME PASSEGGERO
  document.getElementById("nome-passeggero").innerHTML = " ";
  //TARIFFA
  document.getElementById("tariffa").innerHTML = " ";
  // CARROZZA
  document.getElementById("carrozza").innerHTML = " ";
  // CODICE CP RANDOM 99999
  document.getElementById("codice-cp").innerHTML = " "
  // COSTO DEL BIGLIETTO CON EVENTUALE SCONTO
  document.getElementById("costo").innerHTML = " ";
  // HIDDEN
  document.getElementById("ticket").className = "hidden";
}
);
