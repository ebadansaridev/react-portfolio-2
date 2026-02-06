import { Link } from "react-router-dom"


const Footer  = () => {
  return <>

    <footer id="footer" className="footer">

    <div className="container">
      <div className="copyright text-center ">
        <p>© <span>Copyright</span> <strong className="px-1 sitename">FolioOne</strong> <span>All Rights Reserved<br/></span></p>
      </div>
      <div className="social-Links d-flex justify-content-center">
        <Link to=""><i className="bi bi-twitter-x"></i></Link>
        <Link to=""><i className="bi bi-facebook"></i></Link>
        <Link to=""><i className="bi bi-instagram"></i></Link>
        <Link to=""><i className="bi bi-Linkedin"></i></Link>
      </div>
      <div className="credits">
        Designed by <Link to="https://bootstrapmade.com/">BootstrapMade</Link> | <Link to="https://bootstrapmade.com/tools/">DevTools</Link>
      </div>
    </div>

  </footer>
  </>
}

export default Footer;