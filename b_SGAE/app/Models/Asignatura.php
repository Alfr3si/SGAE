<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Asignatura extends Model
{
    protected $table = 'asignaturas';
    protected $primaryKey = 'ID_asignatura';

    protected $fillable = [
        'Nombre',
        'Unidades',
        'Creditos',
        'ID_periodo'
    ];

    public $timestamps = false;

    // Pertenece a un periodo académico específico
    public function periodo()
    {
        return $this->belongsTo(Periodo::class, 'ID_periodo', 'ID_periodo');
    }
}
