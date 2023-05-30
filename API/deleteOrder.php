<?php
//connections++;
require "connection.php";

// Check if the order ID is provided
if (isset($_GET['orderId'])) {
  // Get the order ID from the request
  $orderId = $_GET['orderId'];

  // Delete the order item from the database
  $sql = "DELETE FROM `orders` WHERE id = $orderId";
  $result = $conn->query($sql);
//   $result = mysqli_query($conn, $sql);

  if ($result) {
    // Deletion successful
    echo json_encode(array('message' => 'Order item deleted successfully'));
  } else {
    // Deletion failed
    echo json_encode(array('message' => 'Failed to delete order item'));
  }
} else {
  // Order ID not provided
  echo json_encode(array('message' => 'Order ID not provided'));
}
?>
