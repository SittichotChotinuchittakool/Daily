<?php
    include('conn.php');
    if(isset($_POST['username']) && isset($_POST['password']) && 
      isset($_POST['email']) && isset($_POST['fname']) &&
      isset($_POST['lname']) ){
        $username = mysqli_real_escape_string($conn, $_POST['username']);
        $password = mysqli_real_escape_string($conn, $_POST['password']);
        $email = mysqli_real_escape_string($conn, $_POST['email']);
        $fname = mysqli_real_escape_string($conn, $_POST['fname']);
        $lname= mysqli_real_escape_string($conn, $_POST['lname']);
        $sql = "INSERT INTO user (username, password, email, fname, lname, date-create, login, priority) ";
        $sql .= "VALUES ('" . $username . "','" . $password . "','" . $email . "','" . $fname . "','" . $lname . "', CURDATE(), 0, 1)";
        $result = mysqli_query($conn, $sql) or die("fail");
        echo "pass";
//        echo $sql;
    }
?>