console.log('Hallo Abdelbasset, hier spricht dein personalisierter MS-5');

const readline = require('readline');
const read = readline.createInterface({input: process.stdin, output: process.stdout});

function getRandomInt(max)
{
  return Math.floor(Math.random()*Math.floor(max));
}

var max_Bewertung = 5;
var anzahl_Bewertung = 0;
var bewertung = 0;

const main = function()
{
  read.question('1 -> um selber eine Bewertung angeben\n'+'2 -> um Zufaellige Bewertung abgeben\n', function(x)
  {

      switch(parseInt(x))
      {
            case 1:
                    me(log);
                    break;

            case 2:
                    random(log);
                    break;

            default:
                    console.log('Falsche Eingabe!');
                    break;
      }
  })
}

//Zufalls Werte
const random = function(callback)
{
  var random;
  for (var i= 1; i <= 20; i++)
  {
    random = getRandomInt(6);
    bewertung += random;
    console.log('Person '+i+' hat '+random+' Sterne gegeben');
  }
  callback(('Die App hat '+Math.round(bewertung/i*10)/10+' von '+max_Bewertung+' Sternen'));

  read.close();
}

const log = function(message)
{
  console.log(message);
}

const calculate = myArr =>
{
    const sum = myArr.reduce((total, amount)=> total + amount);
    const cal = sum / myArr.length;

    console.log('Die Durchschnittliche Bewertung ist '+ Math.round(cal);
};

var question = (q) =>
{
  return new Promise((res,rej)=>
  {
    read.question(q, answer =>
      {
        res(answer);
      })
  });
};

const me = async function eingabe(callback)
{
  var x;
  const myArr = [];

  while(x != 'quit')
  {
  x = await question('Was ist Ihre Bewertung?\n')
    {
      switch(x)
      {
        case '1':
                myArr.push(1);
                break;
        case '2':
                myArr.push(2);
                break;
        case '3':
                myArr.push(3);
                break;
        case '4':
                myArr.push(4);
                break;
        case '5':
                myArr.push(5);
                break;
        case 'calc':
                  calculate(myArr);
                  break;
        case 'count':
                    callback(myArr);
                    break;
        default:
              console.log('Falsche Eingabe');
              break;
      }//switch
    }//while
  } //fun2
  read.close();
}//func1

main();
