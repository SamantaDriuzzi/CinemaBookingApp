import "../css/indicadoresDeColor.css";

const indicadoresDeColor = () => {
  const indicadores = [
    { color: "#00C7BB", label: "Available" },
    { color: "#FF4141", label: "Reserved" },
    { color: "#FFFFFF", label: "Selected" },
  ];

  return (
    <div className="contenedorIndicadores">
      {indicadores.map((indicador) => (
        <div className="indicador" key={indicador.label}>
          <svg height="20" width="20">
            <circle cx="10" cy="10" r="10" fill={indicador.color} />
          </svg>
          <h3>{indicador.label}</h3>
        </div>
      ))}
    </div>
  );
};
export default indicadoresDeColor;
