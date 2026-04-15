import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Dashboard } from '../pages/Dashboard';
import { Home } from '../pages/Home';

// Nota: Luego crearemos la página de Login
const LoginPlaceholder = () => <div>Pantalla de Login</div>;

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPlaceholder />} />
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Redirección: Si no está logueado o la ruta no existe, va a login */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
};
