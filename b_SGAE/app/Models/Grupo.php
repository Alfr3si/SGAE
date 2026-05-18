<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Grupo extends Model
{
    protected $table = 'grupos';
    protected $primaryKey = 'ID_grupo';
    protected $fillable = ['ID_letra', 'ID_grado', 'ID_aula', 'ID_nivel'];
    public $timestamps = false;

    // Un grupo pertenece a una letra (Ej: 'A')
    public function letra() {
        return $this->belongsTo(Letra::class, 'ID_letra', 'ID_letra');
    }

    // Un grupo pertenece a un grado (Ej: '1ro')
    public function grado() {
        return $this->belongsTo(Grado::class, 'ID_grado', 'ID_grado');
    }

    // Un grupo se imparte en un Aula
    public function aula() {
        return $this->belongsTo(Aula::class, 'ID_aula', 'ID_aula');
    }

    // Un grupo pertenece a un nivel (Ej: 'Secundaria')
    public function nivel() {
        return $this->belongsTo(Nivel::class, 'ID_nivel', 'ID_nivel');
    }

    // Relación hacia abajo: Un grupo tiene muchos alumnos
    public function alumnos() {
        return $this->hasMany(Alumno::class, 'ID_grupo', 'ID_grupo');
    }
}
