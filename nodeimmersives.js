// Check the get-input.js code as well as the README for the lowdown on the beefing up we've done!
const getInput = require("./get-input.js");

const firstName = getInput(0);
const lastName = getInput(1);
const fullName = firstName + ' ' + lastName;

console.log('Hi! ' + fullName);
console.log('Time to scream your name! ' + fullName.toLocaleUpperCase());
console.log('The initials of your name are '+ firstName[0] + '.' + lastName[0] + '.');
console.log('Here is your very own Code Immersives email: ' + firstName.toLowerCase() + '.' + lastName.toLowerCase() + '@codeimmersives.com');