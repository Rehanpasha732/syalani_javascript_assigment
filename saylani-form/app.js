function validation() {
    var email = document.getElementById("email").value
    var name = document.getElementById("name").value
    var fatherName = document.getElementById("father").value
    var phoneNumber = document.getElementById("phone").value
    var fCnic = document.getElementById("father_cnic").value
    var dob = document.getElementById("dob").value
    if (name === "" || email === "" || fatherName === "" || phoneNumber === "" || fCnic === "" || dob === "") {
        swal("Please Fill All Required Field");
        return ok;
    }
    else {
        localStorage.setItem("date of birth", dob)

    }
    var firstNameregex = /^.{3,}$/.test(name);
    var emailRegex = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/.test(email);
    var phoneRegex = /^[0-9]{11}$/.test(phoneNumber);
    var fatherCnic = /\d{5}-\d{7}-\d/.test(fCnic);

    if (firstNameregex === false) {
        swal("name is invalid")

    }
    else {

        localStorage.setItem("name", name)
    }

    if (father === false) {
        swal("Father Name is invalid")
    }

    else {
        localStorage.setItem("father-name", fatherName)
    }
    if (phoneRegex === false) {
        swal("Phone Number must be 11 digit")
    }

    else {
        localStorage.setItem("phone Number", phoneNumber)
    }
    if (emailRegex === false) {
        swal("email is invalid")
    }
    else {
        localStorage.setItem("email", email)
    }

    if (fatherCnic === false) {
        swal("Father-CNIC is invalid")
    }
    else {
        localStorage.setItem(" Father-CNIC", fCnic)
    }
}

function clickMe() {
    var tdname = document.getElementById("name")
    var tdemail = document.getElementById("email")
    var td = document.getElementById("email")

    var name = localStorage.getItem("name")
    var email = localStorage.getItem("email")
    var father = localStorage.getItem("father")
    var phoneNumber = localStorage.getItem("phoneNumber")


    tdname.innerHTML = name
    tdemail.innerHTML = email


   


}


function admin() {
    window.open("admin.html")

}

