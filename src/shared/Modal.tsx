import React, { ReactNode } from "react";
import Button from "../shared/Button";

interface Props {
  onClose: () => void;
  children: ReactNode;
}

const Modal = ({ onClose, children }: Props) => (
  <div>
    <Button onClick={onClose}>Close</Button>
    <div>{children}</div>
  </div>
);

export default Modal;
