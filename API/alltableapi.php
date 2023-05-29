<?php
require "connection.php";

// Create an array to store the results from all tables
$data = array();

// Retrieve records from the first table
$sql1 = "SELECT * FROM `gate` where 1";
$result1 = $conn->query($sql1);
if ($result1->num_rows > 0) {
    while($row = $result1->fetch_assoc()) {
        $data['gate'][] = $row;
    }
}

// Retrieve records from the second table
$sql2 = "SELECT * FROM `hall`";
$result2 = $conn->query($sql2);
if ($result2->num_rows > 0) {
    while($row = $result2->fetch_assoc()) {
        $data['hall'][] = $row;
    }
}

// Retrieve records from the third table
$sql3 = "SELECT * FROM `stage`";
$result3 = $conn->query($sql3);
if ($result3->num_rows > 0) {
    while($row = $result3->fetch_assoc()) {
        $data['stage'][] = $row;
    }
}

// Retrieve records from the fourth table
$sql4 = "SELECT * FROM `photoshoot` where 1";
$result4 = $conn->query($sql4);
if ($result4->num_rows > 0) {
    while($row = $result4->fetch_assoc()) {
        $data['photoshoot'][] = $row;
    }
}

// Convert the data array to JSON and send the response
echo json_encode($data);
