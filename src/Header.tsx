import React from "react";
import styled, { StyledProps } from "./styled";
import Title from "./shared/Title";

const Header = ({ className }: StyledProps) => (
  <header className={className}>
    <Title>Craldi</Title>
  </header>
);

const Styled = styled(Header)`
  width: 100%;
  margin-bottom: 20px;
`;

export default Styled;
