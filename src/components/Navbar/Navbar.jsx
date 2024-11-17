import "./Navbar.css"

const Navbar = () => {
  return (
    <div className="nav">
      <nav>
        <h1>Project<span className="cars">Cars</span></h1>
        <ul>
            <li>Cars</li>
            <li>About</li>
            <button>Contact Us</button>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
