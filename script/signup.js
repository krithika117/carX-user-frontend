var server = "http://127.0.0.1:5000/";

$(document).ready(function () {
    //Create API Call
    $('#signup').on('click', function (e) {
        
        e.preventDefault();
        console.log('worked')
        var name = document.getElementById("name").value;
        var mail = document.getElementById("mail").value;
        var password = document.getElementById("password").value;
        var contact = document.getElementById("contact").value;
       
            $.ajax({
                method: "POST",
                url: server + 'signup',
                contentType: 'application/json;charset=UTF-8',
                data: JSON.stringify({
                    name: name,
                    mail: mail, 
                    password: password,
                    contact: contact
                }),

                success: function (response) {
                    if (response.response=="failure"){
                        alert("Mail already exists")
                    }
                    else{
                        location.replace("index.html")
                        sessionStorage.email = mail
                    }

                    
                },
                
                error: function (err) {
                    alert("Something went wrong")
                }
            });
        

    });

       
})