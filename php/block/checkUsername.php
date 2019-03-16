<?php
    function checkUsername($user){
        require('conn.php');
        $user = mysqli_real_escape_string($conn, $user);
        $sql = "SELECT * FROM user WHERE userID = '" . $user . "'";
        $result = mysqli_query($conn, $sql) or die(mysqli_connect_error($conn));
        if(mysqli_num_rows($result)){
            return "fail";
        }else{
            return "pass";
        }
    }
?>