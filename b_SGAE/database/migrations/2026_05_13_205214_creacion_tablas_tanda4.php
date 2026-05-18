<?php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        // 1. Tabla Asignaturas (Depende de periodos)
        Schema::create('asignaturas', function (Blueprint $table) {
            $table->id('ID_asignatura');
            $table->string('Nombre', 100);
            $table->integer('Unidades');
            $table->integer('Creditos');
            $table->foreignId('ID_periodo')->constrained('periodos', 'ID_periodo');
        });

        // 2. Tabla Profesores (Depende de usuarios, especialidades, titulos, grupos, asignaturas)
        Schema::create('profesores', function (Blueprint $table) {
            $table->id('ID_profe');
            $table->string('No_ctrl', 20);
            $table->string('Rfc', 13)->unique();
            $table->foreignId('ID_usuario')->constrained('usuarios', 'ID_usuario');
            $table->foreignId('ID_especl')->constrained('especialidades', 'ID_especl');
            $table->foreignId('ID_titulo')->constrained('titulos', 'ID_titulo');
            $table->foreignId('ID_grupo')->constrained('grupos', 'ID_grupo');
            $table->foreignId('ID_asignatura')->constrained('asignaturas', 'ID_asignatura');
        });

        // 3. Tabla Calificaciones (Depende de alumnos, asignaturas, profesores, periodos)
        Schema::create('calificaciones', function (Blueprint $table) {
            $table->id('ID_calif');
            $table->decimal('Puntaje', 5, 2); // DECIMAL(5,2) para notas como 95.50
            $table->date('Fecha');
            $table->foreignId('ID_alumno')->constrained('Alumnos', 'ID_alumno');
            $table->foreignId('ID_asignatura')->constrained('asignaturas', 'ID_asignatura');
            $table->foreignId('ID_profe')->constrained('profesores', 'ID_profe');
            $table->foreignId('ID_periodo')->constrained('periodos', 'ID_periodo');
        });

        // 4. Tabla Días
        Schema::create('dias', function (Blueprint $table) {
            $table->id('ID_dia');
            $table->string('Dia', 20);
        });

        // 5. Tabla Horarios (Depende de asignaturas, grupos, profesores, dias)
        Schema::create('horarios', function (Blueprint $table) {
            $table->id('ID_horario');
            $table->time('Hora_ini'); // TIME NOT NULL
            $table->time('Hora_fin');
            $table->foreignId('ID_asignatura')->constrained('asignaturas', 'ID_asignatura');
            $table->foreignId('ID_grupo')->constrained('grupos', 'ID_grupo');
            $table->foreignId('ID_profe')->constrained('profesores', 'ID_profe');
            $table->foreignId('ID_dia')->constrained('dias', 'ID_dia');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('horarios');
        Schema::dropIfExists('dias');
        Schema::dropIfExists('calificaciones');
        Schema::dropIfExists('profesores');
        Schema::dropIfExists('asignaturas');
    }
};
