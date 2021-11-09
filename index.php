
<?php include('data_val.php') ?>  
<!DOCTYPE html>
<html>

<head>
    <title>LOGIN PAGE</title>
</head>
<link rel="stylesheet" href="style.css">
<script src="validation.js"></script>

<body>
    <div class="container"id="console">
        <form id="form" action="data_val.php" method="POST" >
           
            <h2>LOGIN PAGE</h2>

            <label>User Name</label>
            <input type="text" name="username" id="username" placeholder="User Name" class="login"><br>

            <label>Password</label>
            <input type="password" name="password" id="password" placeholder="Password" class="login"><br>

            <button id="btn" name="register" onclick="valid()"value="Submit">Login</button>
            
        </form>
        <!-- <div id="console"></div> -->
    </div>
   

</body>

</html>