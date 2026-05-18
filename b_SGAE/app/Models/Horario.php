<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Horario extends Model
{
    protected $table = 'horarios';
    protected $primaryKey = 'ID_horario';

    protected $fillable = [
        'Hora_ini',
        'Hora_fin',
        'ID_asignatura',
        'ID_grupo',
        'ID_profe',
        'ID_dia'
    ];

    public $timestamps = false;

    // Relaciones cruzadas de la retícula
    public function asignatura() {
        return $this->belongsTo(Asignatura::class, 'ID_asignatura', 'ID_asignatura');
    }

    public function grupo() {
        return $this->belongsTo(Grupo::class, 'ID_grupo', 'ID_grupo');
    }

    public function profesor() {
        return $this->belongsTo(Profesor::class, 'ID_profe', 'ID_profe');
    }

    public function dia() {
        return $this->belongsTo(Dia::class, 'ID_dia', 'ID_dia');
    }
}
