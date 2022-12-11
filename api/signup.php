<?php 
if(isset($_FILES["image"]))
{
    $name = $_POST["firstname"]." ".$_POST["lastname"];
    $email = $_POST["Email"];
    $password = $_POST["pass_word"];
    $image = $_FILES["image"]["name"];
    $temp_img = $_FILES["image"]["tmp_name"];
    $status = "Active Now";

    $extension = pathinfo($image,PATHINFO_EXTENSION);
    $validate_extension = array('jpg','jpeg','png');

    if(in_array($extension,$validate_extension))
    {
        move_uploaded_file($temp_img, "../uploads/$image");
        include 'connection.php';

         $query = "SELECT user_email FROM `users` WHERE user_email ='{$email}'";
          $result = mysqli_query($conn,$query);
          if(mysqli_num_rows($result) > 0) // this will check wheather the email is present already or not
          {
            echo "emailalreadypresent";
          }
          else{
            $query ="
            insert into users( `user_name`, `user_email`, `user_password`, `user_image`,`user_status`)
            values
            ('{$name}','{$email}','{$password}','{$image}','{$status}')
            ";
            $result = mysqli_query($conn,$query);
            mysqli_close($conn);
            if($result){
                echo "true";
            }
            else{
                echo "false";
            }
          }
    }
    else{
        echo "errorimage";
    }

}
else{
    echo "imagenotupload";
}
?>