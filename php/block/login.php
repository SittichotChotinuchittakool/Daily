<?php
    function login($user, $pass){
        require("conn.php");
        session_start();
        if(true){
            $username = mysqli_real_escape_string($conn, $user);
            $password = mysqli_real_escape_string($conn, $pass); 
            if(empty($username) && empty($password)){
                return "Please, Enter your username and password.";
            }else{
                $sql = "SELECT userid FROM user WHERE 1 AND userid = '" . $username . "' AND pwd = '" . $password . "'";
                $result = mysqli_query($conn, $sql) or die("fail" . mysqli_error($conn));
                if(mysqli_num_rows($result)){

                    $data = new class{};
                    $data->user = mysqli_fetch_assoc($result)['userid'];
                    $_SESSION['user'] = json_encode($data);
                    return "pass";
                }else{
                    return "fail";
                }
            }
        }else{
            return null;
        }
    }
?>