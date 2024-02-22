//ass1
let numbers =[2,1,3,2,7,2,8,4,3,6,10,9,12];

//ascending sort
let ascArray= numbers.sort(function(a, b){return a-b});
console.table(ascArray);

//descending sort
let dscArray= numbers.sort(function(a, b){return b-a});
console.table(dscArray);

//filter numbers larger than 5
let filteredNumbers = numbers.filter(number => number > 5);
console.log(filteredNumbers);

//min and max number
numbers.sort(function(a, b){return a-b});
console.log(`maximum number in array is equal ${numbers[numbers.length-1]}`);
console.log(`minumum number in array is equal ${numbers[0]}`);

//new array
console.log(Array.from(numbers,(x) => x * 5));

//remove dublicates 
let removeRepeated = function(arr){
let uniqueArray = []; 
    for (let i = 0; i < arr.length; i++) { 
        if (uniqueArray.indexOf(arr[i]) === -1) { 
            uniqueArray.push(arr[i]); 
        } 
    } 
    return uniqueArray;
}
console.log(removeRepeated(numbers));

//count even numbers

let evenNumbersCount = function (array){
 let evenCounter =0;
  for (let i in array){
    if(array[i] %2 ==0){
        evenCounter ++;
    }
  }
  return evenCounter;

}
console.log("even numbers is equal "+evenNumbersCount(numbers));

// display array as string
numbers.toString();
console.log(numbers.join("*"));