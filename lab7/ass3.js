let sortFunction = () => Math.random() - 0.7;

let shuffledArray = function (array) {

  return  array.sort(sortFunction);
}

console.log(shuffledArray([10,20,30,40,50,60,70]));
console.log (shuffledArray(['eman','kamal','mona','aya','sara','mahmoud']));


// let shuffledArray = function (array) {

//   return  array.sort(()=>Math.random() - 0.7);
// }
