<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Conducta extends Model
{
    protected $table = 'conducta';
    protected $primaryKey = 'ID_conducta';
    protected $fillable = ['Conducta'];
    public $timestamps = false;
}
