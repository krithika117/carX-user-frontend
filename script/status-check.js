var server = "http://127.0.0.1:5000/";
$(document).ready(function () {
    load_select3()

    function load_select3() {
        $.ajax({
            method: "POST",
            url: server + 'customer/filter',
            contentType: 'application/json;charset=UTF-8',
            data: JSON.stringify({
                mail: localStorage.mail
            }),
            success: function (data) {

                $('tbody').empty();
                if (data.response.length < 1) {
                    $('tbody').append("No bookings yet.");
                } else {
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
                            '</td><td>' +
                            data.response[i].status +
                            '</td></tr>');
                        $('tbody').append(row);
                    }
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log('Error: ' + textStatus + ' - ' + errorThrown);
            }

        });
    }

})