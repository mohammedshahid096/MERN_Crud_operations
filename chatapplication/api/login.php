<?php 
include 'connection.php';
$loginEmail =$_POST["check_gmail"];
$loginPassword = $_POST["check_password"];


$authentication_query ="SELECT * FROM users where 
user_email='{$loginEmail}' AND user_password='{$loginPassword}' ";
// echo $authentication_query;
$result = mysqli_query($conn,$authentication_query);

if(mysqli_num_rows($result) > 0){
				
    $row= mysqli_fetch_assoc($result);
        session_start();
        #this sessions or used because for logout purpose by deleting the sessions in logout page
        $_SESSION["Email_session"] = $row["user_email"];
        $_SESSION["id_session"] = $row["user_id"];
        echo "true";
}
else{
    echo "false";
}
?>