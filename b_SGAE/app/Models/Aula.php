<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Aula extends Model
{
    protected $table = 'aulas';
    protected $primaryKey = 'ID_aula';
    protected $fillable = ['Salon'];
    public $timestamps = false;
}
