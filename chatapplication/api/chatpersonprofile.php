<?php 
include 'connection.php';

$opp_personID=$_POST["opp_personID"];
 $query = "SELECT * FROM users where user_id= '{$opp_personID}' ";
$result = mysqli_query($conn,$query);
$row= mysqli_fetch_assoc($result);
$path = 'uploads/'.$row["user_image"];
echo "
    <div class='profilephoto'><img src='{$path}' ></div>
    <div class='details'>
    <span>".$row["user_name"]."</span>
    <p>".$row["user_status"]."</p>
    </div>
";
?>