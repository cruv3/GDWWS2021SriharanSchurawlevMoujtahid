//Alle Aufgaben 
//Mit console.log den Namen ausgeben
console.log("AsSalamu'aleykum Abdelbasset!");

//Userinput für die App-Bewertung ermöglichen
const readline = require('readline');
const readl = readline.createInterface({input: process.stdin, output: process.stdout});

//Die zu deklarierende Werte
const maxRating = 5.0; //maximale Note
var numOfRating = 0; //Anzahl der Bewertungen
var userRating = 0;  //Nutzerbewertung für die durchschnittliche Bewertung
var totalRating = userRating / numOfRating; //Durschnittliche Bewertung

var ratingName = 'Rating number: ';
var idRatings = 0;
var myRatings = [];

//Ausgabe der Variablen
function output()
{
    console.log('The ammount of rating is' + numOfRating);
    console.log('The maximal rating is' + maxRating);
    console.log('The average rating is' + totalRating);
    console.log(' ');
}
//Bewertung mit Benutzeroberfläche
//Methode rate() {}
const rate = () => 
{
    return new Promise((resolve, reject)=>{
        readl.question('Please rate: ', function(answer){
            if (answer<=maxRating){
                //Anzahl an Bewertungen wird ausgezählt
                numOfRating++;
                //Durchschnittliche Bewertung wird angepasst
                totalRating = userRating + parseInt(answer);
                //Bewertungsobjekt
                let ratings = {ratingName: ratingName + numOfRating,
                               numOfRating: numOfRating,
                               indRatings: parseInt(answer),
                                ratingTool: () => {return this.totalRating=(userRating/numOfRating);}};
                                myRatings.push(ratings);
                                console.log("The ammount of ratings is: " + myRatings.length);
                                console.log("The total rating is:" + ratings.idRatings);
                                totalRating = ratings.ratingTool();

                                console.log(ratings.ratingName);
                                console.log("Rating Tool: " + ratings.ratingTool());
            }
            else{
                console.log("False input! Try again.");
            }
            resolve(); 
        });
    })
}
//Huch!? Die zufällige Bewertung
function random()
{
    for ( let i=0; i<5; i++)
    {
        var y = Math.round((Math.random()*(4)+1));
        //Bewertung hinzufügen-->(+1)
        numOfRating++;
        //Durchschnitt erneuern | Gesamtbewertung (Get an update boi)
        userRating = userRating + y;
        //Bewertungs-Objekt (update)
        let ratings = {ratingName: ratingName + numOfRating, numOfRating: numOfRating, idRatings: y, ratingTool: ()=> {return this.totalRating = (userRating/numOfRating);}};

        totalRating=ratings.ratingTool();
        console.log(ratings.ratingName);
        myRatings.push(ratings);

        console.log("The ammount of ratings is: " + myRatings.length);
        console.log("The total rating is:" + ratings.idRatings);
        console.log("Rating Tool: " + ratings.ratingTool());
     output();
    }
}
//zufällige Bewertung by x
//Methode mit const()

const randomxRating=()=>{
    return new Promise((resolve, reject)=>{
        readl.question("How many ratings you wanna output?", function(answer){
            var ammountRatings = parseInt(answer);
            for(let x=0; x<ammountRatings; x++)
            {
                //Random value generator
                var y = Math.round((Math.random() * (4) + 1));
                //Ammount +1
                numOfRating++;
                //Schnitt wird erneuert
                userRating = userRating + y;
                //Bewertungs-Objekt
                let ratings={
                    ratingName: ratingName + userRating,
                    userRating: userRating,
                    idRatings: y,
                    ratingTool : () => {return this.totalRating=(userRating/numOfRating);}
                };
                myRatings.push(ratings);
                console.log("The ammount of ratings is: " + myRatings.length);
                console.log("This is rating: " + ratings.ratingTool());
            output();    
            }
        resolve();
        });
    })
}
const main = async () =>
{
    await rate()
    await randomxRating()
    readl.close()
}
main();

