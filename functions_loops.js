//Write a function named calculateDogAge that:
//takes 1 argument: your puppy's age.
//calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.


function calculateDogAge(age){
   let dogAge = age * 7;
   return console.log(`your puppy is ${dogAge} years old`)
}

calculateDogAge(5); 
calculateDogAge(11);
calculateDogAge(1); 



/*Write a function named calculateSupply that:
takes 2 arguments: age, amount per day.
calculates the amount consumed for rest of the life (based on a constant max age).
outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
Call that function three times, passing in different values each time.*/

function calculateSupply(age, amountPerDay) {
  var maxLife = 100; 
  var daysLeft = (maxLife - age) * 365; 
  var totalAmmount = (daysLeft * amountPerDay); 
  return console.log(`You will need ${totalAmmount} to last you until the ripe old age of ${maxLife}`); 
}

calculateSupply(90,1); 
calculateSupply(20,10); 
calculateSupply(9,2); 

/*Create 2 functions that calculate properties of a circle, using the definitions here.

Create a function called calcCircumfrence:

Pass the radius to the function.
Calculate the circumference based on the radius, and output "The circumference is NN".
Create a function called calcArea:

Pass the radius to the function.
Calculate the area based on the radius, and output "The area is NN".*/

function calcCircumfrence(radius){
   let circumfrence = (3.141592 * 2) * radius; 
   return console.log(`The circumfrence is ${circumfrence}.`); 
}

function calcArea(radius){
   let area = (3.141592 * (radius**2));  
   return console.log(`The area is ${area}.`); 
}

calcArea(2); 
calcCircumfrence(2); 

/*It's hot out! Let's make a converter based on the steps here.

Create a function called celsiusToFahrenheit:

Store a celsius temperature into a variable.
Convert it to fahrenheit and output "NN°C is NN°F".
Create a function called fahrenheitToCelsius:

Now store a fahrenheit temperature into a variable.
Convert it to celsius and output "NN°F is NN°C."*/

const celsiusToFahrenheit = (celsius) => {
   var fahrenheit = (celsius * 1.8) + 32; 
   return console.log (`${celsius} degrees celsius is ${fahrenheit} degrees fahrenheit`); 
}

const fahrenheitToCelsius = (fahrenheit) => {
   var celsius = (fahrenheit -32) / 1.8; 
   return console.log (`${fahrenheit} degrees fahrenheit is ${celsius} degrees celsius`); 
}

celsiusToFahrenheit(10); 
fahrenheitToCelsius(10); 

/*Write a function named tellFortune that:
takes 4 arguments: number of children, partner's name, geographic location, job title.
outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
Call that function 3 times with 3 different values for the arguments.*/

const tellFortune = (numOfChildren, partnerName, location, job) => {
     return console.log(`You will be a ${job} in ${location}, and married to ${partnerName} with ${numOfChildren} kids.`); 
}

tellFortune(3,'Bill', 'New York', 'singer'); 
tellFortune(2,'Remy', 'France', 'chef'); 
tellFortune(10,'Amber', 'New Mexico', 'dead man'); 

//loop 0-20 check if even or odd.

for (var num = 0; num <= 20; num++) {
   if (num % 2 === 0) {
      console.log(`${num} is even`); 
   } else {
      console.log(`${num} is odd`); 
   } 
}
console.log(num)

for (var i = 0; i <= 10; i++) {
   newNum = i * 9;  
   console.log(`${i} * 9 = ${newNum}`); 
}
  

for (var grade = 0; grade <= 100; grade++){
   if (grade > 90) {
      console.log(`${grade} you got an A.`); 
   } else if (grade > 80) {
      console.log(`${grade} you got a B.`);
   } else if (grade > 70) {
      console.log(`${grade} you got a C.`);
   } else if (grade > 60) {
      console.log(`${grade} you got a D.`);
   } else {
      console.log(`${grade} you got an F.`);
 }
}


function assignGrade(score){
   if (grade > 90) {
      return 'A'; 
   } else if (grade > 80) {
      return 'B'; 
   } else if (grade > 70) {
      return 'C'; 
   } else if (grade > 60) {
      return 'D'; 
   } else {
      return 'F'; 
   }
}

for (var i = 50; i <= 100; i++) {
console.log(`For ${i}, you got a ${assignGrade(i)}`);   
}
