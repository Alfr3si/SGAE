<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Grado extends Model
{
    protected $table = 'grados';
    protected $primaryKey = 'ID_grado';
    protected $fillable = ['Grado'];
    public $timestamps = false;
}
