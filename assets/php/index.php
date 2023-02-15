<?php

//connect to database
$servername = "localhost";
$username = "nyametease";
$password = "";
$dbname = "nyametease";

try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    // set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    }
catch(PDOException $e)
    {
    echo "Connection failed: " . $e->getMessage();
    }

// Get form data
$email = $_POST["email"];

// Prepare and execute statement
$stmt = $conn->prepare("INSERT INTO newsletter (email) VALUES (:email)");
$stmt->execute(array(':email' => $email));

echo "Thank you for subscribing!";

$conn = null;

?>
