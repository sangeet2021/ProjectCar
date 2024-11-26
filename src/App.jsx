import "./App.css";
import Card from "./components/Card/Card";
import Glass from "./components/Glass/Glass";

import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <div className="main">
        <Navbar className="main2" />
        <main>
          <Glass />
        </main>
      </div>
      <div className="section">
        <section>
          <Card />
        </section>
      </div>
    </>
  );
}

export default App;
