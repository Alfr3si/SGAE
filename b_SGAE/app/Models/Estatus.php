<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Estatus extends Model
{
    protected $table = 'estatus';
    protected $primaryKey = 'ID_estatus';
    protected $fillable = ['Estatus'];
    public $timestamps = false;

    // =======================================================
    // RELACIONES: Un Estatus TIENE MUCHOS Usuarios
    // =======================================================
    public function usuarios()
    {
        return $this->hasMany(Usuario::class, 'ID_estatus', 'ID_estatus');
    }
}
