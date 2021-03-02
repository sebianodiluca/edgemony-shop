import PropTypes from "prop-types";

import "./Hero.css";

function Hero({ logo, name }) {
  return (
    <div className="Hero">
    </div>
  );
}

Hero.propTypes = {
  logo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Hero;