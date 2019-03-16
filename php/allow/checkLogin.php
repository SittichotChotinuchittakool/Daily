<?php
    session_start();
    if(isset($_SESSION['login'])){
        echo "isset";
    }else{
        echo "unset";
    }
?>