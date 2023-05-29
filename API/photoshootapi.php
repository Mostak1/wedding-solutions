<?php
//connections++;
require "connection.php";
// Retrieve all records from a table
$sql = "SELECT * FROM `photoshoot` where 1";
$result = $conn->query($sql);
$data = array();
if ($result->num_rows > 0) {
  // output data of each row
  while($row = $result->fetch_assoc()) {
    $data[] = $row;
  }
}
echo json_encode($data);

// Add a new record to a table
// $name = $_POST['name'];
// $email = $_POST['email'];
// $sql = "INSERT INTO mytable (name, email) VALUES ('$name', '$email')";
// $conn->query($sql);
// echo "Record added successfully";

