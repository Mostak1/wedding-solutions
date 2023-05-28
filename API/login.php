<?php
/*
<?php
// Retrieve the request data
$requestData = json_decode(file_get_contents('php://input'), true);

// Extract the username and password from the request data
$username = $requestData['username'];
$password = $requestData['password'];

// Perform authentication and validation
if ($username === 'admin' && $password === 'password') {
  // Authentication successful
  // Generate a token or session information as needed

  // For example, you can generate a JWT token
  $tokenPayload = [
    'username' => $username,
    // Include additional data as needed
  ];

  $token = generateJWT($tokenPayload);

  // Return a success response with the token or session information
  $response = [
    'success' => true,
    'token' => $token,
  ];
} else {
  // Authentication failed
  // Return an error response
  $response = [
    'success' => false,
    'message' => 'Invalid credentials',
  ];
}

// Set the response headers
header('Content-Type: application/json');
// Allow CORS if needed
header('Access-Control-Allow-Origin: *');
// Return the JSON response
echo json_encode($response);

// Function to generate a JWT token (you can use a library like "firebase/php-jwt")
function generateJWT($payload) {
  // Replace this with your JWT generation logic
  // Example using the "firebase/php-jwt" library:
  require 'vendor/autoload.php'; // Path to the library

  // Set your JWT secret key
  $secretKey = 'your_secret_key';

  // Generate the token
  $token = Firebase\JWT\JWT::encode($payload, $secretKey, 'HS256');

  return $token;
}
?>

*/
?>
<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
// Retrieve the request data
$requestData = json_decode(file_get_contents('php://input'), true);

// Extract the username and password from the request data
$username = $requestData['username'];
$password = $requestData['password'];

// Perform authentication and validation
if ($username === 'idb' && $password === '12345') {
  // Authentication successful
  // Generate a token or session information as needed

  // For example, you can store the username in a session
  session_start();
  $_SESSION['username'] = $username;

  // Return a success response
  $response = [
    'success' => true,
    'message' => 'Login successful',
  ];
} else {
  // Authentication failed
  // Return an error response
  $response = [
    'success' => false,
    'message' => 'Invalid credentials',
  ];
}

// Set the response headers
header('Content-Type: application/json');
// Allow CORS if needed
header('Access-Control-Allow-Origin: *');
// Return the JSON response
echo json_encode($response);
?>
