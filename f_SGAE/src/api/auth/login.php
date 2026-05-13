<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");

// 1. Asegúrate de que la diagonal esté presente
include_once __DIR__ . '/../config/db_connection.php';

/** @var \PgSql\Connection $conn */

$data = json_decode(file_get_contents("php://input"));

if (!empty($data->use_usuario) && !empty($data->use_password)) {
    
    $usuario = $data->use_usuario;
    $password = $data->use_password;

    // 2. Ajustado a tus nuevos nombres de tabla/columna:
    // Tabla: usuarios -> use_usuario, use_password, use_rol
    // Tabla: alumnos -> alum_nombre
    $query = "SELECT u.use_id, u.use_password, u.use_rol, a.alum_nombre 
              FROM usuarios u 
              LEFT JOIN alumnos a ON u.use_id = a.use_id 
              WHERE u.use_usuario = $1 LIMIT 1";

    $result = pg_query_params($conn, $query, array($usuario));

    if ($result && pg_num_rows($result) > 0) {
        $user = pg_fetch_assoc($result);

        // 3. Verificación de contraseña
        if ($password === $user['use_password']) {
            echo json_encode([
                "success" => true,
                "user" => [
                    "use_id" => (int)$user['use_id'],
                    "nombre" => $user['alum_nombre'] ?? 'Usuario',
                    "rol"    => $user['use_rol']
                ]
            ]);
        } else {
            echo json_encode(["success" => false, "message" => "Contraseña incorrecta."]);
        }
    } else {
        echo json_encode(["success" => false, "message" => "El usuario no existe."]);
    }
} else {
    echo json_encode(["success" => false, "message" => "Datos incompletos."]);
}

pg_close($conn);
?>
