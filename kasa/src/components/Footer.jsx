import "../styles/Footer.css";
import logoWhite from "../assets/logo-kasa-white.svg";

function Footer() {
  return (
    <div className="footer">
      <img src={logoWhite} alt="logo de kasa" className="footer__title" />
      <p className="footer__copyright">© 2020 Kasa. All rights reserved</p>
    </div>
  );
}

export default Footer;
