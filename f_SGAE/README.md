# SGAE (Sistema Gestor Academico escolar)

SGAE nace como una solución tecnológica diseñada para transformar de forma integral la operatividad de la Escuela Secundaria Estatal “Lic. Adelor D. Sala” evolucionando de una solución local hacia un modelo estandarizado de gestión digital para instituciones de educación secundaria.

El SGAE ha sido estructurado para atacar directamente las deficiencias administrativas mediante la automatización de tareas críticas. Su arquitectura permite gestionar de manera digital todo el ciclo escolar, comenzando por un módulo de inscripciones inteligentes que agiliza el registro de los alumnos, seguido por un sistema de captura de calificaciones diseñado para que los docentes alimenten la base de datos en tiempo real. Esto elimina la duplicidad de tareas y reduce drásticamente el margen de error humano que suele presentarse en los registros físicos.
Más allá de la simple digitalización, el software prioriza la integridad y seguridad de la información. A través de un sistema de control de acceso basado en roles, el SGAE garantiza que cada usuario ya sea administrativo, docente o directivo interactúe únicamente con la información que le compete, protegiendo así los datos sensibles de la institución. Mediante un enfoque metodológico mixto y la aplicación de instrumentos de evaluación dirigidos a la comunidad educativa, se confirma no solo la viabilidad técnica del sistema, sino también su alto potencial para optimizar la gestión institucional, mejorar la calidad de la información y elevar el nivel de satisfacción de sus usuarios.

```bash
src/
├── api/                # Capa de Datos (Configuración Global)
│   └── axiosConfig.ts  # Instancia de Axios, interceptores de tokens
│
├── components/         # Capa de Presentación (Global)
│   ├── ui/             # Componentes base (Botón, Input, Modal)
│   └── layout/         # Estructura visual (Navbar, Sidebar, Footer)
│
├── features/           # EL CORAZÓN: Capas divididas por funcionalidad
│   ├── auth/           # Módulo de Login / Seguridad
│   ├── alumnos/        # Módulo de Gestión de Alumnos
│   │   ├── components/ # UI específica de alumnos (TablaAlumnos, CardAlumno)
│   │   ├── hooks/      # Lógica y Estado (useAlumnos.ts)
│   │   ├── services/   # Peticiones API (alumnoService.ts)
│   │   └── types/      # Modelos de datos (alumno.types.ts)
│   └── calificaciones/ # Módulo de Calificaciones
│
├── pages/              # Capa de Presentación (Vistas Finales)
│   ├── Dashboard.tsx   # Ensamblado de varios componentes/features
│   └── Login.tsx
│
├── routes/             # Configuración de navegación
│   └── AppRouter.tsx
│
├── utils/              # Funciones de ayuda (formateo de fechas, validaciones)
└── App.tsx             # Orquestador principal
```
