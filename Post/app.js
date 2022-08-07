// Animation
const text1 = document.getElementById("tbuser")
const btn1 = document.getElementById("btn1")
const out1 = document.getElementById("output1")
const btn2 = document.getElementById("btn2")
function fun1() {
    out1.innerHTML = text1.value;
}
btn1.addEventListener("click", fun1)



