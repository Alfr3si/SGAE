<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Especialidad extends Model
{
    protected $table = 'especialidades';
    protected $primaryKey = 'ID_especl'; // Respetamos la abreviación
    protected $fillable = ['Nombre'];
    public $timestamps = false;
}
