<?php 
include 'connection.php';
session_start();
$userId = $_SESSION["id_session"];
$opp_personID= $_POST["opp_personID"];

$query = "SELECT * FROM users where user_id= '{$opp_personID}'";
$result = mysqli_query($conn,$query);
$row= mysqli_fetch_assoc($result);
echo "gotochat";
?>