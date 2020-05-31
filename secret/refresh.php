<?php
error_reporting(E_ERROR | E_PARSE);
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header('Access-Control-Allow-Headers: Origin, Content-Type');
header('Content-Type: application/json');

// Takes raw data from the request
if ($_SERVER['REQUEST_METHOD'] === 'POST' && empty($_POST)) {
    $_POST = json_decode(file_get_contents('php://input'), true);

    if (!isset($_POST['refresh_token'])) {
        http_response_code(400);
        echo json_encode(['error' => 'You must supply a refresh token']);
        exit;
    }

    require_once 'keys.php';

    $data = [
        'refresh_token' => $_POST['refresh_token'],
        'grant_type' => 'refresh_token'
    ];

    $options = array(
        'http' => array(
            'header' => [
                'Authorization: Basic ' . base64_encode(CLIENT_ID . ':' . CLIENT_SECRET)
            ],
            'method' => 'POST',
            'content' => http_build_query($data)
        )
    );

    $context = stream_context_create($options);
    $result = file_get_contents('https://accounts.spotify.com/api/token', false, $context);

    if ($result === FALSE) {
        http_response_code(400);
        exit;
    }

    echo $result;

}