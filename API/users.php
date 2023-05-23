



<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "wedding_solutions";

// Create connection
$conn = new mysqli($servername, $username,$password,$dbname);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
};


// Assuming you have already established a database connection
// Replace the placeholders with your actual database connection details

// Function to create a new user
function createUser($name, $image, $password) {
    global $servername, $username, $password, $dbname;
    
    // Create a prepared statement to prevent SQL injection
    $stmt = $conn->prepare("INSERT INTO users (name, image, password) VALUES ($name, $image, $password)");
    $stmt->bind_param("sss", $name, $image, $password);
    
    // Execute the statement
    if ($stmt->execute()) {
        return true;
    } else {
        return false;
    }
}

// Function to update an existing user
function updateUser($id, $name, $image, $password) {
    global $servername, $username, $password, $dbname;
    
    // Create a prepared statement to prevent SQL injection
    $stmt = $conn->prepare("UPDATE users SET name=?, image=?, password=? WHERE id=?");
    $stmt->bind_param("sssi", $name, $image, $password, $id);
    
    // Execute the statement
    if ($stmt->execute()) {
        return true;
    } else {
        return false;
    }
}

// Function to delete a user
function deleteUser($id) {
    global $servername, $username, $password, $dbname;
    
    // Create a prepared statement to prevent SQL injection
    $stmt = $conn->prepare("DELETE FROM users WHERE id=?");
    $stmt->bind_param("i", $id);
    
    // Execute the statement
    if ($stmt->execute()) {
        return true;
    } else {
        return false;
    }
}

// Function to retrieve user details
function getUserDetails($id) {
    global $servername, $username, $password, $dbname;
    
    // Create a prepared statement to prevent SQL injection
    $stmt = $conn->prepare("SELECT * FROM users WHERE id=?");
    $stmt->bind_param("i", $id);
    
    // Execute the statement
    $stmt->execute();
    
    // Get the result set
    $result = $stmt->get_result();
    
    // Fetch the user details as an associative array
    $user = $result->fetch_assoc();
    
    return $user;
}

// Usage examples:

// Create a new user
createUser("John Doe", "john.jpg", "password123");

// Update an existing user
updateUser(1, "Jane Smith", "jane.jpg", "newpassword");

// Delete a user
deleteUser(2);

// Get user details
$userDetails = getUserDetails(1);
print_r($userDetails);

?>
