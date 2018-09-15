import React, { ReactNode } from "react";
import styled, { StyledProps } from "./styled";

interface Props extends StyledProps {
  children: ReactNode;
}

const Main = ({ className, children }: Props) => (
  <main className={className}>{children}</main>
);

const Styled = styled(Main)`
  flex-grow: 1;
`;

export default Styled;
