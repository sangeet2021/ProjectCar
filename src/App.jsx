import "./App.css";
import Carousel from "./components/Carousel/Carousel";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <div className="main">
        <main>
          <Navbar />
          <Carousel />
        </main>
      </div>
    </>
  );
}

export default App;
