<?php 
header("Access-Control-Allow-Origin: http://localhost:3001");
header("Access-Control-Allow-Method: POST");
header("Access-Control-Allow-Header: Content-Type");

extract($_POST);

if(empty($name) || empty($lastName) || empty($email) || empty($password) || empty($passwordSubmit)){
    $data = array(
        'ErrorName' => 'You not fill all path!',
        'Line' => __LINE__,
        'Data' => date("m-d-i-s")
    )
    file_put_contents('')
    return 'You not fill all path!';
}

if($password !== $passwordSubmit){
    return 'Passwords do not match!';
}

if(!filter_var($email, FILTER_VALIDATE_EMAIL)){
    return 'Email is not valid!';
}

$users_store = [
   '' []
]
