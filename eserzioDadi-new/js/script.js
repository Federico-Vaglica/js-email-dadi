//Gioco dei Dadi
// Generare 2 numeri random , uno per lutente uno per il computer .
//stabilire il vincitore , in    base a chi ha il punteggio piu alto 

var numero1 = Math.floor(Math.random()*6 +1); //Genero i 2 numeri random 
var numero2 = Math.floor(Math.random()*6 +1);

alert('il tuo numero e\':' + numero1);    // Notifico l utente quali numero  sono stati selzionati
alert('il numero del computer e\':' + numero2);

var risultato = 'parita'   // assegno una variabile neutra in caso di parita


// condizione che cambiano la var neutra in caso di perdita o vincita
if (numero1 > numero2) {
    risultato = 'Hai vinto'
} else if (numero1 < numero2) {
    risultato = 'il computer ha vinto'
}

alert(risultato);  //notifico il risultato con un alert 

