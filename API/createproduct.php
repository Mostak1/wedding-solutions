<?php
require "connection.php";
$postdata = file_get_contents("php://input");
/* echo json_encode($postdata);//{"title":"11","description":"22","price":"33","id":null}
exit; */
if(isset($postdata) && !empty($postdata))
{
	$request = json_decode($postdata,true);
	// Validate.
	if(trim($request['title']) === '' || (float)$request['price'] < 0)
	{
		return http_response_code(400);
	}
	$title = $conn->escape_string(trim($request['title']));
	$description = $conn->escape_string(trim($request['description']));
	$price = $conn->escape_string((int)$request['price']);
	$sql = "INSERT INTO products(`id`,`title`,`description`,`pprice`) VALUES (null,'{$title}','{$description}',{$price})";
	//$postdata(201);
	// echo $sql;
if($conn->query($sql))
	{
		http_response_code(201);
		$product = [
		'id' => $conn->insert_id,
		'title' => $title,
		'description' => $description,
		'price' => $price];
		echo json_encode($product);
	}
	else
	{
		http_response_code(422);
	}
}