import "./Glass.css";
import car from "../../../public/car.jpg";

const Glass = () => {
  return (
    <div className="glass">
      <h1>
        Project<span>Cars</span>
      </h1>
      <div className="desc">
        <div className="des">
          <p>
            Project<span>Cars</span> specializes in transforming vehicles into
            personalized masterpieces through expert modifications. From
            performance upgrades to custom aesthetics, the company combines
            cutting-edge technology with skilled craftsmanship to meet every
            client’s vision. With a passion for innovation and attention to
            detail, ProjectCars ensures each car becomes a unique blend of style
            and functionality.
          </p>
        </div>
        <div className="image">
          <img src={car} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Glass;
