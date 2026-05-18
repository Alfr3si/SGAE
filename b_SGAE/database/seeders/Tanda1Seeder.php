<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Genero;
use App\Models\Estatus;
use App\Models\Turno;
use App\Models\Aula;
use App\Models\Conducta;
use App\Models\Dia;
use App\Models\Grado;
use App\Models\Letra;
use App\Models\Nivel;
use App\Models\Puesto;
use App\Models\Titulo;

class Tanda1Seeder extends Seeder
{
    public function run(): void
    {
        // 1. Poblamos los Géneros
        Genero::firstOrCreate(['tipo' => 'Masculino']);
        Genero::firstOrCreate(['tipo' => 'Femenino']);

        // 2. Poblamos los Estatus académicos/administrativos comunes
        Estatus::firstOrCreate(['Estatus' => 'Activo']);
        Estatus::firstOrCreate(['Estatus' => 'Baja']);
        Estatus::firstOrCreate(['Estatus' => 'Suspendido']);

        // 3. Poblamos los Turnos de la escuela
        Turno::firstOrCreate(['Turno' => 'Matutino']);
        Turno::firstOrCreate(['Turno' => 'Vespertino']);
        Turno::firstOrCreate(['Turno' => 'Ambos']);

        // 4. Poblamos los Accesos (Roles Administrativos del Plantel)
        Puesto::firstOrCreate([
            'Puesto' => 'SuperAdmin',
            'Descripcion' => 'Soporte Técnico / TI: Acceso total al sistema, base de datos, logs y mantenimiento del servidor.'
        ]);
        Puesto::firstOrCreate([
            'Puesto' => 'Direccion',
            'Descripcion' => 'Director / Subdirector: Consulta de estadísticas institucionales, bitácoras y reportes ejecutivos.'
        ]);
        Puesto::firstOrCreate([
            'Puesto' => 'Control Escolar',
            'Descripcion' => 'Servicios Escolares: Control de inscripciones, expedientes de alumnos, emisión de boletas y certificados.'
        ]);
        Puesto::firstOrCreate([
            'Puesto' => 'Coordinacion Academica',
            'Descripcion' => 'Gestión Docente: Diseño de horarios, asignación de materias a profesores y control de periodos escolares.'
        ]);
        Puesto::firstOrCreate([
            'Puesto' => 'Secretaria',
            'Descripcion' => 'Apoyo Administrativo: Registro de eventos escolares, consulta rápida de horarios y atención a solicitudes.'
        ]);

        // 5. Poblamos las Aulas (Salones físicos base)
        Aula::firstOrCreate(['Salon' => 'A01']);
        Aula::firstOrCreate(['Salon' => 'A02']);
        Aula::firstOrCreate(['Salon' => 'A03']);
        Aula::firstOrCreate(['Salon' => 'A04']);
        Aula::firstOrCreate(['Salon' => 'A05']);
        Aula::firstOrCreate(['Salon' => 'A06']);
        Aula::firstOrCreate(['Salon' => 'A07']);
        Aula::firstOrCreate(['Salon' => 'A08']);
        Aula::firstOrCreate(['Salon' => 'A09']);
        Aula::firstOrCreate(['Salon' => 'A10']);
        Aula::firstOrCreate(['Salon' => 'A11']);
        Aula::firstOrCreate(['Salon' => 'A13']);
        Aula::firstOrCreate(['Salon' => 'A14']);
        Aula::firstOrCreate(['Salon' => 'A15']);
        Aula::firstOrCreate(['Salon' => 'A16']);
        Aula::firstOrCreate(['Salon' => 'Laboratorio de Cómputo']);

        // 6. Poblamos los parámetros de Conducta
        Conducta::firstOrCreate(['Conducta' => 'Excelente']);
        Conducta::firstOrCreate(['Conducta' => 'Buena']);
        Conducta::firstOrCreate(['Conducta' => 'Regular']);
        Conducta::firstOrCreate(['Conducta' => 'Mala']);

        // 7. Poblamos los Días de la semana para los horarios escolares
        Dia::firstOrCreate(['Dia' => 'Lunes']);
        Dia::firstOrCreate(['Dia' => 'Martes']);
        Dia::firstOrCreate(['Dia' => 'Miércoles']);
        Dia::firstOrCreate(['Dia' => 'Jueves']);
        Dia::firstOrCreate(['Dia' => 'Viernes']);

        // 8. Poblamos los Grados (Estructura estándar de 3 niveles)
        Grado::firstOrCreate(['Grado' => '1ro']);
        Grado::firstOrCreate(['Grado' => '2do']);
        Grado::firstOrCreate(['Grado' => '3ro']);
        Grado::firstOrCreate(['Grado' => '3ro']);
        Grado::firstOrCreate(['Grado' => '4to']);
        Grado::firstOrCreate(['Grado' => '5to']);
        Grado::firstOrCreate(['Grado' => '6to']);
        Grado::firstOrCreate(['Grado' => '7mo']);
        Grado::firstOrCreate(['Grado' => '8vo']);
        Grado::firstOrCreate(['Grado' => '9no']);

        // 9. Poblamos las Letras para las secciones de los grupos
        Letra::firstOrCreate(['Letra' => 'A']);
        Letra::firstOrCreate(['Letra' => 'B']);
        Letra::firstOrCreate(['Letra' => 'C']);
        Letra::firstOrCreate(['Letra' => 'D']);
        Letra::firstOrCreate(['Letra' => 'E']);
        Letra::firstOrCreate(['Letra' => 'F']);
        Letra::firstOrCreate(['Letra' => 'G']);

        // 10. Poblamos los Niveles Educativos (Recuerda que en tu migración se llama 'Grupo')
        Nivel::firstOrCreate(['Nivel' => 'Primaria']);
        Nivel::firstOrCreate(['Nivel' => 'Secundaria']);
        Nivel::firstOrCreate(['Nivel' => 'Preparatoria']);

        // 11. Poblamos los Títulos Académicos para el perfil de los Profesores
        Titulo::firstOrCreate(['Nombre' => 'Licenciatura']);
        Titulo::firstOrCreate(['Nombre' => 'Ingeniería']);
        Titulo::firstOrCreate(['Nombre' => 'Maestría']);
        Titulo::firstOrCreate(['Nombre' => 'Doctorado']);
    }
}
