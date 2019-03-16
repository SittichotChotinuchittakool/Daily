<?php
    if(isset($_GET['req'])){
        switch($_GET['req']){
            case "login":
                require('php/block/login.php');
                if(isset($_POST['username']) && isset($_POST['password'])){
                    $user = $_POST['username'];
                    $pass = $_POST['password'];
                    echo login($user, $pass);
                }else{
                }
            break;
            case "register":
                require('php/block/register.php');
                if(isset($_POST['username']) && isset($_POST['password']) && isset($_POST['fname'])
                && isset($_POST['lname']) && isset($_POST['email'])){
                    $user = $_POST['username'];
                    $pass = $_POST['password'];
                    $email = $_POST['email'];
                    $fname = $_POST['fname'];
                    $lname = $_POST['lname'];
                    $status = register($user, $pass, $email, $fname, $lname);
                    $return = new Class{};
                    $return->status = $status;
                    $json = json_encode($return);
                    header('Content-Type: application/json');
                    echo $json;
                }else{
                }
            break;
            case "checkUsername":
                require('php/block/checkUsername.php');
                if(isset($_POST['username'])){
                    $user = $_POST['username'];
                    $return = new class{};
                    $return->status = checkUsername($user);
                    $json = json_encode($return);
                    header('Content-Type: application/json');
                    echo $json;
                    // echo "pass";
                }
            break;
            case "checkEmail":
                require('php/block/checkEmail.php');
                if(isset($_POST['email'])){
                    $email = $_POST['email'];
                    echo checkEmail($email);
                }
            break;
            case "checkLogin":
                require('php/block/checkLogin.php');
                $return = new Class{};
                $check = checkLogin();
                if($check === "pass"){
                    $return->status = "pass";
                    $user = json_decode($_SESSION['user']);
                    $return->user = $user->user;
                    $json = json_encode($return);
                    header('Content-Type: application/json');
                    echo $json;
                }else{
                    $return->status = "fail";
                    $json = json_encode($return);
                    header('Content-Type: application/json');
                    echo $json;
                }
            break;
            case "logout":
                require('php/block/logout.php');
                $return = new Class{};
                $check = logout();
                if($check === "pass"){
                    $return->status = "pass";
                    $json = json_encode($return);
                    header('Content-Type: application/json');
                    echo $json;
                }else{
                    $return->status = "fail";
                    $json = json_encode($return);
                    header('Content-Type: application/json');
                    echo $json;
                }
            break;
            case "addStory":
                require('php/block/AddStory.php');
                $return = new class{};
                if(isset($_POST['subject']) && isset($_POST['date_story']) && isset($_POST['story_id'])){
                    $return->status = "pass";
                    addStory($_POST['subject'], $_POST['date_story'], $_POST['story_id']);
                    // $return->data = $_POST['subject'] . $_POST['date_story'] . $_POST['story_id'];
                }else{
                    $return->status = "fail";
                }
                header('Content-Type: application/json');
                echo json_encode($return);
            break;
            case "getRecord":
                require('php/block/getRecord.php');
                // $return = new class{};
                $return = getAllRecord();
                header('Content-Type: application/json');
                echo json_encode($return);
            break;
            case "getData":
                require('php/block/getData.php');
                $return = new class{};
                $return = getData($_POST['id_Story']);
                // $return->a = $_POST['id_Story'];
                header('Content-Type: application/json');
                echo json_encode($return);
            break;
            default:
                $return = new class{};
                $return->link = "index.html";
                $return->message = "Not Found Request?";
                $json = json_encode($return);
                header('Content-Type: application/json');
                echo $json;
            break;
        }
    }else{
        $return = new class{};
        $return -> link = "index.html";
        $return -> message = "Not Found Link.";
        $json = json_encode($return);
        header('Content-Type: application/json');
        echo $json;
    }
?>