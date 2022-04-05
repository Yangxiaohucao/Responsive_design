import "./card.style.css";
import contentImage from "../../assets/contentImages.png";
const Card = ({ dataItem }) => {
  const { title, content } = dataItem;
  return (
    <div className="card-container" key={title}>
      <img src={contentImage} />
      <p>{content}</p>
      <button className="customButton">Read More</button>
    </div>
  );
};

export default Card;
