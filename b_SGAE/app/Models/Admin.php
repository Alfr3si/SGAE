<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Admin extends Model
{
    protected $table = 'admins';
    protected $primaryKey = 'ID_admin';
    public $timestamps = false;

    protected $fillable = [
        'No_emple',
        'Rfc',
        'Departamento',
        'Puesto',
        'ID_usuario',
        'ID_Acceso'
    ];

    // =======================================================
    // RELACIONES (Un Administrador pertenece a...)
    // =======================================================

    /**
     * Relación con su cuenta base de Usuario
     */
    public function usuario()
    {
        return $this->belongsTo(Usuario::class, 'ID_usuario', 'ID_usuario');
    }

    /**
     * Relación con su nivel de Acceso (Permisos)
     */
    public function acceso()
    {
        return $this->belongsTo(Acceso::class, 'ID_Acceso', 'ID_Acceso');
    }

    /**
     * Un administrador puede organizar o registrar muchos eventos
     */
    public function eventos()
    {
        return $this->hasMany(Evento::class, 'ID_admin', 'ID_admin');
    }
}
