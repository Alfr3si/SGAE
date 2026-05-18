<?php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        // 1. Tabla Accesos
        Schema::create('accesos', function (Blueprint $table) {
            $table->id('ID_Acceso'); // PRIMARY KEY IDENTITY(1,1)
            $table->string('Nivel', 50); // VARCHAR(50) NOT NULL
            $table->string('Descripcion', 255)->nullable(); // VARCHAR(255)
        });

        // 2. Tabla Puestos
        Schema::create('puestos', function (Blueprint $table) {
            $table->id('ID_puesto');
            $table->string('Puesto', 50);
            $table->string('Descripcion', 255)->nullable();
        });

        // 3. Tabla Admins
        Schema::create('admins', function (Blueprint $table) {
            $table->id('ID_admin');
            $table->string('No_emple', 20); // VARCHAR(20) NOT NULL
            $table->string('Rfc', 13)->unique(); // VARCHAR(13) UNIQUE NOT NULL
            $table->string('Departamento', 100)->nullable();
            $table->string('Puesto', 50)->nullable();

            // Llaves Foráneas (FK)
            $table->foreignId('ID_usuario')->constrained('usuarios', 'ID_usuario'); // FK hacia Usuarios
            $table->foreignId('ID_Acceso')->constrained('accesos', 'ID_Acceso'); // FK hacia Accesos
        });

        // 4. Tabla Eventos
        Schema::create('eventos', function (Blueprint $table) {
            $table->id('ID_evento');
            $table->date('Fecha'); // DATE NOT NULL
            $table->string('Evento', 100); // VARCHAR(100) NOT NULL
            $table->string('Descripcion', 255)->nullable();

            // Llave Foránea hacia Admins
            $table->foreignId('ID_admin')->constrained('admins', 'ID_admin'); // FK hacia Admins
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('eventos');
        Schema::dropIfExists('admins');
        Schema::dropIfExists('puestos');
        Schema::dropIfExists('accesos');
    }
};
