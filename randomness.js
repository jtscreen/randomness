//////////////////////
// GLOBAL VARIABLES //
//////////////////////
const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
i = Math.floor(Math.random()*alphabet.length + 1)
console.log(alphabet[i]);
//alphabet.charAt(6);
const foods = [
    "pizza",
    "burgers",
    "rice and beans",
    "lasagna",
    "macaroni and cheese",
    "baked potatoes"
];
i = Math.floor(Math.random()*6 + 1)
console.log(foods[i])
const students = [
    "Bob",
    "Martin",
    "Danny",
    "Mahdi",
    "Harry",
    "Sean",
    "Robert"
];
i = Math.floor(Math.random()*6 +1)
console.log(students[i]) 

let n = 0
while (n<3){
    i = Math.floor(Math.random()*6 +1)
    console.log(students[i]) 
    n++;
}
/////////////////////////////
// END OF GLOBAL VARIABLES //
/////////////////////////////

console.log(Math.floor(Math.random() * 21 + 1))
