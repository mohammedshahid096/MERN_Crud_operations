<?php 
include 'connection.php';
$output ="";session_start();
$userId = $_SESSION["id_session"];
$query = "SELECT * FROM users where user_id != {$userId}";

$result = mysqli_query($conn,$query);

if( mysqli_num_rows($result)>0){
    while($row = mysqli_fetch_assoc($result)){
        $path = 'uploads/'.$row["user_image"];
        $output .= '
        <div class="row mt-4" data-chatid="'.$row["user_id"].'">
        <div class="userdisplay col-11">
        <div class="profilephoto"><img src="'.$path.'">  </div>
        <div class="details">
            <span>'.$row["user_name"]."</span>
            <p>".$row["user_status"].'</p>
        </div>
        </div>
        <div class="col-1 status"><i class="fas fa-circle"></i></div>
    </div> <hr>
        ';
    }
    echo $output;
}
?>