<?php
$host = "localhost";
$port = "5432";
$dbname = "sgae_db";
$user = "sgae_admin";
$password = "12345";

// Aquí es donde nace la variable $conn
$conn = pg_connect("host=$host port=$port dbname=$dbname user=$user password=$password");

if (!$conn) {
    die("Error de conexión: " . pg_last_error());
}
?>
