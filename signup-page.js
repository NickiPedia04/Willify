function redirectToSignUp() {
    window.location.href = "signup-page.html";
}

let form = document.forms[0]

form.addEventListener("submit", function(e) {
    e.preventDefault()
        // name
    let name = form.elements["name"].value
        // email
    let email = form.elements["email"].value
        // password
    let password = form.elements["password"].value
        // age
    let age = form.elements["age"].value
        // gender
    let gender = form.elements["gender"].value
        // error text
    let errorlbl = document.getElementById("error")
    let errorMsg = ""


    // name
    if (!name) {
        errorMsg += "- Fill out the name \n"
    } else if (name.length < 8) {
        (errorMsg += "- Name must be at least 8 characters \n")
    }

    // email
    if (!email) {
        errorMsg += "- Fill out the email \n"
    } else if (!email.endsWith("@gmail.com")) {
        errorMsg += "- Email must end with @gmail.com\n"
    }

    // password
    if (!password) {
        errorMsg += "- Fill out the password \n"
    } else if (password.length < 8) {
        (errorMsg += "- Password must be at least 8 characters \n")
    }

    // age
    if (!age) {
        errorMsg += "- Please enter your age \n"
    } else if (age < 18) {
        errorMsg += "- You must be atleast 18 years old to continue \n"
    }

    // gender   
    if (gender == "") {
        errorMsg += "- Gender must not be empty \n"
    }

    errorlbl.innerText = errorMsg

})