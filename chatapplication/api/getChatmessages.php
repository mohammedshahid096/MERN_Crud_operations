<?php 
include 'connection.php';
session_start();
$outgoing_msg_id = $_SESSION["id_session"];
$incoming_msg_id = $_POST["chater_id"];

$profile_query = "SELECT `user_image` FROM `users` WHERE user_id ={$outgoing_msg_id} ";
$pf = mysqli_query($conn,$profile_query);
$reciver_profile = mysqli_fetch_assoc($pf);
$reciver_profile = 'uploads/'.$reciver_profile["user_image"];


$query ="select * from chatmessages
where (incoming_msg_id= {$incoming_msg_id} AND outgoing_msg_id = {$outgoing_msg_id}) 
or
(incoming_msg_id= {$outgoing_msg_id} AND outgoing_msg_id = {$incoming_msg_id}) order by msg_id ASC
";
$result = mysqli_query($conn,$query);
$output ="";
if(mysqli_num_rows($result)>0){
    while($row =mysqli_fetch_assoc($result)){
        if($row["outgoing_msg_id"]==$outgoing_msg_id){
            $output .= "
            <div class='chatoutgoing'>
            <p>{$row['massage']}</p>
        </div>
            ";
        }
        else{
            $output .= "
            <div class='chatincomming'>
            <img src={$reciver_profile}>
            <p>{$row['massage']}</p>
        </div>
            ";
        }
    }
    echo $output;
}
else{
    echo "<div id='norecordmessage' >no record find out</div>";
}
?>