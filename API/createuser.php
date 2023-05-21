<?php
require "connection.php";

// $postdata = file_get_contents("php://input");
// /* echo json_encode($postdata);//{"title":"11","description":"22","price":"33","id":null}
// exit; */
// if(isset($postdata) && !empty($postdata))
// {
// 	$request = json_decode($postdata,true);
// 	// Validate.
// 	if(trim($request['name']) === '' || (float)$request['phone'] < 0)
// 	{
// 		return http_response_code(400);
// 	}
// 	$name = $conn->escape_string(trim($request['name']));
// 	$address = $conn->escape_string(trim($request['address']));
// 	$email = $conn->escape_string(trim($request['email']));
// 	$password = $conn->escape_string(trim($request['password']));
// 	$phone = $conn->escape_string((int)$request['phone']);
// 	$sql = "INSERT INTO `users`(`id`, `first_name`, `home`, `phone`, `email`, `password`, `role`) VALUES (null,'{$name}','{$address}','{$phone}','{$email}','{$password}','2')";
// 	//$postdata(201);
// 	// echo $sql;
// if($conn->query($sql))
// 	{
// 		http_response_code(201);
// 		$product = [
// 		'id' => $conn->insert_id,
// 		'name' => $name,
// 		'address' => $address,
// 		'phone' => $phone,
// 		'email' => $email,
// 		'password' => $password,
//     ];
// 		echo json_encode($product);
// 	}
// 	else
// 	{
// 		http_response_code(422);
// 	}
// }

if(mysqli_connect_error()){
	echo mysqli_connect_error();
	exit();
}else{
	$name = $_POST['name'];
	$mobile = $_POST['mobile'];
	$email = $_POST['email'];
	$address = $_POST['address'];
	$password1 = $_POST['password'];
	$password = password_hash($password1,PASSWORD_DEFAULT);

	$sql = "INSERT INTO `users`( `first_name`,`home`, `phone`, `email`,`password`) VALUES ('$name','$address','$mobile','$email','$password')";
	$res = $conn->query($sql);
	if ($res){
		echo "Success";
	}else{
		echo "Error";
	}
	$conn->close();
}
?>