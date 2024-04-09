import "./Card.scss";

function Card({cover, title}) {
  return (
    <article className="card">
        <img src={cover} alt="Photos de logements" />
        <span>{title}</span>
    </article>
  );
}

export default Card;