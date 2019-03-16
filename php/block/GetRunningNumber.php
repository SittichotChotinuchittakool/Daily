<?php
    function getNumber($type){
        require('conn.php');
        $sql = "SELECT run_id ";
        $sql .= "FROM running_id ";
        $sql .= "WHERE type_id = '" . $type . "'";
        $result = mysqli_query($conn, $sql);
        mysqli_close($conn);
        return mysqli_fetch_assoc($result)['run_id'];
    }
    function updateNumber($type){
        require('conn.php');
        $sql = "UPDATE running_id ";
        $sql .= "SET run_id = run_id + 1 ";
        $sql .= "WHERE type_id = '" . $type . "'";
        $result = mysqli_query($conn, $sql);
        mysqli_close($conn);
    }
?>