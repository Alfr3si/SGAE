<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Alumno extends Model
{
    protected $table = 'alumnos'; // Respetamos la 'A' mayúscula de la migración
    protected $primaryKey = 'ID_alumno';
    protected $fillable = ['Matricula', 'ID_usuario', 'ID_conducta', 'ID_grupo'];
    public $timestamps = false;

    // Datos base del alumno (Nombre, correo, etc.)
    public function usuario() {
        return $this->belongsTo(Usuario::class, 'ID_usuario', 'ID_usuario');
    }

    // Reporte de conducta actual del alumno
    public function conducta() {
        return $this->belongsTo(Conducta::class, 'ID_conducta', 'ID_conducta');
    }

    // Salón asignado al alumno
    public function grupo() {
        return $this->belongsTo(Grupo::class, 'ID_grupo', 'ID_grupo');
    }
}
