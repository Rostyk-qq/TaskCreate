<?php 
header("Access-Control-Allow-Origin: http://localhost:3001");
header("Access-Control-Allow-Method: POST");
header("Access-Control-Allow-Header: Content-Type");

extract($_POST);

if(empty($name) || empty($lastName) || empty($email) || empty($password) || empty($passwordSubmit)){
    return 'You not fill all path!';
    e
}