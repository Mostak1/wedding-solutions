<?php
// updateUser.php
require "connection.php";
// Retrieve the updated user data from the request
$id =$_POST['id'];
$name = $_POST['name'];
$phone = $_POST['mobile'];
$address = $_POST['address'];

// Update the user record in the database (Assuming you have a connection to the database)
// Replace <database_host>, <database_name>, <username>, and <password> with your actual database credentials

// Check for connection errors
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Update the user record
$sql = "UPDATE users SET name = '$name', phone = '$phone', address = '$address' WHERE id = '$id'";

if ($conn->query($sql) === TRUE) {
    echo "User updated successfully";
} else {
    echo "Error updating user: " . $conn->error;
}

// Close the database connection
$conn->close();
?>
