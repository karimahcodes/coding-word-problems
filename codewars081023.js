// add the value "codewars" to the websites array 1,000 times
var websites = [];

function addWord(){
  for(let i=0; i<1000; i++){
    websites.push("codewars")
}
  return websites;
}


/* 
alternate solution


use Array to create a new array object with a length of 1000


var websites = Array(1000).fill("codewars")
console.log(websites)

*/