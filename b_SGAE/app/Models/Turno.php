<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Turno extends Model
{
    protected $table = 'turnos';
    protected $primaryKey = 'ID_turno';
    protected $fillable = ['Turno'];
    public $timestamps = false;

    // =======================================================
    // RELACIONES: Un Turno TIENE MUCHOS Usuarios
    // =======================================================
    public function usuarios()
    {
        return $this->hasMany(Usuario::class, 'ID_turno', 'ID_turno');
    }
}
