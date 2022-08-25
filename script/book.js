var server = "http://127.0.0.1:5000/";

$(document).ready(function () {
    load_select1()

    function load_select1() {
        $.ajax({
            method: "POST",
            url: server + "get/branch",
            dataType: 'json',
            success: function (data) {
                $('tbody').empty();
                var select = document.getElementById("places");
                $('#places').empty();
                $('#places').append('<option value="" selected hidden disabled>Select Branch</option>');
                $('#services').append('<option value="" selected hidden disabled>Select Branch</option>');
                for (var i = 0; i < data.response.length; i++) {
                    console.log(data.response[i].location)
                    var opt = $('<option value="' + data.response[i].location + '">' + data.response[i].location + '</option>');
                    $('#places').append(opt);

                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log('Error: ' + textStatus + ' - ' + errorThrown);
            }

        });
    }

    $('#places').on('change', function () {
        load_select2(this.value)
    });

    function load_select2(placename) {
        $.ajax({
            method: "POST",
            url: server + 'get/services',
            contentType: 'application/json;charset=UTF-8',
            data: JSON.stringify({
                placename: placename,
            }),
            success: function (data) {
                var select = document.getElementById("services");
                $('#services').empty();
                for (var i = 0; i < data.response.length; i++) {
                    var opt = $('<option value="' + data.response[i].serviceName + '">' + data.response[i].serviceName + '</option>');
                    $('#services').append(opt);
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log('Error: ' + textStatus + ' - ' + errorThrown);
            }
        });
    }

    $('#avail').on('click', function (e) {
        var date = document.getElementById("date").value
        var places = document.getElementById("places").value
        date = date.split("-").reverse().join("/");
        if (date == "" || places == "")
            alert("Please enter all fields")
        else {
            $.ajax({
                method: "POST",
                url: server + 'availslots',
                contentType: 'application/json;charset=UTF-8',
                data: JSON.stringify({
                    date: date,
                    places: places
                }),
                success: function (data) {
                    console.log(data)
                    var select = document.getElementById("slot");
                    $('#slot').empty();
                    if (data.response.length < 1) {
                        alert("Bookings unavailable. Please try another date.")
                    } else {
                        for (var i = 0; i < data.response.length; i++) {
                            var opt = $('<option value="' + data.response[i].number + '">' + data.response[i].time + '</option>');
                            $('#slot').append(opt);
                        }
                    }
                    console.log(data)
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    console.log('Error: ' + textStatus + ' - ' + errorThrown);
                }
            });
        }
    });

    function format(d) {
        return d.split("-").reverse().join("/");
    }

    $('#addrequest').on('click', function (e) {
        var date = format(document.getElementById("date").value)
        var placename = document.getElementById("places").value
        var slot = document.getElementById("slot").value
        var service = document.getElementById("services").value
        var customername = document.getElementById("customername").value
        var mail = localStorage.mail
        if (date == "" || placename == "" || slot == "" || service == "" || customername == "")
            alert("Please enter all fields")
        else {
            $.ajax({
                method: "POST",
                url: server + 'requests',
                contentType: 'application/json;charset=UTF-8',
                data: JSON.stringify({
                    date: date,
                    placename: placename,
                    mail: mail,
                    slot: slot,
                    service: service,
                    customername: customername
                }),
                success: function (data) {
                    console.log("success")
                    location.replace("index.php")

                },
                error: function (jqXHR, textStatus, errorThrown) {
                    console.log('Error: ' + textStatus + ' - ' + errorThrown);
                }
            });
        }
        console.log(date, slot, customername, placename, service)
    });


})