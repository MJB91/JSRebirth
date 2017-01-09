//Qu'est-ce qu'une méthode ?
//Une méthode est une propriété qui a pour particularité d'être une fonction.
//Elle est donc associée à l'objet et on peut l'appeler comme montré à la suite.

/*
var toto = {name : "_blank", purpose : "web dev"};
toto.show = function() {
    console.log("olé");
}
toto.show();

*/

// avec this

/*Lorsque l'on appelle la methode show de l'objet toto,
on peut voir que le this fait référence à l'objet propriétaire de la fonction,
soit toto.*/

var toto = {name : "_blank", purpose : "web dev"};
toto.show = function() {
    console.log(this);
}
toto.show();
