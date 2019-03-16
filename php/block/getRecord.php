<?php
    function getAllRecord(){
        require('conn.php');
        session_start();
        $user = json_decode($_SESSION['user']);
        $sql = "SELECT story_subject";
        $sql .= ", story_date_create";
        $sql .= ", story_date_story";
        $sql .= ", story_id";
        $sql .= " FROM story";
        $sql .= " WHERE story_create_by = '" . $user->user . "'";
        $sql .= " ORDER BY story_date_story DESC";
        $sql .= ", story_date_create DESC";
        $sql .= ", CONVERT(story_id, UNSIGNED) ASC";
        $result = mysqli_query($conn, $sql) or die(mysqli_error($conn));
        $data = array();
        while($rows = mysqli_fetch_assoc($result)){
            $data[] = $rows;
        }
        mysqli_close($conn);
        return $data;
    }
?>