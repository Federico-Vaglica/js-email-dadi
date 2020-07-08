//Creare un array di 3 elemnti chiedere un numero all utento e visualizzare l - elemnto desiderato





var email = ['peppe@gmail.com' , 'mario@gmail.com', 'luigi@gmail.com'];
var userEmail = prompt('inserisci la tu email');
var emailTrovata = false

for (i=0; i < email.length ; i++) {
    if(userEmail == email[i]){
        emailTrovata = true 
    } else {}
}

if (emailTrovata == true) {
    alert('Benvenuto')
} else {
    alert('Perfavore registrati')
}

