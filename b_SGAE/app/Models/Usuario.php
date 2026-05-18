<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Usuario extends Model
{
    // 1. Apuntamos a tu tabla real en minúsculas
    protected $table = 'usuarios';

    // 2. Tu llave primaria personalizada
    protected $primaryKey = 'ID_usuario';
    public $timestamps = false;

    // 3. Mapeamos todos los campos exactamente como están en tu migración
    protected $fillable = [
        'Nombre',
        'Apellido_p',
        'Apellido_m',
        'Curp',
        'Passwd',
        'Tel',
        'Email',
        'Direcc',
        'Foto',
        'ID_genero',
        'ID_turno',
        'ID_estatus',
    ];

    // 4. Protegemos la contraseña para que Laravel nunca la incluya
    // sin querer cuando mandes los JSON de los usuarios a React
    protected $hidden = [
        'Passwd',
    ];

    // =======================================================
    // RELACIONES: Un Usuario PERTENECE A (belongsTo) un catálogo
    // =======================================================

    /**
     * Relación con el modelo Genero
     */
    public function genero()
    {
        // belongsTo(ModeloDestino, 'FK_en_usuarios', 'PK_en_generos')
        return $this->belongsTo(Genero::class, 'ID_genero', 'ID_genero');
    }

    /**
     * Relación con el modelo Estatus
     */
    public function estatus()
    {
        return $this->belongsTo(Estatus::class, 'ID_estatus', 'ID_estatus');
    }

    /**
     * Relación con el modelo Turno
     */
    public function turno()
    {
        return $this->belongsTo(Turno::class, 'ID_turno', 'ID_turno');
    /**
     * Relación con el perfil de Administrador (Si aplica)
     */
    public function admin()
    {
        // Un usuario puede tener un perfil de administrador asociado
        return $this->hasOne(Admin::class, 'ID_usuario', 'ID_usuario');
    }
    /**
     * Relación con el perfil de Profesor (Si aplica)
     */
    public function profesor()
    {
        return $this->hasOne(Profesor::class, 'ID_usuario', 'ID_usuario');
    }
}
