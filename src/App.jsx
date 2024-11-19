import "./App.css";
import Glass from "./components/Glass/Glass";

import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <div className="main">
        <main>
          <Navbar />
          <Glass/>
        </main>
      </div>
    </>
  );
}

export default App;
