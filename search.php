<!DOCTYPE html>
<html lang="en">

<head>

    <head>
        <?php include "navbar.php" ?>
    </head>

<body>
    <a type="button" href="book.php" role="button" style="float:right;">Book your wash now!</a>
    <h1 class="display-5">Branches around</h1>

    <input class="form-control" id="placename" placeholder="Type to search...">
    <input type="button" id="search" value="Search">
    <table class="table ">
        <thead>
            <tr>
                <th>Place ID</th>
                <th>Place Name</th>
                <th>Address</th>
            </tr>
        </thead>
        <tbody>
        </tbody>
    </table>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous">
    </script>
    <script src="script/validator.js"></script>
    <script src="script/search.js"></script>
</body>

</html>