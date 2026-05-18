<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Dia extends Model
{
    protected $table = 'dias';
    protected $primaryKey = 'ID_dia';
    protected $fillable = ['Dia'];

    public $timestamps = false;
}
