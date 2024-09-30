import { Card } from "../type/Card";

function CardComp(children: Card) {
  return (
    <div className="card">
      <img src={children.img}  />
    </div>
  );
}

export default CardComp;
