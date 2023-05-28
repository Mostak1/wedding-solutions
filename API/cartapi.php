<?php
// Establish a connection to the MySQL database
$servername = "localhost";
$username = "root";
$password = "";
$database = "wedding_solutions";

$conn = new mysqli($servername, $username, $password, $database);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get the cart items data from the request
$data = json_decode(file_get_contents("php://input"), true);

// Validate and sanitize the cart items data if needed
// ...

// Insert the cart items into the database
foreach ($data as $item) {
    $name = $conn->real_escape_string($item['title']);

    // Assuming you have a "cart_items" table with columns "name" and "timestamp"
    $sql = "INSERT INTO venues (name) VALUES ('$name')";

    if ($conn->query($sql) === TRUE) {
        echo "Cart item added successfully";
    } else {
        echo "Error adding cart item: " . $conn->error;
    }
}

// Close the database connection
$conn->close();
?>
