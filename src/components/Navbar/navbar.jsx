import './navbar.scss';
import cv from "../../assets/documents/Jansen_CV.pdf";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className='title-text'>JANSEN <span className='title-highlight'>.DEV</span></h1>
        <ul className="navbar-list">
          <li className='navbar-item'><a href="#profile" className='navbar-link'>About</a></li>
          <li className='navbar-item'><a href="#projects" className='navbar-link'>Projects</a></li>
          <li className='navbar-item'><a href="#experience" className='navbar-link'>Experience</a></li>
          <li className='navbar-item'><a href="#contact" className='navbar-link'>Contact</a></li>
        </ul>
        <a href={cv} download="Jansen_CV.pdf" className="resume-button">
          ⬇ Download CV
        </a>
      </div>
    </nav>

  )
}
