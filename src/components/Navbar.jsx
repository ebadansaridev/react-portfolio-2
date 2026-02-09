import { Link } from "react-router-dom";

const Navbar = () => {
    return (

        <>
    <header id="header" className="header d-flex align-items-center light-background sticky-top">
    <div className="container position-relative d-flex align-items-center justify-content-between">

      <nav id="navmenu" className="navmenu">
        <ul>
          <li><Link to="/" className="active">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/resume">Resume</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/portfolio">Portfolio</Link></li> 
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
      </nav>

      <div className="header-social-Links">
        <Link to="/" className="twitter"><i className="bi bi-twitter-x"></i></Link>
        <Link to="/" className="facebook"><i className="bi bi-facebook"></i></Link>
        <Link to="/" className="instagram"><i className="bi bi-instagram"></i></Link>
      </div>
    </div>
  </header>
    </>
    )
}

export default Navbar;