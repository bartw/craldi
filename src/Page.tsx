import React, { ReactNode } from "react";
import styled, {StyledProps} from "./styled";

interface Props extends StyledProps {
  children: ReactNode;
}

const Page = ({ className, children }: Props) => (
  <div className={className}>{children}</div>
);

const Styled = styled(Page)`
  width: 100%;
  font-family: sans-serif;
  font-size: 16px;
`;

export default Styled;
