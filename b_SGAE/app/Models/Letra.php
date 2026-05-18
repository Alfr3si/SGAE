<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Letra extends Model
{
    protected $table = 'letras';
    protected $primaryKey = 'ID_letra';
    protected $fillable = ['Letra'];
    public $timestamps = false;
}
