// Comments are on the README.md file
const ps= require('prompt-sync');
const prompt=ps();

let marks= prompt('Enter Student\'s marks: ')

    if(marks<=100 && marks>0)
    {

    if(marks>79){
    console.log('  Grade: ' + 'A');
    }
    else if (marks<79 && marks >=60){
        console.log('  Grade: ' + 'B');
    }
    else if (marks<60 && marks >=49){
        console.log('  Grade: ' + 'C');
    }
    else if (marks<49 && marks >=40){
        console.log('  Grade: ' + 'D');
    }
    else if (marks<40 && marks >=0){
        console.log('  Grade: ' + 'E');
    }
}
    else{
        console.log('Entry should be between 0 and 100');
    }
