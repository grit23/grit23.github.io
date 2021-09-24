//Declaring global variables
// c = document.getElementById("nummerCanvas");
//var ctx = c.getContext("2d");
//Nedan definerar globala variabler, ska laddas först på index.html, före nb.js.


//var c = document.getElementById("nummerCanvas");
//var ctx = c.getContext("2d");
//Global canvasvariabel - funkar inte så....som ovan

var clickNumber = 0; //räknar klick för att visa rätt bild
//console.log(clickNumber+"från nb_global.js");

var sifferNummer = 0; //gör att man vet vilken siffra som ska visas
//Slut globala variabler

var enGang = 1; //för att köra en if-slinga en gång i mouseup
var startBild = 0; //för att välja ett spann, första och sist bilden.
var slutBild = 10; //defaultvärde om man inte väljer med knapp 

var bildBank = []; //gör denna global för att ladda bildern innan eventet klick händer

var textBank =[];  //innehåller text som till bilderna - t ex vad den föreställer

var laddat_bildbank=0;  //sätts till 1 när bildbank laddats en gång så att inte alla bilder laddas om 

var farg_toggle_val3=0;   //ändrar sig när man trycker på knapp 1 - state för att ändra färg 
var farg_toggle_val4=0;   //ändrar sig när man trycker på knapp 1 - state för att ändra färg 
var farg_toggle_val5=0;   //ändrar sig när man trycker på knapp 1 - state för att ändra färg 
var farg_toggle_val6=0;   //ändrar sig när man trycker på knapp 1 - state för att ändra färg 
var farg_toggle_val7=0;   //ändrar sig när man trycker på knapp 1 - state för att ändra färg
var farg_toggle_val8=0;   //ändrar sig när man trycker på knapp 1 - state för att ändra färg

var logo1 = new Image;