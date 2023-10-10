<?php 
header("Access-Control-Allow-Origin: http://localhost:3001");
header("Access-Control-Allow-Method: POST");
header("Access-Control-Allow-Header: Content-Type");

extract($_POST);

if(empty($name) || empty($lastName) || empty($email) || empty($password) || empty($passwordSubmit)){
    $data = array(
        'ErrorName' => 'You not fill all path!',
        'Line' => __LINE__,
        'Data' => date("m-d-h")
    );
    file_put_contents('./log.txt', json_encode($data));
    echo 'You not fill all path!';
    exit();
}

if($password !== $passwordSubmit){
    $data = array(
        'ErrorName' => 'Passwords do not match!',
        'Line' => __LINE__,
        'Data' => date("m-d-h")
    );
    file_put_contents('./log.txt', json_encode($data));
    echo 'Passwords do not match!';
    exit();
}

if(!filter_var($email, FILTER_VALIDATE_EMAIL)){
    $data = array(
        'ErrorName' => 'Email is not valid!',
        'Line' => __LINE__,
        'Data' => date("m-d-h")
    );
    file_put_contents('./log.txt', json_encode($data));
    echo 'Email is not valid!';
    exit();
}

// get users 
$jsonFile = 'users.json';
$getData = file_get_contents($jsonFile);
$users = json_decode($getData, true);

$newUser = array(
    'id' => count($users) + 2,
    'name' => $name,
    'email' => $email,
    'password' => $password
);

foreach ($users['users'] as $user) {
    if ($user['email'] === $email) {
        $data = array(
            'ErrorName' => 'This user was exists!',
            'Line' => __LINE__,
            'Data' => date("m-d-h")
        );
        file_put_contents('./logs/' . date("m-d-h"), json_encode($data));
        echo 'This user was exists!';
        exit();
    }
}

$users['users'][] = $newUser; 
$newData = json_encode($users, JSON_PRETTY_PRINT);
file_put_contents($jsonFile, $newData);


$data = array(
    'Status' => 'All went good!',
    'Line' => __LINE__,
    'Data' => date("m-d-h")
);
file_put_contents('./log.txt', json_encode($data));

$getDataForResult = file_get_contents($jsonFile);
$massive = json_decode($getDataForResult, true);

var_dump($massive['users']);