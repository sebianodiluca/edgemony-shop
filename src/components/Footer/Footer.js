import PropTypes from "prop-types";

import "./Footer.css";

function Footer({ logo, name }) {
  return (
    <footer className="Footer">
      <img src={logo} alt={name} /> 
      <h2>{name}</h2>
    </footer>
  );
}

Footer.propTypes = {
  logo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Footer;