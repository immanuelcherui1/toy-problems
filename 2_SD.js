// comments are on the README.md file
const ps = require('prompt-sync');

 const prompt=ps();
 
let speed = prompt('Enter speed: ');

const speedLimit = 70;
const kmPerPoint = 5;

if (speed <= speedLimit || speed<75) {
    console.log('ok');
}
    
let points = Math.floor((speed - speedLimit) / kmPerPoint);

  if (points >= 12) {
    console.log("License suspended");
  }
  
  else {console.log("Points", points);
  }
