<!DOCTYPE html>
<html lang="en">

<head>

    <head>
        <?php include "navbar.php" ?>
    </head>

<body>
    <div class="mb-3 col-7  mb-3 col-7">
    <h1 class="display-5">Branches around</h1>
    <a class="btn btn-primary" href="book.php" role="button">Book your wash now!</a>
    <input class="form-control" id="placename" placeholder="Type to search...">
    <input type="button" id="search" value="Search">
    <table class="table  mb-3 col-7  mb-3 col-7">
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
    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous">
    </script>
    <script src="script/validator.js"></script>
    <script src="script/search.js"></script>
</body>

</html>