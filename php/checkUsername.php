<?php
    require('conn.php');
    $username = mysqli_real_escape_string($conn, $_POST['username']);
    $sql = "SELECT * FROM user WHERE username = '" . $username . "'";
    $result = mysqli_query($conn, $sql) or die(mysqli_connect_error($conn));
    if(mysqli_num_rows($result)){
        echo "fail";
    }else{
        echo "pass";
    }
?>