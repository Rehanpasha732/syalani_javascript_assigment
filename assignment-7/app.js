// CHAPTER # 21 - 25

// Question 1

var first_name = prompt("Enter Your First Name")
var last_name = prompt("Enter Your Last Name")

var full_name = (first_name + " " +last_name)
alert ("hello" + full_name)

// Question 2

var mob = prompt("Enter Your Favrt Mobile")
document.write ("Your input " + "( " + mob + ")" + " length  is " + mob.length + "<br>")

// Question 3

var country = "pakistani"

document.write ("String : pakistani" + "<br>")
document.write ("Index of 'n' : " + country.indexOf("n") + "<br>")

// Question 4

var greet = "Hello World"

document.write ("String : Hello World" + "<br>")
document.write ("Index of 'l' : " + greet.lastIndexOf("l") + "<br>")

// Question 5

var country = "pakistani"

document.write ("String : pakistani" + "<br>")
document.write ("Index of 'i' : " + country.indexOf("i") + "<br>")

// Question 6

var first_name = prompt("Enter Your First Name")
var last_name = prompt("Enter Your Last Name")

var full_name = (first_name + " " +last_name)
alert ("hello" + full_name)

// Question 7

var city = "Hyderabad"
var city =city.replace(city, "Islamabad")


document.write("City : Hyderabad" + "<br>")
document.write ("After replacement : " + city + "<br>")

// Question 8

var message = "Ali and Sami are best friends. They play cricket and football together.";
message = message.replace(/ and /g," & ")

document.write (message + "<br>")

// Question 9

var stringNumber = "472";
var numberToString = +stringNumber;

document.write("Value : " + stringNumber + "<br>" + "Type :  " + typeof (stringNumber) + "<br>");
document.write("Value : " + numberToString + "<br>" + "Type :  " + typeof (numberToString));

// Question 10

var input1 = prompt("Enter Your Word")
input1 = input1.toUpperCase()
document.write (input1 + "<br>")

// Question 11

var input2 = prompt("Enter Your Word")
input2 = input2.toLowerCase()
document.write (input2 + "<br>")

// Question 12

var dec = ("35.36")
var decs = dec.replace(dec , 3536)

document.write ("Number : " + dec + "<br>")
document.write ("Result : " + decs + "<br>")

// Question 13

var user = prompt("Enter your username")
var symbols = ["@" , "." , "," , "!"]
for (i = 0 ; i < user.length ; i++){
   if (user[i] === "@" || user[i] === "." || user === "!" || user[i] === ","){ 
       alert ("Your User Name Is Not Valid")
}
}

// Question 14

var input = prompt("What do you want to eat..?")
var desi = ["-","biryani", "pulao", "nihari", "qorma", "karahi", "burger", "pizza", "daal", "shawarma", "fish","won-ton" ,"pasta", "chaat","falooda" ,"gol gappe", "shami kabab", "chapli kabab", "tikka", "broast", "roll", "nuggets", "fries", "soup", "cold drink ", "salad ", "raita", "tea", "coffee","ice-cream","shakes"]
input = input.toLowerCase();
var flag = false
for (i = 0 ; i < desi.length ; i++){
    if (input === desi[i]){
        alert (input + " is availible at index " + i)
        flag = true
    }
}  
if (flag === false){
    alert (input + " is not availible")
}

// Question 16

var university = ("University of Karachi");

var new_uni = university.split('')

for (i = 0 ; i < new_uni.length ; i++)
document.write (new_uni[i] + "<br>")

// Question 17

var word = prompt("Enter your word") 
var last_word = (word.length)-1 

document.write (word[last_word])

// Question 18

var the = ("The quick brown fox jumps over the lazy dog")
the = the.toLowerCase()
var find = "the"
var splited = the.split(" ")
var count = 0

for (i = 0 ; i < splited.length ; i++){
if ( find === splited[i])    
count++
}
console.log (count)

document.write ("Text : " + the + "</br>")
document.write ("There are " + count + " occuances of 'the'")
s