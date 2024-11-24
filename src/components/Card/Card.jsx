import "./Card.css";

const Card = () => {
  return (
    <div className="card">
      <div className="menu">
        <button>Cars</button>
        <button>Mods</button>
        <button>Accessories</button>
      </div>
      <div className="display">
        <p>Here we will Display selected items.</p>
      </div>
    </div>
  );
};

export default Card;
