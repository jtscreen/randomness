//////////////////////
// GLOBAL VARIABLES //
//////////////////////
const alphabet = "abcdefghijklmnopqrstuvwxyz";
const foods = [
    "pizza",
    "burgers",
    "rice and beans",
    "lasagna",
    "macaroni and cheese",
    "baked potatoes"
];

const students = [
    "Bob",
    "Martin",
    "Danny",
    "Mahdi",
    "Harry",
    "Sean",
    "Robert"
];

/////////////////////////////
// END OF GLOBAL VARIABLES //
/////////////////////////////

console.log(Math.floor(Math.random() * 21 + 1))

i = Math.floor(Math.random()*alphabet.length + 1)
console.log(alphabet.charAt(i));

i = Math.floor(Math.random()*6 + 1)
console.log(foods[i])

i = Math.floor(Math.random()*6 +1)
console.log(students[i]) 

let n = 0
while (n<3){
    student = ""
    i = Math.floor(Math.random()*6 +1)
    student += students[i]
    console.log(student)
    n++;
}