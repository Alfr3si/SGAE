import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Dashboard } from '../pages/Dashboard';
import { Home } from '../pages/Home';
import { StudentLog } from '../features/auth/StudentLog';
import { TeacherLog } from '../features/auth/TeacherLog';
import { AdminLog } from '../features/auth/AdminLog';
import { StudentsPag } from '../pages/StudentsPag';


//TODO: Luego crearemos la página de Login
const LoginPlaceholder = () => <div>Pantalla de Login</div>;

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* Rutas de los paneles de login*/}
        <Route path='/login/studentlog' element={<StudentLog />} />
        <Route path='/login/teacherlog' element={<TeacherLog />} />
        <Route path='/login/adminlog' element={<AdminLog />} />
        {/* Paginas de los usuarios*/}
        <Route path='students' element={<StudentsPag />} />

        {/* Redirección: Si no está logueado o la ruta no existe, va a login */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
};
