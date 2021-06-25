import "./Boton.css";

export default function Boton({ name, date, image, cambiar }) {
  const name2 = name.toUpperCase();

  let formattedDate = new Date(date).toLocaleDateString("en", {
    // weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <button className="boton" onClick={cambiar}>
      <p className="espaciador">aaaa</p>
      <div className="circulo">
        <img src={image} alt={name + " image"} />
      </div>
      <p className="espaciador">aaaaaaaaaa</p>
      <div>
        <h3>{name2}</h3>
        <h4>{formattedDate}</h4>
      </div>
    </button>
  );
}
