let arrOne = [3, 5, 22, 5, 7, 2, 45, 75, 89, 21, 2]; 
let arrTwo = [9, 2, 42, 55, 71, 22, 4, 5, 90, 25, 26]; 
let sum = 0; 
for (let i = 0; i < arrOne.length; i++){
  sum += arrOne[i]; 
   
}
let secondSum = 0; 
console.log(sum); 
for (let j = 0; j < arrTwo.length; j++){
    secondSum += arrTwo[j]; 
}
console.log(secondSum); 

console.log(sum + secondSum);  