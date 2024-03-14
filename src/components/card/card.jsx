import "./card.css";
export default function Card({ props }) {
  const { image, name, popular, price, rating, votes } = props;
  return (
    <div className="item">
      <img src={image} alt="Coffee" />
      {popular && <p className="popular">Popular</p>}
      <div className="coffeeInfo">
        <p className="name">{name}</p>
        <p className="price">{price}</p>
      </div>
      <p className="rating">
        <img src="../../../../public/Star_fill.svg" alt="" />
        <span style={{ color: "#FEF7EE" }}>{rating}</span>{" "}
        <span>{"(" + votes + " votes)"}</span>
      </p>
    </div>
  );
}
