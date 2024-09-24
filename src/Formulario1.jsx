import React from "react";
import { useNavigate } from "react-router-dom";

function Formulario1() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Redirigir a Formulario2
    navigate("/formulario2");
  };
  
  return (
    <div>
      <h1>Formulario 1</h1>
      <form onSubmit={handleSubmit}>
        <button type="submit">Enviar y navegar a Formulario 2</button>
      </form>
    </div>
  );
}

export default Formulario1;
