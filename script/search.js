var server = "http://127.0.0.1:5000/";

$(document).ready(function () {
    //Create API Call
    $.ajax({
        method: "POST",
        url: server + 'show/places',
        contentType: 'application/json;charset=UTF-8',
        dataType: 'json',
        success: function (data) {
            $('tbody').empty();
            console.log(data.response.placeId)
            for (var i = 0; i < data.response.length; i++) {
                var row = ''
                row = $('<tr><td>' +
                    data.response[i].placeId +
                    '</td><td>' +
                    data.response[i].location +
                    '</td><td>' +
                    data.response[i].address +
                    '</td> ' +
                    // '<a class="btn btn-primary" id="' + data.response[i].placeId + '" href="book.php" role="button">Login</a>'
                    '</tr>'
                );
                $('tbody').append(row);
            }

        },
        error: function (err) {
            alert("Something went wrong")
        }
    });

    $('#search').on('click', function (e) {
        e.preventDefault();
        var placename = document.getElementById("placename").value;

        if (placename == "") {
            alert("Please fill Service Name.");

        } else {

            $.ajax({
                method: "POST",
                url: server + 'search',
                contentType: 'application/json;charset=UTF-8',
                data: JSON.stringify({
                    placename: placename,
                }),
                success: function (data) {
                    $('tbody').empty();
                    console.log(data.response.placeId)
                    for (var i = 0; i < data.response.length; i++) {
                        var row = ''
                        row = $('<tr><td>' +
                            data.response[i].placeId +
                            '</td><td>' +
                            data.response[i].location +
                            '</td><td>' +
                            data.response[i].address +
                            '</td> ' +
                            // '<a class="btn btn-primary" id="' + data.response[i].placeId + '" href="book.php" role="button">Login</a>'
                            '</tr>'
                        );
                        $('tbody').append(row);
                    }

                },
                error: function (err) {
                    alert("Something went wrong")
                }
            });
        }

    });

  

})