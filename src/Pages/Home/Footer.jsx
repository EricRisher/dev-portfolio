import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-scroll";


const Footer = () => {
  //take user to /contact page
  const routeToContactPage = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setTimeout(() => {
      window.location.href = "/contact";
    }, 500);
  
  };

  return (
    <footer className="footer-container">
      <img
        src="/assets/footer-1.svg"
        alt="footer background"
        className="footer-bg-svg"
      />

      <div className="footer-content">
          <h2 className="footer-title">Let's Work Together</h2>
          <button className="footer-btn" onClick={routeToContactPage}>Contact Me</button>

          <nav className="footer-nav">
            <Link to="heroSection" smooth duration={500}>
              Home
            </Link>
            <Link to="MyPortfolio" smooth duration={500}>
              My Portfolio
            </Link>
            <Link to="mySkills" smooth duration={500}>
              My Skills
            </Link>
            <a href="./swe-ericrisher.pdf" download="EricRisherResume.pdf">
              View Resume
            </a>
            <a
              href="https://linkedin.com/in/eric-risher"
              target="_blank"
              rel="noopener noreferrer"
              className="linkedin-link"
            >
              <FaLinkedin className="linkedin-icon" />
            </a>
          </nav>

        <div className="footer-bottom">
          <p className="footer-text">
            © {new Date().getFullYear()} Eric Risher. All rights reserved.
          </p>
        </div>

        <img
          src="/assets/cat.webp"
          alt="footer cat"
          className="footer-cat-gif"
        />
      </div>
    </footer>
  );
};

export default Footer;
