import React, { ReactNode } from "react";

interface Props {
  onClose: () => void;
  children: ReactNode;
}

const Modal = ({ onClose, children }: Props) => (
  <div>
    <button onClick={onClose}>Close</button>
    <div>{children}</div>
  </div>
);

export default Modal;
