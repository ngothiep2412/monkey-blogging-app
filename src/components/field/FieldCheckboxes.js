import React from "react";
import PropTypes from "prop-types";
const FieldCheckboxes = ({ children }) => {
  return <div className="flex flex-wrap gap-5">{children}</div>;
};
FieldCheckboxes.prototype = {
  children: PropTypes.any,
};
export default FieldCheckboxes;
