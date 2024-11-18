import { useState } from "react";
import cars1 from "../../../public/pic.jpeg";
import cars2 from "../../../public/pic2.jpeg";
import cars3 from "../../../public/pic3.jpeg";
import "./Carousel.css";
import { ChevronLeft, ChevronRight } from "react-feather";

const slides = [cars1, cars2, cars3];

const [curr, setCUrr] = useState(0);

const prev = () => {
  setCUrr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
};

const next = () => {
  setCUrr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));
};

const Carousel = () => {
  return (
    <div className="img">
      <div className="imgg">
        {slides.map((sl) => (
          <img src={sl} />
        ))}
      </div>
      <div className="btns">
        <button onClick={prev}>
          <ChevronLeft size={40} />
        </button>
        <button onClick={next}>
          <ChevronRight size={40} />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
