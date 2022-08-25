var server = "http://127.0.0.1:5000/";
$(document).ready(function () {
    //Create API Call
    $('#signup').on('click', function (e) {
        e.preventDefault();
        console.log('worked')
        var mail = document.getElementById("mail").value;
        var password = document.getElementById("password").value;
        if (mail == "" || password == "") {
            alert("Please fill all details.")
        } else {
            $.ajax({
                method: "POST",
                url: server + 'login',
                contentType: 'application/json;charset=UTF-8',
                data: JSON.stringify({
                    mail: mail,
                    password: password,
                }),

                success: function (response) {
                    if (response.response == "exists") {
                        alert("Yet to create an account")
                    } else {
                        location.replace("status-check.php")
                        localStorage.mail = mail
                        localStorage.isAdmin = 0
                    }
                },
                error: function (err) {
                    alert("Something went wrong")
                }
            });
        }
    });


})