<?php 
#destroying the sessions
session_start(); #every time 1st we need to start the sessions 

session_unset(); #it will delete the variables of the sessions

session_destroy(); #it will permanently and delete the sessions

#now after sessions deleted we redirect the page towards login page
echo "logout";

?>