//Alle Aufgaben 
//Namen Ausgeben
console.log("Abdelbasset");

//Aufgabe 2-5
const readline = require('readline');
const read1 = ausgabe.createInterface({input: process.stdin, output: process.stdout});

function getRandom(max)
{
    return Math.floor(Math.random * Math.floor(max)); //Die Methode Floor gibt den größten Integer an
}
var max_Bewertung = 5;
var aktuelleAnzahlAnBewertungen = 0;
var bewertung = 0;

const Baum = function() {
     read1.question('Enter 1 to give your rating, enter 2 to get a random rating \n', function(x){
         switch (parseInt(x)){
             case 1:
                 me(log);
                 break;
            case 2:
                random(log);
                break;
            default:
                console.log("False input");
                break;
         }
     })
} //Baum meistverwendete Datenstruktur in Web-Entwicklung. Für die Verschachtelung wichtig, Hierarchisiert die gespeicherten Bewertungen
const random = function(callback) //Rückruffunktion, wird nach Baum() ausgeführt und dient als Attribut von Baum() Bei einer callback-Funktion als Argument wird nicht das Ergebnis der Funktion x an Funktion y übergeben, sondern die Funktion selber, die dann an einer beliebigen Stelle ausgeführt wird. Vor oder nach dem callback können beliebige Anweisungen stehen.
{
    var random;
    for(var i = 1; i <= 10; i++)
    {
        random = getRandom(9);
        bewertung += random;
        console.log("The user" + i + "has given" + random + "stars"); 
    }
    callback(("The application got the rating of" + Math.round(bewertung / i*10)/10 + "stars out of" + max_Bewertung));
    read1.close()
}
Baum()
