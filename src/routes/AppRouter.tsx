import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Dashboard } from '../pages/Dashboard';

// Nota: Luego crearemos la página de Login
const LoginPlaceholder = () => <div>Pantalla de Login</div>;

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPlaceholder />} />
        <Route path="/dashboard" element={<Dashboard />} />
        
        {/* Redirección: Si no está logueado o la ruta no existe, va a login */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
};
