<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Profesor extends Model
{
    protected $table = 'profesores';
    protected $primaryKey = 'ID_profe';

    protected $fillable = [
        'No_ctrl',
        'Rfc',
        'ID_usuario',
        'ID_especl',
        'ID_titulo',
        'ID_grupo',
        'ID_asignatura'
    ];

    public $timestamps = false;

    // Relaciones base
    public function usuario() {
        return $this->belongsTo(Usuario::class, 'ID_usuario', 'ID_usuario');
    }

    public function especialidad() {
        return $this->belongsTo(Especialidad::class, 'ID_especl', 'ID_especl');
    }

    public function titulo() {
        return $this->belongsTo(Titulo::class, 'ID_titulo', 'ID_titulo');
    }

    public function grupo() {
        return $this->belongsTo(Grupo::class, 'ID_grupo', 'ID_grupo');
    }

    public function asignatura() {
        return $this->belongsTo(Asignatura::class, 'ID_asignatura', 'ID_asignatura');
    }
}
