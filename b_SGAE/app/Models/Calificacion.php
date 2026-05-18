<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Calificacion extends Model
{
    protected $table = 'calificaciones';
    protected $primaryKey = 'ID_calif';

    protected $fillable = [
        'Puntaje',
        'Fecha',
        'ID_alumno',
        'ID_asignatura',
        'ID_profe',
        'ID_periodo'
    ];

    public $timestamps = false;

    // Relaciones para saber todo el contexto de una nota
    public function alumno() {
        return $this->belongsTo(Alumno::class, 'ID_alumno', 'ID_alumno');
    }

    public function asignatura() {
        return $this->belongsTo(Asignatura::class, 'ID_asignatura', 'ID_asignatura');
    }

    public function profesor() {
        return $this->belongsTo(Profesor::class, 'ID_profe', 'ID_profe');
    }

    public function periodo() {
        return $this->belongsTo(Periodo::class, 'ID_periodo', 'ID_periodo');
    }
}
