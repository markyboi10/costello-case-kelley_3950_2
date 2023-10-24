// Regex for email
function validateEmail(email) {
    var regex = /^\S+@\S+\.\S+$/;
    return regex.test(email);
}

function checkEmail() {
    document.getElementById("emailError").innerHTML = "";
    document.getElementById("successMessage").innerHTML = "";

    var emailInput = document.getElementById("email");
    var email = emailInput.value;
    document.getElementById("email").style.border = "";

    // Check email validity
    if (!validateEmail(email)) { // not valid
        document.getElementById("emailError").innerHTML = "Invalid email address";
        document.getElementById("email").style.border = "2px solid red";
        return false;
    } else { // valid
        document.getElementById("successMessage").innerHTML = "Valid email address";
        return true;
    }
}

//mailto call
function sendEmail() {
    var isValid = checkEmail();
    if (!isValid) {
        return;
    }
    // Reset fields empty
    document.getElementById("emailError").innerHTML = "";
    document.getElementById("successMessage").innerHTML = "";


    // Get values
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var content = document.getElementById("content").value;

    // var with mailto objects
    var mailtoLink = 'mailto:mark.case102@gmail.com?subject=' + encodeURIComponent(subject) +
        '&body=' + encodeURIComponent(content + '\n\nreply-to: ' + email);

    window.open(mailtoLink);

    // Reset input fields empty
    document.getElementById("email").value = "";
    document.getElementById("subject").value = "";
    document.getElementById("content").value = "";
}

function clearFields() {
    // Reset input fields empty
    document.getElementById("email").value = "";
    document.getElementById("subject").value = "";
    document.getElementById("content").value = "";
    document.getElementById("emailError").innerHTML = "";
    document.getElementById("successMessage").innerHTML = "";
    document.getElementById("email").style.border = "";
}