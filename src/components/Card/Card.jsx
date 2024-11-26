import "./Card.css";
import { CARS } from "../../data/data";
import { useState } from "react";

const Card = () => {
  const list = Object.values(CARS); // Define list before useState
  const [selected, setSelected] = useState(); // Initialize with the first car object

  const handleClick = (selectedCar) => {
    setSelected(selectedCar); // Set the entire car object as selected
  };

  return (
    <div className="card">
      <h1 className="ch1">
        Our <span>Work</span>
      </h1>
      <div className="menu">
        {/* Map through the list and render buttons */}
        {list.map((car) => (
          <button
            key={car.engine}
            onClick={() => handleClick(car)} // Pass the entire car object
            className={selected === car ? "active" : undefined} // Compare selected with the current car
          >
            {car.title}
          </button>
        ))}
      </div>
      <div className="info">
        {!selected && <p>Please select a topic</p>}

        {/* Display selected car details */}
        {selected && (
          <div className="fc">
            <img src={selected.imageUrl} alt="" />
            <div className="infox">
              <h1>{selected.title}</h1> {/* Access selected.title */}
              <p className="descr">"{selected.description}"</p>
              <div className="specs">
              <p>
                <b>Body:</b> {selected.body}
              </p>
              <p>
                <b>Engine:</b> {selected.engine}
              </p>
              <p>
                <b>Gearbox:</b> {selected.gearbox}
              </p>
              <p>
                <b>Exhaust:</b> {selected.exhaust}
              </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
