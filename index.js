// Write your code in this file!
function scuberGreetingForFeet(feet) {
let x = feet;

if (x <= 400){
return "This one is on me!";
}

else if (2000<x==x<2501){
return "I will gladly take your thirty bucks.";
    }

else if (x >= 2501){
  return "No can do.";
    }
  }

function ternaryCheckCity(city){
     return city === 'NYC' ? "Ok, sounds good." : "No go.";
   }

function switchOnCharmFromTip(){
 let tip = 10;
  switch (tip) {
      case 'generous':
      return "Thank you so much.";
      break;

      case 'not as generous':
      return "Thank you.";
      break;

    case 'thanks for everything':
      return "Bye.";
      break;
        }
      }
