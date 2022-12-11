<?php 
$create_dataBase = "CREATE DATABASE ChatApplication";
//creating a database
$creating_table ="CREATE TABLE `chatapplication`.`users` 
( `user_id` INT(11) NOT NULL AUTO_INCREMENT ,
 `user_name` VARCHAR(40) NOT NULL ,
 `user_email` VARCHAR(50) NOT NULL ,
 `user_password` VARCHAR(25) NOT NULL,
 `user_image` VARCHAR(200) NOT NULL ,
 PRIMARY KEY  (`user_id`)
 ";
 
?>