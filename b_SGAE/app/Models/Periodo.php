<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Periodo extends Model
{
    protected $table = 'periodos';
    protected $primaryKey = 'ID_periodo';
    protected $fillable = ['Nombre', 'Orden', 'ID_nivel'];
    public $timestamps = false;

    public function nivel() {
        return $this->belongsTo(Nivel::class, 'ID_nivel', 'ID_nivel');
    }
}
