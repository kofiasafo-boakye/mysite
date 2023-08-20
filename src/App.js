import { useState} from "react"
// import { Link } from "react-router-dom"

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  
  const toggleMenu = () => {
    setMenuOpen(prevMenuOpen => !prevMenuOpen)
  }

  return (
    <>
      <nav id="desktop-nav">
        <div className="logo">Kofi Asafo-Boakye</div>
        <div>
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      <nav id="hamburger-nav">
        <div className="logo">Kofi Asafo-Boakye</div>
        <div className="hamburger-menu">
          <div className={`hamburger-icon ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className={`menu-links ${menuOpen ? 'open' : ''}`}>
            <li><a href="#about" onClick={toggleMenu}>About</a></li>
            <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
            <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
          </div>
        </div>
      </nav>

      {/* PROFILE SECTION  */}
      <section id="profile">
        <div className="section__pic-container">
          {/* <img src="" alt="Kofi's Picture" /> */}
        </div>

        <div className="section__text">
          <p className="section__text__p1">Hello I'm</p>
          <h1 className="title logo">Kofi Asafo-Boakye</h1>
          <p className="section__text__p2">Problem Solver</p>

          <div className="btn-container">
            <button className="btn btn-color-2"> Download CV</button>
            {/* <button className="btn btn-color-1"> Contact me</button> */}
            {/* <Link to="/#contact">Contact me</Link> */}
          </div>

          <div id="socials-container">
            
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
