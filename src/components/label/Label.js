import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
const LabelStyles = styled.label`
  color: ${(props) => props.theme.gray4b};
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;
`;

const Label = ({ htmlFor = "", children, ...props }) => {
  return (
    <LabelStyles htmlFor={htmlFor} {...props}>
      {children}
    </LabelStyles>
  );
};
Label.prototype = {
  htmlFor: PropTypes.string,
  children: PropTypes.any,
};
export default Label;
