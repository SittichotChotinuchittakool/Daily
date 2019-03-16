<?php
    session_start();
    function addStory($subjectID, $dateID, $storyID){
        require('conn.php');
        require('GetRunningNumber.php');
        $return = new Class{};
        if(!empty($subjectID) && !empty($dateID) && !empty($storyID)){
            $subject_story = mysqli_real_escape_string($conn, $subjectID);
            $date_story = mysqli_real_escape_string($conn, $dateID);
            $text_story = mysqli_real_escape_string($conn, $storyID);
            $id_story = getNumber('story');
            $user = json_decode($_SESSION['user']);
            $sql = "INSERT INTO story ";
            $sql .= "(story_subject, ";
            $sql .= "story_date_create, ";
            $sql .= "story_date_story, ";
            $sql .= "story_story, ";
            $sql .= "story_id, ";
            $sql .= "story_create_by ";
            $sql .= ") VALUES (";
            $sql .= "'" . $subject_story . "'";
            $sql .= ", CURDATE()";
            $sql .= ", '" . $date_story . "'";
            $sql .= ", '" . $text_story . "'";
            $sql .= ", " . ++$id_story . "";
            $sql .= ", '" . $user->user . "'";
            $sql .= ")";
            if(mysqli_query($conn, $sql)){
                updateNumber('story');
                return "pass";
            }else{
                return "fail : " . mysqli_error($conn);
            }
        }else{
            return "fail";
        }
    }
?>