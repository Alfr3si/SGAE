<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Genero extends Model
{
    protected $table = 'generos';
    protected $primaryKey = 'ID_genero';
    protected $fillable = ['tipo'];
    public $timestamps = false;


    // =======================================================
    // RELACIONES: Un Género TIENE MUCHOS (hasMany) Usuarios
    // =======================================================
    public function usuarios()
    {
        // hasMany(ModeloDestino, 'FK_en_tabla_destino', 'PK_en_esta_tabla')
        return $this->hasMany(Usuario::class, 'ID_genero', 'ID_genero');
    }
}
