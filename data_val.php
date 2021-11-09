<?php 
  session_start();
  include"data_con.php";
  $username = "";
  $password = "";
  if (isset($_POST['register'])) {
  	$username = $_POST['username'];
  	$password = $_POST['password'];   

  	$sql_u = "SELECT * FROM users WHERE username='$username'";
  	
  	$res_u = mysqli_query($db, $sql_u);

  	if (mysqli_num_rows($res_u) > 0) {
  	  echo '<script>
          alert("username already exist");
          window.location="index.php";
      </script>';
      exit();	
  		
  	}else{
           $query = "INSERT INTO users (username, password) 
      	    	  VALUES ('$username','".md5($password)."')";
           $results = mysqli_query($db, $query);
           $_SESSION['username'] = $username;
		   
          echo '<script>
          
          window.location="index.html";
          </script>';
           exit();
           
  	}
  }
?>