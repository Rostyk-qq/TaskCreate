<?php 
header("Access-Control-Allow-Origin: http://localhost:3001");
header("Access-Control-Allow-Method: POST");
header("Access-Control-Allow-Header: Content-Type");

extract($_POST);

if($name)