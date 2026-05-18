<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Nivel extends Model
{
    protected $table = 'niveles';
    protected $primaryKey = 'ID_nivel';
    protected $fillable = ['Nivel']; // Así se llama tu columna de texto en la migración
    public $timestamps = false;
}
