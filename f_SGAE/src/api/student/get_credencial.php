<?php
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Content-Type: application/json; charset=UTF-8");
include_once '../config/db_connection.php';

/** @var \PgSql\Connection $conn */
$userId = $_GET['id'];

$query = "SELECT a.alum_nombre, a.alum_apepa, a.alum_apema, a.alum_estatus, 
                 a.alum_conducta, u.use_usuario as matricula, g.grupo_grado, g.grupo_letra
          FROM alumnos a
          INNER JOIN usuarios u ON a.use_id = u.use_id
          LEFT JOIN grupos g ON a.grupo_id = g.grupo_id
          WHERE a.use_id = $1";

$result = pg_query_params($conn, $query, array($userId));

if ($row = pg_fetch_assoc($result)) {
    echo json_encode(["success" => true, "data" => $row]);
} else {
    echo json_encode(["success" => false]);
}
