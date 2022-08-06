import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
const FieldStyles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 10px;
  margin-bottom: 25px;
`;
const Field = ({ children }) => {
  return <FieldStyles>{children}</FieldStyles>;
};
Field.prototype = {
  children: PropTypes.any,
};
export default Field;
