import React, { ReactNode } from "react";
import styled, { StyledProps } from "./styled";

interface Props extends StyledProps {
  children: ReactNode;
}

const Main = ({ className, children }: Props) => (
  <main className={className}>{children}</main>
);

const Styled = styled(Main)`
  width: 100%;
`;

export default Styled;
