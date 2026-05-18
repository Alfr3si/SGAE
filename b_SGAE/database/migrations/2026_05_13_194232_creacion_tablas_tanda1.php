<?php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        // 1. Tabla Generos
        Schema::create('generos', function (Blueprint $table) {
            $table->id('ID_genero'); // Primary Key Identity
            $table->string('tipo', 15); // VARCHAR(15)
        });

        // 2. Tabla Estatus
        Schema::create('estatus', function (Blueprint $table) {
            $table->id('ID_estatus');
            $table->string('Estatus', 50);
        });

        // 3. Tabla Turno
        Schema::create('turnos', function (Blueprint $table) {
            $table->id('ID_turno');
            $table->string('Turno', 50);
        });

        // 4. Tabla Usuarios con Llaves Foráneas
        Schema::create('usuarios', function (Blueprint $table) {
            $table->id('ID_usuario');
            $table->string('Nombre', 50);
            $table->string('Apellido_p', 50);
            $table->string('Apellido_m', 50)->nullable(); // Permite NULL
            $table->string('Curp', 18)->unique(); // UNIQUE
            $table->string('Passwd', 255);
            $table->string('Tel', 15)->nullable();
            $table->string('Email', 100)->unique();
            $table->string('Direcc', 255)->nullable();

            // Para SQL Server, si quieres guardar la imagen en DB usa binary
            // Aunque se recomienda guardar solo la ruta como string
            $table->binary('Foto')->nullable();

            // Definición de Llaves Foráneas (FK)
            $table->foreignId('ID_genero')->constrained('generos', 'ID_genero');
            $table->foreignId('ID_turno')->constrained('turnos', 'ID_turno');
            $table->foreignId('ID_estatus')->constrained('estatus', 'ID_estatus');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('usuarios');
        Schema::dropIfExists('turnos');
        Schema::dropIfExists('estatus');
        Schema::dropIfExists('generos');
    }
};
