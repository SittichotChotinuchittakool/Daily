<?php
    function getData($idStory){
        require('conn.php');
        $sql = "SELECT ";
        $sql .= "story_subject";
        $sql .= ", story_date_story";
        $sql .= ", story_story";
        $sql .= " FROM story";
        $sql .= " WHERE story_id = '" . $idStory . "'";
        $result = mysqli_query($conn, $sql);
        $row = mysqli_fetch_assoc($result);
        return $row;
    }
?>