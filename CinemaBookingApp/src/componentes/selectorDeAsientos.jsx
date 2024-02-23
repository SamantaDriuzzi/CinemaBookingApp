import { useState } from "react";
import "../css/selectorDeAsientos.css";

const SelectorDeAsietos = () => {
  const [cantidadAsientos, setCantidadAsientos] = useState("");

  const handleSeleccion = (event) => {
    setCantidadAsientos(event.target.value);
  };

  return (
    <div>
      <select
        value={cantidadAsientos}
        onChange={handleSeleccion}
        className="selector"
      >
        <option value="" hidden>
          Select seat(s)
        </option>
        {[...Array(10).keys()].map((num) => (
          <option key={num + 1} value={num + 1}>
            {num + 1} seat(s)
          </option>
        ))}
      </select>
    </div>
  );
};
export default SelectorDeAsietos;
