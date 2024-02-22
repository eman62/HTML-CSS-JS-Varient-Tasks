
function calcAverage (){
    let average =0;
    let sum =0;
    for(let i=0;i<arguments.length;i++){
        sum +=arguments[i];
        average  = sum /(arguments.length);
        
    }
return average;
}

//function checkWinner
function checkWinner (score1 ,score2,score3,score4,score5,score6){
    let firstTeamAverage = calcAverage(score1,score2,score3);
    let secondTeamAverage =calcAverage(score4,score5,score6);
    if (firstTeamAverage>secondTeamAverage){
        console.log(" First Team is the winner");
    }
    else if(firstTeamAverage<secondTeamAverage){
        console.log("second team is the winner")
    }
    else{
        console.log(" two teams is equal in score");
    }
    
}
//function to check if the number is valid
function checkNumber (number){
    while (isNaN(number)|| number==""){
        number=Number(prompt("please enter valid number"));
    }
 return number;
}

//2 prompt sum two numbers



let first_number = checkNumber (Number(prompt("enter first number","0") ) );

let second_number = checkNumber (Number(prompt ("enter second number","0")) );

console.log(first_number +second_number);
alert (`the sum is equal ${first_number+second_number}`);
   



//3 prompt sum any count of numbers
let numbersCount =checkNumber( Number(prompt("enter how many numbers you want to sum","0") ) );
let sum=0;
for (let i=0; i<numbersCount;i++ ){
   let numbers_count =checkNumber (Number (prompt(`enter number ${i+1}`)) );
    sum+=numbers_count;  
}
alert(`sum is equal ${sum}`);
// let number1 =prompt ("enter a first number");
// while(typeof (number1 !==Number)){


//  number1 =prompt ("enter a first number");  
// }
//let number2 =prompt ("enter a number");

// c call function before defination
console.log(printVariables(20,30,40));
//h
//let value_4=90;
value_4 =90;
//testing
function printVariables(value_1,value_2,value_3){
    //f
    console.log("value 4 before defination is " +value_4);
    var value_4=3;
    var value_5=5;
    console.log(" value of 4 and 5 is: "+value_4 +" " +value_5);
    //print values with arguments
    for (let i=0; i<arguments.length;i++){
    console.log (`${arguments[i]}`);
    }
    return `variable is : ${value_1} ${value_2} ${value_3}`
}
//a
console.log(printVariables(20,30,40));

//console.log(value_4);