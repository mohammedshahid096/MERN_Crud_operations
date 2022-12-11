<?php 
include 'connection.php';
session_start();
$myMessage_id = $_SESSION["id_session"];
$sendMessage_id = $_POST["senderto_id"];
$message = $_POST["MESSAGE"];

$query = "insert into chatmessages(incoming_msg_id, outgoing_msg_id, massage)
values 
('{$sendMessage_id}','{$myMessage_id}','{$message}')
";
$result = mysqli_query($conn,$query);
if($result){
    echo "true";
}
else{
    echo "false";
}
?>