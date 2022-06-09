// question 1

var integer = prompt("Enter a character like a-z , A-Z , 0-9")

if (integer === "A" || integer === "B" || integer === "C" || integer === "D" || integer === "E" || integer === "F" || integer === "G" || integer === "H" || integer === "I" || integer === "J" || integer === "K" || integer === "L" || integer === "M" || integer === "N" || integer === "O" || integer === "P" || integer === "Q" || integer === "R" || integer === "S" || integer === "T" || integer === "U" || integer === "V" || integer === "W" || integer === "X" || integer === "Y" || integer === "Z") {
    alert("This is a Uppercase letter")
}
else if  (integer === "a" || integer === "b" || integer === "c" || integer === "d" || integer === "e" || integer === "f" || integer === "g" || integer === "h" || integer === "i" || integer === "j" || integer === "k" || integer === "l" || integer === "m" || integer === "n" || integer === "o" || integer === "p" || integer === "q" || integer === "r" || integer === "s" || integer === "t" || integer === "u" || integer === "v" || integer === "w" || integer === "x" || integer === "y" || integer === "z") {
    alert("This is a Lowercase letter");
}
else {
    alert ("This is a number")
}

//  question 2

var val1 = +prompt("Write a first Number ")
var val2 = +prompt("Write a second Number ")

if (val1 > val2){
    alert (num1 + " is greater then " + num2)
}
else if (val1 < val2){
    alert (num1 + " is less then " + num2)
}
else {
    alert ("Both values are equal")
}

// question 3
var num1 = +prompt ("Enter a number")

if (num1 > 0){
    alert ("This is a positive number")
}
else if (num1 < 0){
    alert ("This is a negative number")
} else {
    alert ("This is zero")
}

// question 4
var integer = prompt("Enter a character like a-z , A-Z")

if ( integer === "B" || integer === "C" || integer === "D" ||  integer === "F" || integer === "G" || integer === "H" || integer === "J" || integer === "K" || integer === "L" || integer === "M" || integer === "N" || integer === "P" || integer === "Q" || integer === "R" || integer === "S" || integer === "T" || integer === "V" || integer === "W" || integer === "X" || integer === "Y" || integer === "Z" || integer === "b" || integer === "c" || integer === "d"  || integer === "f" || integer === "g" || integer === "h"  || integer === "j" || integer === "k" || integer === "l" || integer === "m" || integer === "n" || integer === "p" || integer === "q" || integer === "r" || integer === "s" || integer === "t" || integer === "v" || integer === "w" || integer === "x" || integer === "y" || integer === "z"){
    alert (" This is not a vowel")
} else {
    alert ("This is a vowel")
}

// question 5
var password = +prompt ("Enter a password")
var c_password = +prompt ("Enter a confirm password")

if (password === c_password){
    alert ("Password created")
}
else if (password !== c_password){
    alert ("password is wrong")
}

// question 6
var hour = 13;
if (hour < 18) {
    alert("Good day");
}
else {
    alert("Good evening");
}

// question 7
var time = +prompt("Enter a time in 24 hour clock format like 0-24")

if (time === 00){
    alert ("this time is equal to 12 am")
}
else if (time === 01){
    alert ("this time is equal to 1 am")
}
else if (time === 02){
    alert ("this time is equal to 2 am")
}
else if (time === 03){
    alert ("this time is equal to 3 am")
}
else if (time === 04){
    alert ("this time is equal to 4 am")
}
else if (time === 05){
    alert ("this time is equal to 5 am")
}
else if (time === 06){
    alert ("this time is equal to 6 am")
}
else if (time === 07){
    alert ("this time is equal to 7 am")
}
else if (time === 08){
    alert ("this time is equal to 8 am")
}
else if (time === 09){
    alert ("this time is equal to 9 am")
}
else if (time === 10){
    alert ("this time is equal to 10 am")
}
else if (time === 11){
    alert ("this time is equal to 11 am")
}
else if (time === 12){
    alert ("this time is equal to 12 am")
}
else if (time === 13){
    alert ("this time is equal to 1 pm")
}
else if (time === 14){
    alert ("this time is equal to 2 pm")
}
else if (time === 15){
    alert ("this time is equal to 3 pm")
}
else if (time === 16){
    alert ("this time is equal to 4 pm")
}
else if (time === 17){
    alert ("this time is equal to 5 pm")
}
else if (time === 18){
    alert ("this time is equal to 6 pm")
}
else if (time === 19){
    alert ("this time is equal to 7 pm")
}
else if (time === 20){
    alert ("this time is equal to 8 pm")
}
else if (time === 21){
    alert ("this time is equal to 9 pm")
}
else if (time === 22){
    alert ("this time is equal to 10 pm")
}
else if (time === 23){
    alert ("this time is equal to 11 pm")
}
else if (time === 24){
    alert ("this time is equal to 12 pm")
}
else {
alert ("Invalid value")
}
