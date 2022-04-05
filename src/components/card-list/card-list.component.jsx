import "./card-list.style.css";
import Card from "../card/card.component";

const CardList = ({ jsonData }) => {
  const data = jsonData;
  return (
    <div className="card-list">
      {data.map((item) => {
        return <Card dataItem={item} />;
      })}
    </div>
  );
};

export default CardList;
