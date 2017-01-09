var button = document.getElementById("ajax"); //déclaration variable et evenement lié au bouton
button.addEventListener("click", getdata);    //associer requête au bouton

function getdata() {
  var request = new XMLHttpRequest(); //création de la requête
  request.open("GET", "data.json", true); //spécification de la requête, l'adresse et si la requête est asynchrone (non bloquante)
  request.send();
  request.onreadystatechange = function (){
    if (this.readyState == 4 && this.status == 200) {
      console.log(request.responseText);
    }
  }
};
function handleRequest(request) {
  console.log(request);
}


//CORRECTION :

//            window.onload = function() {
//            var ajax = document.getElementById("ajax");
//            ajax.addEventListener("click", makeRequest);
//            };

// RQST Func.
//           function makeRequest() {
//           var request = new XMLHttpRequest();
//           request.open("GET", "data.json", true);
//           request.send();
//           };

// HANDLE
//          function handleRequest(request) {
//          if (event.readyState == 4 && event.status == 200) {
//          var myJson = request.responseText
//          } else {
//if something went wrong
//          alert("something went wrong...");
//          console.log("request",request,"event",this);
//          }
//          };
//          request.open("GET","data.json",true); //opening request to retrieve data.json asynchronously
//          request.send(); //sending request
//          }

//handle request 2
//        function handleRequest(request) {
//        console.log(request);
//        }
