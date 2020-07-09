//Gioco dei Dadi
// Generare 2 numeri random , uno per lutente uno per il computer .
//stabilire il vincitore , in    base a chi ha il punteggio piu alto 

var numero1 = Math.floor(Math.random()*6 +1);
var numero2 = Math.floor(Math.random()*6 +1);

alert('il tuo numero e\':' + numero1);
alert('il numero del computer e\':' + numero2);

var risultato = 'parita'

if (numero1 > numero2) {
    risultato = 'Hai vinto'
} else if (numero1 < numero2) {
    risultato = 'il computer ha vinto'
}

alert(risultato);

