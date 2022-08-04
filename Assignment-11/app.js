
// CHAPTER 38-42

// Question 1 

var a = 10;
var b = 20;
function rais(x) {
    return (a + b) - x
}
console.log(rais(a));

// Question 2 

var date = new Date();
var currYr = date.getFullYear();
if (currYr % 4 === 0) {
    alert("Its a Leap Year")
} else {
    alert("Its not  a Leap Year")
}
console.log(currYr)

// Question 4

var x = +prompt("Enter the obtained marks in first subject")
var y = +prompt("Enter the obtained marks in second subject")
var z = +prompt("Enter the obtained marks in third subject")

function main() {
    var j = avg(x, y, z);
    var h = perc(x, y, z);
    document.write(j + " is the average" + "</br>")
    document.write(h + " is the percentage" + "</br>")
}
function avg(a, b, c) {
    var f = (a + b + c) / 3;
    return f;
}
function perc(a, b, c) {
    var g = (a + b + c) / 300 * 100;
    return g;
}
main()


// Question 5

flag = false
function indexof(user, find) {
    for (var i = 0; i < user.length; i++) {
        if (user[i] === find) {
            alert([i])
            flag = true
        }
    }
    if (flag === false) {
        alert("-1")
    }
}

indexof("owais", "s")

//Question 6

function Vowels() {
    var sentence = "pakistan cricket team".split("");
    var empty = [];
    var flag = true;
    var vowel = "aeiou".split("");
    for (i = 0; i < sentence.length; i++) {
        flag = true;
        for (j = 0; j < vowel.length; j++) {
            if (sentence[i] === vowel[j]) {
                flag = false;
            }
        }
        if (flag === false) {
            empty.push(sentence[i]);
        }
    }
    return empty.join("");
}
var result = Vowels();
alert(result);

// Question 7

function doublevowel() {

    var sentence = "babar azam imam ul haq shaheen shah afridi"
    var vowelmix = ["aa", "ae", "ai", "ao", "au", "ee", "ea", "ei", "eo", "eu", "ii", "ia", "ie", "io", "iu", "oo", "oa", "oe", "oi", "ou", "uu", "ua", "ue", "ui", "uo"];
    var arr = [];
    for (i = 0; i < sentence.length; i++) {
        for (j = 0; j < vowelmix.length; j++) {
            if (sentence.slice(i, i + 2) === vowelmix[j]) {
                arr.push(sentence.slice(i, i + 2))
            }
        }
    }
    return arr;
}

var result = doublevowel();

alert(result)

// Question 10

var user = +prompt("Enter Amount");
var result = 0;
var hun = 0;
var fiv = 0;
var ten = 0;
var one = 0;

for (i = 0; i < 5; i++) {

    if (user >= 100) {
        hun = Math.floor(user / 100);
        user -= hun * 100;
    }
    else if (user >= 50) {
        fiv = Math.floor(user / 50);
        user -= fiv * 50;
    }
    else if (user >= 10) {
        ten = Math.floor(user / 10);
        user -= ten * 10 ;
    }
    else if (user >= 1) {
        one = Math.floor(user / 1);
        user -= one * 1 ;
    }
}
alert(hun + " hundred rupee", fiv + " fivety rupee", ten + " ten rupee", one + " one rupee",);
