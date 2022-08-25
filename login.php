<!DOCTYPE html>
<html lang="en">

<head>
    <?php include "navbar.php" ?>
</head>

<body>

    <div id="form">
        <h1 class="display-5  mb-4">Login</h1>
        <div class="input-group mb-3 col-6 ">
            <input type="text" id="mail" class="form-control filter" placeholder="Mail"></input>
        </div>
        <div class="input-group mb-3 col-6">
            <input type="password" id="password" class="form-control filter" placeholder="Password"></input>
        </div>
        <div class="input-group mb-3 col-6">
            <input type="button" id="signup" value="Submit">
        </div>
        If you don't have an account, <a href="signup.php">Click here</a>
        <br>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous">
    </script>
    <script src="script/login.js"></script>
</body>

</html>