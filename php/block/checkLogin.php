<?php
    function checkLogin(){
        session_start();
        if(isset($_SESSION['user'])){
            return "pass";
        }else{
            return "fail";
        }
    }
?>