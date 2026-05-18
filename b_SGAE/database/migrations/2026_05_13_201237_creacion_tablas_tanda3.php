<?php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        // --- CATÁLOGOS BASE ---

        Schema::create('titulos', function (Blueprint $table) {
            $table->id('ID_titulo'); // PRIMARY KEY IDENTITY
            $table->string('Nombre', 100); // VARCHAR(100)
        });

        Schema::create('especialidades', function (Blueprint $table) {
            $table->id('ID_especl');
            $table->string('Nombre', 100);
        });

        Schema::create('aulas', function (Blueprint $table) {
            $table->id('ID_aula');
            $table->string('Salon', 50);
        });

        Schema::create('grados', function (Blueprint $table) {
            $table->id('ID_grado');
            $table->string('Grado', 50);
        });

        Schema::create('letras', function (Blueprint $table) {
            $table->id('ID_letra');
            $table->string('Letra', 5);
        });

        Schema::create('niveles', function (Blueprint $table) {
            $table->id('ID_nivel');
            $table->string('Nivel', 50); // Mapeado de VARCHAR(50)
        });

        Schema::create('conducta', function (Blueprint $table) {
            $table->id('ID_conducta');
            $table->string('Conducta', 100);
        });

        // --- TABLAS CON RELACIONES ---

        // Tabla Grupos (Depende de letras, grados, aulas, niveles)
        Schema::create('grupos', function (Blueprint $table) {
            $table->id('ID_grupo');
            $table->foreignId('ID_letra')->constrained('letras', 'ID_letra');
            $table->foreignId('ID_grado')->constrained('grados', 'ID_grado');
            $table->foreignId('ID_aula')->constrained('aulas', 'ID_aula');
            $table->foreignId('ID_nivel')->constrained('niveles', 'ID_nivel');
        });

        // Tabla Alumnos (Depende de usuarios, conducta, grupos)
        Schema::create('alumnos', function (Blueprint $table) {
            $table->id('ID_alumno');
            $table->string('Matricula', 20)->unique(); // UNIQUE NOT NULL
            $table->foreignId('ID_usuario')->constrained('usuarios', 'ID_usuario');
            $table->foreignId('ID_conducta')->constrained('conducta', 'ID_conducta');
            $table->foreignId('ID_grupo')->constrained('grupos', 'ID_grupo');
        });

        // Tabla Periodos (Depende de niveles)
        Schema::create('periodos', function (Blueprint $table) {
            $table->id('ID_periodo');
            $table->string('Nombre', 50);
            $table->integer('Orden'); // INT NOT NULL
            $table->foreignId('ID_nivel')->constrained('niveles', 'ID_nivel');
        });
    }

    public function down(): void
    {
        // Borrar en orden inverso para evitar conflictos de FK
        Schema::dropIfExists('periodos');
        Schema::dropIfExists('alumnos');
        Schema::dropIfExists('grupos');
        Schema::dropIfExists('conducta');
        Schema::dropIfExists('niveles');
        Schema::dropIfExists('letras');
        Schema::dropIfExists('grados');
        Schema::dropIfExists('aulas');
        Schema::dropIfExists('especialidades');
        Schema::dropIfExists('titulos');
    }
};
