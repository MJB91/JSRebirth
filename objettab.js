
//creation d'objet
var toto = {name : "_blank", purpose : "web dev"};
console.log(toto); // output : {name : "_blank", purpose : "web dev"}


//creation d'objet avec proprétés
var toto = {};
toto.name = "_blank"; /* Appel de la propriété name et attribution de la valeur textuelle  "_blank" */
console.log(toto); /* output : { name : '_blank' } */

//accéder à la valeur de propriétés
var toto = {name : "_blank", purpose : "web dev"};
console.log(toto.name);
console.log(toto["purpose"])

//modifier une propriété dans une commande
var toto = { name : "tata" };
toto.name = "_blank"; /* Appel de la propriété name et modification de la valeur textuelle  "_blank" */
toto["name"] = "en fait"
console.log(toto); /* output : { name : 'en fait' } */

//supprimer une propriété
var toto = { name : "_blank", purpose : "dev web" };
delete toto.name;
console.log(toto); /* output : {} */
