// chaarcter 1
// var chaarcter = document.getElementById("characterOne,secondCharacter")
// window.onkeydown = function () {
//     console.log(event.keyCode);
//     if (event.keyCode === 39) {
//         characterOne.src = "orochi-entry";
//         counting = counting - 50
//         characterOne.style.left = counting + "px";
//         setTimeout(function () {
//             characterOne.src = "Orochi97.gif";
//         }, 200)
//     }
// }

// var chaarcter = document.getElementById("secondCharacter")
// window.onkeydown = function () {
//     console.log(event.keyCode);
//     if (event.keyCode === 39) {
//         secondCharacter.src = "finger.gif";
// counting = counting - 50

// secondCharacter.style.left = counting + "px";
// setTimeout(function () {
//     secondCharacter.src = "finger.gif";
// }, 1000)
//     }
// }
var secondCharacter = document.getElementById("secondCharacter","characterOne");
var counting = 50
var count = 50
window.onkeydown = function () {
        console.log(event.keyCode);
        if (event.keyCode === 85) {
                secondCharacter .src = "./images/iori-12.gif"
            counting = counting - 50
            secondCharacter.style.left = counting + "px";
            
        }

        if (event.keyCode === 89) {
                secondCharacter .src = "./images/iori-power.gif"
            counting = counting - 50
            secondCharacter.style.left = counting + "px";
            
        }
      
}
