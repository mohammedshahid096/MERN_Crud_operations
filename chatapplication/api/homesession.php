<?php 
include 'connection.php';
session_start();
$userId = $_SESSION["id_session"];

$query = "SELECT * FROM users where user_id= '{$userId}'";
$result = mysqli_query($conn,$query);
$row= mysqli_fetch_assoc($result);
$path = 'uploads/'.$row["user_image"];
// echo $path;
echo "
<div class='profilephoto'><img src='{$path}'>  </div>
<div class='details'>
    <span>".$row["user_name"]."</span>
    <p>".$row["user_status"]."</p>
</div>
";

// echo json_encode($a);
?>