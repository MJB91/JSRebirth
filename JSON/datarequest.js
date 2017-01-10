var button = document.getElementById("ajax"); //déclaration variable et evenement lié au bouton
button.addEventListener("click", getdata);    //associer requête au bouton

function getdata() {
  var request = new XMLHttpRequest(); //création de la requête
  request.onreadystatechange = function (){
    if (request.readyState == 4 && request.status == 200) {
      handleRequest(request);
    }
  }
  request.open("GET", "data.json", true); //spécification de la requête, l'adresse et si la requête est asynchrone (non bloquante)
  request.send();
}

function handleRequest(request) {
  console.log(request.responseText);
  var obj = JSON.parse(request.responseText);
  for (var key in obj) {
    var table = obj[key];
    // Create HTML for the first key
    var element = document.createElement("h2");
    element.innerText = key; //add text to element
    document.body.appendChild(element);
    // Create list for each key
    var list = document.createElement("ul");
    for (var i = 0; i < table.length ; i++) {
      var person = table[i]; // each student / teacher / admin
      var listItem = document.createElement("li");
      for (var k in person) {
        listItem.innerText += k + " : " + person[k] + " ";
      }
      list.appendChild(listItem);
    }
    document.body.appendChild(list);
  }
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

//handle request 2 (version finale de la fonction editée hors-commentaires)
//          function handleRequest(request) {
//          console.log(request.responseText);
//          var obj = JSON.parse(request.responseText);
//          for (var prop in obj) {
//              console.log(prop,obj[prop]);
//            }
//          };
