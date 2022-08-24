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
                $('#date').append('<option value="" selected hidden disabled>Select Branch</option>');
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
            url: server + 'get/date',
            contentType: 'application/json;charset=UTF-8',
            data: JSON.stringify({
                placename: placename,
            }),
            success: function (data) {
                console.log(data)
                $('#date').empty();
                $('#date').append('<option value="" selected hidden disabled>Select Date</option>');
                for (var i = 0; i < data.response.length; i++) {
                    var opt = $('<option value="' + data.response[i].date + '">' + data.response[i].date + '</option>');
                    $('#date').append(opt);
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log('Error: ' + textStatus + ' - ' + errorThrown);
            }
        });
    }    
    $('#date').on('change', function () {
        load_select3($('#places').val(), $('#date').val())
    });

    function load_select3(placename, date) {
        $.ajax({
            method: "POST",
            url: server + 'filter',
            contentType: 'application/json;charset=UTF-8',
            data: JSON.stringify({
                placename: placename,
                date, date
            }),
            success: function (data) {
                console.log(data)
                $('tbody').empty();
                for (var i = 0; i < data.response.length; i++) {
                    var row = ''

                    row = $('<tr><td>' +
                        data.response[i].reqId +
                        '</td><td>' +
                        data.response[i].name +
                        '</td><td>' +
                        data.response[i].mail +
                        '</td><td>' +
                        data.response[i].time +
                        '</td></tr>');
                    $('tbody').append(row);
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log('Error: ' + textStatus + ' - ' + errorThrown);
            }

        });
    }    

})