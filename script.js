function validateRegistration() {
    var firstName = document.getElementById("first-name").value;
    var secondName = document.getElementById("second-name").value;
    var phoneNumber = document.getElementById("phone-number").value;
    var email = document.getElementById("email").value;
    var retypeEmail = document.getElementById("retype-email").value;
    var dateOfBirth = document.getElementById("date-of-birth").value;
    var password = document.getElementById("password").value;

    if (firstName && secondName && phoneNumber && email && retypeEmail && dateOfBirth && password) {
        // All details are filled in, so redirect to the success page
        window.location.href = "success.html";
    } else {
        // Display an error message or alert if any fields are missing
        alert("Please fill in all details.");
    }
}
