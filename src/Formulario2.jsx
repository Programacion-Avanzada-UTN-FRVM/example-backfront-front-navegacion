import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Formulario2() {
  const [parametro, setParametro] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Redirigir a FormularioConParametro con el valor del parámetro
    navigate(`/formularioConParametro/${parametro}`);
  };

  return (
    <div>
      <h1>Formulario 2</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ingresa un parámetro"
          value={parametro}
          onChange={(e) => setParametro(e.target.value)}
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Formulario2;
