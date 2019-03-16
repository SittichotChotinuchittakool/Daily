<?php
  function register($user, $pass, $email, $fname, $lname){
    require('conn.php');
    if(!empty($user) && !empty($pass) && !empty($email) && !empty($fname) && !empty($lname)){
        $username = mysqli_real_escape_string($conn, $user);
        $password = mysqli_real_escape_string($conn, $pass);
        $email = mysqli_real_escape_string($conn, $email);
        $fname = mysqli_real_escape_string($conn, $fname);
        $lname= mysqli_real_escape_string($conn, $lname);
        $sql = "INSERT INTO user (userid, pwd, email, fname, lname, date_create, priority, status_login) ";
        $sql .= "VALUES ('" . $username . "','" . $password . "','" . $email . "','" . $fname . "','" . $lname . "', CURDATE(), 1, 0)";
        $result = mysqli_query($conn, $sql) or die("fail");
        return "pass";
    }
  }
?>