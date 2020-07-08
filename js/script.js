//Creare un array di 3 elemnti chiedere un numero all utento e visualizzare l - elemnto desiderato


var email = ['peppe@gmail.com' , 'mario@gmail.com', 'luigi@gmail.com'];
var userEmail = prompt('inserisci la tu email');

for (i=0; i < email.length ; i++) {
    if (userEmail == email[i]) {
        alert('Exist');
        break;  
    } else {
        alert('Not exist');
        break;        
    }
}