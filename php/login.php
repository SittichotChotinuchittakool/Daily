<?php
    include('conn.php');
    if(isset($_POST['username']) && isset($_POST['password'])){
        $username = mysqli_real_escape_string($conn, $_POST['username']);
        $password = mysqli_real_escape_string($conn, $_POST['password']); 
        if(empty($username) && empty($password)){
            echo "Please, Enter your username and password.";
        }else{
            $sql = "SELECT username FROM user WHERE 1 AND username = '" . $username . "' AND password = '" . $password . "'";
            $result = mysqli_query($conn, $sql) or die(mysqli_connect_error($conn));
            if(mysqli_num_rows($result)){
                echo "1";
            }else{
                echo "0";
            }
        }
    }else{
        echo "null";
    }
?>