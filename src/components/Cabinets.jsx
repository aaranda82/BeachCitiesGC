import React from "react";
import PropTypes from "prop-types";

const Cabinets = ({ changeView }) => {
  return <div onClick={() => changeView("HOME")}>Cabinets</div>;
};

Cabinets.propTypes = {
  changeView: PropTypes.func,
};

export default Cabinets;
