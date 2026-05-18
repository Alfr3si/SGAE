<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Puesto extends Model
{
    protected $table = 'puestos';
    protected $primaryKey = 'ID_puesto';
    public $timestamps = false;

    protected $fillable = [
        'Puesto',
        'Descripcion'
    ];
}
