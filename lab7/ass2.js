let arrayOfNumbers = function(min, max,arrlength){
 let randomArray =[];
 if(arrlength %2 ==0){
  while(randomArray.length < arrlength){
   let input = (Math.ceil(Math.random()*max));
   if(input >= min){
      randomArray.push(input);
       randomArray.push(input);
  }
 }
}
 return randomArray;
}


console.log(arrayOfNumbers(10,20,8));

console.log(arrayOfNumbers(1,10,6));

console.log(arrayOfNumbers(3,20,5));