<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Laravel\Sanctum\HasApiTokens;

class Usuario extends Authenticatable
{
    use HasApiTokens;

    protected $table = 'Usuarios';
    protected $primaryKey = 'ID_usuario';
    public $timestamps = false;

    protected $fillable = [
        'Nombre', 'Apellido_p', 'Apellido_m',
        'Curp', 'Passwd', 'Tel', 'Email',
        'Direcc', 'Foto', 'ID_turno', 'ID_estatus'
    ];

    protected $hidden = ['Passwd'];

    // Decirle a Sanctum que use Passwd como password
    public function getAuthPassword()
    {
        return $this->Passwd;
    }
}
