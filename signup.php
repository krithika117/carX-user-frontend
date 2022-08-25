<!DOCTYPE html>
<html lang="en">

<head>
    <?php include "navbar.php" ?>
</head>

<body>
    <div id="form">
        <h1 class="display-5  mb-4">Sign up</h1>

        <div class="input-group mb-3">
            <input type="text" id="name" class="form-control filter" placeholder="Name"></input>
        </div>
        <div class="input-group mb-3">
            <input type="text" id="mail" class="form-control filter" placeholder="Mail"></input>
        </div>
        <div class="input-group mb-3">
            <input type="password" id="password" class="form-control filter" placeholder="Password"></input>
        </div>
        <div class="input-group mb-3">
            <input type="text" id="contact" class="form-control filter" placeholder="Contact"></input>
        </div>
        <div class="input-group mb-3">
            <input type="button" id="signup" value="Submit">
        </div>

        If you already have an account, <a href="login.php">Click here</a>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous">
    </script>
    <script src="script/signup.js"></script>
</body>

</html>