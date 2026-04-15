import { AppRouter } from "./routes/AppRouter";

function App() {
  return (
    <>
      {/* TODO: poner proveedores de contexto globales (Auth, Temas)*/}
      <AppRouter />
    </>
  );
}

export default App;
