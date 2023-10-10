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
    );
    file_put_contents('./log.txt', json_encode($data));
    return 'You not fill all path!';
}

if($password !== $passwordSubmit){
    $data = array(
        'ErrorName' => 'Passwords do not match!',
        'Line' => __LINE__,
        'Data' => date("m-d-i-s")
    );
    file_put_contents('./log.txt', json_encode($data));
    return 'Passwords do not match!';
}

if(!filter_var($email, FILTER_VALIDATE_EMAIL)){
    $data = array(
        'ErrorName' => 'Email is not valid!',
        'Line' => __LINE__,
        'Data' => date("m-d-i-s")
    );
    file_put_contents('./log.txt', json_encode($data));
    return 'Email is not valid!';
}

// get users 
$jsonFile = 'users.json';
$getData = file_get_contents($jsonFile);
$users = json_decode($getData, true);

$newUser = array(
    'id' => count($users) + 1,
    'name' => $name,
    'email' => $email,
    'password' => $password
);

for ($i = 0; $i < count($users); $i++) { 
    if($users['users'][$i]['email'] === $email){
        $data = array(
            'ErrorName' => 'This user was exists!',
            'Line' => __LINE__,
            'Data' => date("m-d-i-s")
        );
        file_put_contents('./log.txt', json_encode($data));
        return 'This user was exists!';
    }
}
$users['users'][] = $newUser; 
$newData = json_encode($users, JSON_PRETTY_PRINT);
file_put_contents($jsonFile, $newData);


$data = array(
    'ErrorName' => 'All went good!',
    'Line' => __LINE__,
    'Data' => date("m-d-i-s")
);
file_put_contents('./log.txt', json_encode($data));

$getDataForResult = file
return array(
    'message' => 'Registration success!',
    'array' => 
);