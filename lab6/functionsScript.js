//1
function pascalCase (fullname){
 let StrWords = fullname.split(" ");
 for (let i= 0 ;i<StrWords.length;i++){
   StrWords[i] = StrWords[i][0].toUpperCase() + StrWords[i].substr(1);
    
 }
 
 fullname= StrWords.join(" ");
 return fullname;
}


//2
// function calcLongestWord(sentence){
// let words = sentence.split(" ");
// let longestWord=0;
// for (let i= 0 ;i<words.length;i++){
//    if(words[i].length > longestWord){ 
//       longestWord = words[i].length; 
//         }
// }
// return longestWord;

// }

//////2
function calcLongestWord(str){ 
  let words = str.split(" ");
   return words.sort((a, b) => b.length - a.length)[0] ;
   }  

//3
function sortStr (str){
 let words = str.split("");
   return words.sort().join("");

}

//4
 function month_name(date){
 let monthlist = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
     return monthlist[date.getMonth()];
   };
   
//5
function randomArray (){
let randomeNumbers = [];
while (randomeNumbers.length <5){
var input = (Math.ceil((Math.random()*10 )));
if(randomeNumbers.indexOf(input) === -1) {
  randomeNumbers.push(input)
};
  // randomeNumbers[i]=Math.floor((Math.random()*10 )+1);
}
return randomeNumbers;
}

let makeArray = function(min,max,length){
    let array=[];
    if (length%2==0){
        while(array.length<length){
            let value=(Math.ceil(Math.random()*max));
            if(value>=min){
            array.push(value,value);
            
            }
             
        }
      return array; 
    }

}
console.log("array is equal",makeArray(1,10,6))

   
let shuffle = function(array){
  return array.sort(()=>Math.random()-0.7)

}

console.log(shuffle(["eman","kamal","mona","mahmoud","aya"]))

let rows = Number(prompt("enter number of rows"));
let cols =Number (prompt("enter number of cols"))
let arr =new Array(rows);
for (let i=0;i<rows;i++){
   arr[i]= new Array(cols)
}

for(let i=0;i<rows;i++){
  for(let j=0;j<cols;j++){
    arr[i][j]=Number(prompt(`enter student ${i+1} grades`))
  }
}
for (let i=0;i<rows;i++){
  let sum = arr[i].reduce((total,e)=>total+e,0)

console.log("sum is",sum)
}
console.log(arr);
for (let j = 0; j < cols; j++) {
  let sum = 0;
  for (let i = 0; i < rows; i++) {
    sum = sum + arr[i][j];
  }
  console.log(`Sum of column ${j + 1} is ${sum}`);
}