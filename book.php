<!DOCTYPE html>
<html lang="en">

<head>
    <?php include "navbar.php" ?>
</head>

<body>

        <div class="container">
        <div class="input-group mb-3 col-7 "> <h1 class="display-5 mb-4">Book a wash.</h1></div>
            <div class="input-group mb-3 col-7 ">
                <input type="text" id="customername" class="form-control filter" placeholder="Name"></input>
            </div>
            <div class="input-group mb-3 col-7 ">
                <select name="places" id="places" class="form-control filter">
                    <option value="" selected hidden disabled>Select Branch</option>
                </select>
            </div>
            <div class="input-group mb-3 col-7 ">
                <select name="services" id="services" class="form-control filter">
                    <option value="" selected hidden disabled>Select Branch</option>
                </select>
            </div>
            <div class="input-group mb-3 col-7 ">
                <input type="date" id="date" name="date" placeholder="dd-mm-yyyy" value="" class="form-control filter">
            </div>
            <div class="input-group mb-3 col-7 ">
                <input type="button" id="avail" value="Avail Slots">
            </div>
            <select name="slot" id="slot" class="form-control filter">
                <option value="" selected hidden disabled>Select Slot</option>
            </select>
            <br>
            <input type="button" id="addrequest" value="Book Slot">
        </div>

        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous">
        </script>
        <script src="script/validator.js"></script>
        <script src="script/book.js"></script>
    </body>

</html>