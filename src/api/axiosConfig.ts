import axios from 'axios';

const api = axios.create({
  // Cuando tengas tu backend (Node, PHP, etc.), pondrás esa URL aquí
  baseURL: 'https://api.ejemplo.com/v1', 
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor opcional: Por si en el futuro manejas tokens de sesión (JWT)
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
