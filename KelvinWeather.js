//Current forecast
const kelvin = 293;

//Converting kelvin to celsius
const celsius = kelvin - 273;

let fahrenheit;
//formula for calculating fahrenheit using celsius
fahrenheit= celsius * (9/5)+ 32;

//Round the result from decimal to a whole number
Math.floor(fahrenheit);

//Display to the console
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);