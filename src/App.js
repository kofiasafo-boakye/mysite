import { useState} from "react"
// import { Link } from "react-router-dom"
import pic from "./assets/dev-ed-wave.png"
import github from "./assets/github.png"
import linkedin from "./assets/linkedin.png"

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
            {/* <li><a href="#achievements">Achievements</a></li> */}
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
          <img src={pic} alt="Kofi's Picture" />
        </div>

        <div className="section__text">
          <p className="section__text__p1">Hello I'm</p>
          <h1 className="title logo">Kofi Asafo-Boakye</h1>
          <p className="section__text__p2">A Problem Solver</p>

          <div className="btn-container">
            <button className="btn btn-color-2"> Download CV</button>
            {/* <button className="btn btn-color-1"> Contact me</button> */}
            {/* <Link to="/#contact">Contact me</Link> */}
          </div>

          <div id="socials-container">
            <img src={github} alt="" className="icon"/>
            <img src={linkedin} alt="" className="icon" />
          </div>
        </div>
      </section>

      <section id="about">
        <h1 class="title">About Me</h1>
        <br />
        <div class="text-container">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis
              reprehenderit et laborum, rem, dolore eum quod voluptate
              exercitationem nobis, nihil esse debitis maxime facere minus sint
              delectus velit in eos quo officiis explicabo deleniti dignissimos.
              Eligendi illum libero dolorum cum laboriosam corrupti quidem,
              reiciendis ea magnam? Nulla, impedit fuga!
              Follow this link to view my achievements and certificates. [link]
            </p>
        </div>
      </section>

      <section id="projects">
        <h1 class="title">Projects</h1>
      </section>

      {/* <section id="achievements">
        <h1 class="title">Achievements</h1>
      </section> */}

      <section id="contact">
        <h1 class="title">Contact Me</h1>
      </section>

      <footer>
        <nav>
          <div class="nav-links-container">
            <ul class="nav-links">
              <li><a href="#about">About</a></li>
              <li><a href="#projects">Projects</a></li>
              {/* <li><a href="#achievements">Achievements</a></li> */}
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </nav>
        <p>Copyright &#169; 2023 Kofi Asafo-Boakye. All Rights Reserved.</p>
      </footer>
    </>
  );
}

export default App;
