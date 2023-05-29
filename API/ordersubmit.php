<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// Retrieve the request payload
$requestPayload = file_get_contents('php://input');

// Decode the JSON data
$cartItems = json_decode($requestPayload, true);
echo $cartItems;
// Connect to the MySQL database
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "wedding_solutions";


$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
  die('Connection failed: ' . $conn->connect_error);
}

// Insert the cart items into the database
foreach ($cartItems as $item) {
  $name = $conn->real_escape_string($item['title']);
  $price = $conn->real_escape_string($item['images']);
  // Additional properties

  $sql = "INSERT INTO `venues` (name,images) VALUES ('$name', '$price')";
  // Additional columns and values

  if ($conn->query($sql) !== true) {
    echo 'Error: ' . $sql . '<br>' . $conn->error;
  }
}

// Close the database connection
$conn->close();
?>
