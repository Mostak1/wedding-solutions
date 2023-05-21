<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "electro_master";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
// Retrieve all records from a table
$sql = "SELECT * FROM products WHERE description LIKE '%mobile%' OR description LIKE '%phone%' OR title LIKE '%phone%'";
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

