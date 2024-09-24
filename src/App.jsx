import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Formulario1 from "./Formulario1";
import Formulario2 from "./Formulario2";
import FormularioConParametro from "./FormularioConParametro";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Formulario1 />} />
          <Route path="/formulario2" element={<Formulario2 />} />
          <Route
            path="/formularioConParametro/:parametro"
            element={<FormularioConParametro />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
