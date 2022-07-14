// chapter number 31 to 34

// question 1

var date = new Date()
// var time = 
document.write("current date and time" + " " + date)

// question 2

var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "Octuber", "November", "December"];
var date = new Date();
var month = date.getMonth();
console.log(month)
var monthWord = monthNames[month]
document.write("<br>" + "current month is " + monthWord + "<br>")

// question 3
var days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"]
var date = new Date().getDay();
var nowDays = days[date]
document.write("Today is" + " " + nowDays + "<br>")

// question 4
var days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"]
var date = new Date().getDay();
var nowDays = days[date]
document.write("Today is" + " " + nowDays + "<br>")

if (nowDays === days[onabort, 6]) {
    alert("its fun day")

}
else {
    alert("its not funday")
}

//  question 5
var date = new Date()
var days = date.getDate()

if (days < 16) {

    alert("First fifteen days of the month")
} else {
    alert("Last days of the month")
}
//  question 6

var date = new Date();
document.write("current Date: " + date + "<br>")
var millisecond = date.getTime()
document.write("Elapsed miliseconds since 1st January 1970 = " + millisecond + "</br>")
var minutes = millisecond / 1000 / 60
var minutes = Math.floor(minutes)
document.write("Elapsed miliseconds since 1st January 1970 = " + minutes + "</br>")

//  question 7
var hr = new Date().getUTCHours
if (hr <= 12) {
    document.write("<h1>Its AM</h1>")
}
else {
    document.write("<h1>Its PM</h1>")
}

//  question 8

var date = new Date();
date.setFullYear(2020)
document.write("Later Date = " + date + "<br>")

//  question 10

var currentDate = new Date()
var currentNow = currentDate.getTime()
var oldDate = new Date("5 jan 2015")
var jan = oldDate.getTime()
var diff = (currentDate - oldDate)
var sec = diff / (1000)
document.write("On reference date " + currentDate + "<br>")
document.write(sec + " have passed since the beginnig of 2015" + "<br>" + "<br>")


// Question 11

var date = new Date("jan 7, 2020 12:12:12")
document.write("current date = " + date + "<br>")

var oneHourago = new Date("jan 7, 2020 11:12:12")
document.write("one hour ago time was = " + oneHourago + "<br>")

