<?php
    function checkEmail($email){
        require('conn.php');
        if(!empty($email)){
            $email = mysqli_real_escape_string($conn, $email);
            $sql = "SELECT * FROM user WHERE email = '" . $email . "'";
            $result = mysqli_query($conn, $sql);
            if(mysqli_num_rows($result)){
                return "fail";
            }else{
                return "pass";
            }
        }
    }
?>