<?php
    function logout(){
        session_start();
        if($_SESSION['user']){
            unset($_SESSION['user']);
            return "pass";
        }else{
            return "fail";
        }
    }
?>