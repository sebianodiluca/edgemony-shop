import PropTypes from "prop-types";

import "./CardList.css";

function CardList({ logo, name }) {
  return (
    <section className="CardList">
      <img src={logo} alt={name} /> 
      <h2>{name}</h2>
    </section>
  );
}

CardList.propTypes = {
  logo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default CardList;