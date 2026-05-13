<?php
// api/student/get_profile.php
// 1. Permitir el origen de React
header("Access-Control-Allow-Origin: http://localhost:5173");
// 2. Permitir credenciales (sesiones/cookies)
header("Access-Control-Allow-Credentials: true");
// 3. Permitir los métodos 
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
// 4. Permitir las cabeceras que React envía 
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");
// 5. Configurar el tipo de contenido
header("Content-Type: application/json; charset=UTF-8");

// Si la petición es OPTIONS, respondemos con un 200 OK y morimos ahí mismo
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

include_once '../config/db_connection.php';

if (!isset($_GET['id'])) {
    echo json_encode(["success" => false, "message" => "ID no proporcionado"]);
    exit;
}

$userId = $_GET['id'];

// Consulta con JOIN para obtener datos del alumno y su grupo
$query = "SELECT 
            u.use_usuario as matricula,
            a.alum_nombre, a.alum_apepa, a.alum_apema, a.alum_curp, 
            a.alum_promedio, a.alum_estatus, a.alum_conducta, a.alum_turno,
            g.grupo_grado, g.grupo_letra
          FROM usuarios u 
          INNER JOIN alumnos a ON u.use_id = a.use_id 
          LEFT JOIN grupos g ON a.grupo_id = g.grupo_id
          WHERE u.use_id = $1 LIMIT 1";


/** @var \PgSql\Connection $conn */
$result = pg_query_params($conn, $query, array($userId));

if ($result && pg_num_rows($result) > 0) {
    $row = pg_fetch_assoc($result);
    // Formateamos algunos datos para que el frontend los lea más fácil
    $row['alum_turno'] = ($row['alum_turno'] == 'M') ? 'Matutino' : 'Vespertino';
    echo json_encode(["success" => true, "data" => $row]);
} else {
    echo json_encode(["success" => false, "message" => "Alumno no encontrado"]);
}
?>
