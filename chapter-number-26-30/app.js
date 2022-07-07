// question Number 1


var positive = +prompt("Enter Positive Decimal Number")
var number = (positive)
var round = Math.round(positive)
var floor = Math.floor(positive)
var ceil = Math.ceil(positive)
document.write ("<b>" + "Number" + "</b>" + " = " + number + "<br>")
document.write ("<b>" + "Round" + "</b>" + " = " + round + "<br>")
document.write ("<b>" + "Floor" + "</b>" + " = " + floor + "<br>")
document.write ("<b>" + "Ciel" + "</b>" + " = " + ceil + "<br>" + "<br>")
// // Question 2
var negative = +prompt("Enter negative Decimal Number")
var number = (negative)
var round = Math.round(negative)
var floor = Math.floor(negative)
var ceil = Math.ceil(negative)
document.write ("<b>" + "Number" + "</b>" + " = " + number + "<br>")
document.write ("<b>" + "Round" + "</b>" + " = " + round + "<br>")
document.write ("<b>" + "Floor" + "</b>" + " = " + floor + "<br>")
document.write ("<b>" + "Ciel" + "</b>" + " = " + ceil + "<br>" + "<br>")
// // Question 3
// // Question 4
var dice = Math.random()
var dic = (dice * 6) + 1
var stars = Math.floor(dic)
alert ("Guess What Is Coming From Dice")
alert (stars)
// // Question 5
var choice = prompt(name + " select heads or tails or H/T")
var choice = choice.toLowerCase()
var num = Math.random()
var num2 = Math.round(num)
if (choice === "h" || choice === "heads") {
    if (num2 === 0) {
        alert("Its heads..You Win")
    } else {
        alert("Its tails..You Lose")
    }
}
else if (choice === "t" || choice === "tails") {
    if (num2 === 1) {
        alert("Its tails..You Win")
    } else {
        alert("Its heads..You Lose")
    }
} else {
    alert("Invalid value")
}
// Question 6
var hundred = Math.random()
var whole = Math.floor(hundred * 100 ) + 1
alert ("Random Number Between 1 and 100 is " + whole)

// Question 7

var weight = prompt("Enter Your Weight in kgs i.e 35 kgs")
console.log ("Your Weight Is " + weight)
var weight = prompt("Enter Your Weight")
weight = parseFloat(weight)
alert ("Your Weight is " + weight + " Kilograms")

// Question 8

var secret = Math.random()
var sec = (secret * 10) + 1
var dots = Math.floor(sec)
alert ("Guess What Is Coming From Dice")
alert (dots) 
alert ("Guess What Is Coming From 1 - 10")
var guess_secret = +prompt ("Enter Number")
if (guess_secret === dots){
    alert ("You Win")
} else {
    alert ("You loose,Try Again")
} 