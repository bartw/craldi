import React from "react";
import styled, { StyledProps } from "./styled";
import Title from "shared/Title";

const Footer = ({ className }: StyledProps) => (
  <footer className={className}>
    <p>keeping it tasteful since 1984</p>
  </footer>
);

const Styled = styled(Footer)`
  padding: 10px 0;
  text-align: center;
  font-size: 0.75em;
`;

export default Styled;
