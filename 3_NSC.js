
const prompt = require('prompt');
//calls prompt module
prompt.start();

prompt.get(['basicSalary'], function (err, salo)
//returns value entered via command line
 {

const payee =()=>{
    // calculate nssf
    const nssfMin = 0.06;
    let nssf2 = 0;
    
    if (salo.basicSalary <= 6000){
        nssf2 += Math.floor(salo.basicSalary * nssfMin);
    }
    else if(salo.basicSalary > 6000 && salo.basicSalary <=18000){
        nssf2 += Math.floor((salo.basicSalary-6000) * nssfMin + 360);
    }
    else{
        nssf2 += 1080;
    }

    let salary = salo.basicSalary - nssf2;
    let personalRelief = 2400;
    
  //throws an error
  if (err) { return onErr(err);
  }
  let paye=0;
    let nhif = 0;
    //set paye and nhif to value 0
//calculate paye by taking the basic salary less nssf assigned variable salary
// paye is calculated in three categories

    if (salary<=24000) {
          paye += 2400;
          //if the salary is less than or equal to 2400 it will update the paye 2400
    } else if(salary>24000 && salary<=32333){
        paye += Math.floor(((salary-24000)*0.25) + 2400)
        //if salary is more than 24000 and less than 32333
        //it subtracts 24000 from salary and the multiply by 0.25 the add 2400 
    }
    else if(salary>32333){
        paye += Math.floor(((salary-32333)*0.3) + 2083.33 + 2400);
        //checks if the salary is more than 32333
        //if so, takes salary less 32333 multiply by 0.3
        //the add 2083.33 and 2400 to the value obtained
    }

    //it implements if-else statement to determine the nhif to be deducted
    if (salo.basicSalary >= 1000) {
        if (salo.basicSalary  >= 1000 && salo.basicSalary  <= 5999) {
            nhif += 150;
        } else if (salo.basicSalary  >= 6000 && salo.basicSalary  <= 7999) {
            nhif += 300;
        } else if (salo.basicSalary  >= 8000 && salo.basicSalary  <= 11999) {
            nhif += 400;
        } else if (salo.basicSalary  >= 12000 && salo.basicSalary  <= 14999) {
            nhif += 500;
        } else if (salo.basicSalary  >= 15000 && salo.basicSalary  <= 19999) {
            nhif += 600;
        } else if (salo.basicSalary  >= 20000 && salo.basicSalary  <= 24999) {
            nhif += 750;
        } else if (salo.basicSalary  >= 25000 && salo.basicSalary  <= 29999) {
            nhif += 850;
        } else if (salo.basicSalary  >= 30000 && salo.basicSalary  <= 34999) {
            nhif += 900;
        } else if (salo.basicSalary  >= 35000 && salo.basicSalary  <= 39999) {
            nhif += 950;
        } else if (salo.basicSalary  >= 40000 && salo.basicSalary  <= 44999) {
            nhif += 1000;
        } else if (salo.basicSalary  >= 45000 && salo.basicSalary  <= 49999) {
            nhif += 1100;
        } else if (salo.basicSalary  >= 50000 && salo.basicSalary  <= 59999) {
            nhif += 1200;
        } else if (salo.basicSalary  >= 60000 && salo.basicSalary  <= 69999) {
            nhif += 1300;
        } else if (salo.basicSalary  >= 70000 && salo.basicSalary  <= 79999) {
            nhif += 1400;
        } else if (salo.basicSalary >= 80000 && salo.basicSalary  <= 89999) {
            nhif += 1500;
        } else if (salo.basicSalary  >= 90000 && salo.basicSalary  <= 99999) {
            nhif += 1600;
        } else if (salo.basicSalary  >= 100000) {
            nhif += 1700;
        }
    } else {
        nhif += 0;
    }

    //to get paye you less personal relief
    //for net monthly salary you take basic salary less nhif, nssf and paye 
    let pay = paye-personalRelief;
    let pow =salo.basicSalary  - (pay + nhif  + nssf2);
    console.log('  Basic Salary: ' + salo.basicSalary);
    console.log('  Paye without relief: ' + paye);
    console.log('  NHIF Contribution: ' + nhif);    
    console.log('  nssf contribution: ' + nssf2);
    console.log('  paye with relief: ' + pay); 
    console.log('  Net Monthly Salary: ' + pow);
}

payee();
});

function onErr(err) {
    console.log(err);
    return 1;
  }