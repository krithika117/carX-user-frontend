var server = "http://127.0.0.1:5000/";

$(document).ready(function () {
    //Create API Call
    $('#addservice').on('click', function (e) {
        e.preventDefault();
        var servicename = document.getElementById("servicename").value;
        if (servicename == "" ){
            alert("Please fill Service Name.");
        } else {
            $.ajax({
                method: "POST",
                url: server + 'add/services',
                contentType: 'application/json;charset=UTF-8',
                data: JSON.stringify({
                    servicename: servicename,
                }),

                success: function (response) {
                    //console.log(response)
                    location.replace('add-service.html')
                },

                error: function (err) {
                    alert("Something went wrong")
                }
            });
        }

    });

        //Retrieve API Call
        $.ajax({
            method: "POST",
            url: server + "/show/service",
            dataType: 'json',
            success: function (data) {
                //console.log(data);
                $('tbody').empty();
                for (var i = 0; i < data.response.length; i++) {
                    var row = ''
                    row = $('<tr><td>' +
                        data.response[i].serviceId +
                        '</td><td>' +
                        data.response[i].serviceName +
                        '</td></tr>');
    
                    $('tbody').append(row);
                    //console.log('done')
                }
    
            },
            error: function (jqXHR, textStatus, errorThrown) {
                alert('Error: ' + textStatus + ' - ' + errorThrown);
            }
        });
    
    
})