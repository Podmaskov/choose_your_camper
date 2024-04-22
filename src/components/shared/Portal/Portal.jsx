import { useState, useEffect } from "react";
import ReactDom from "react-dom";

export const Portal = ({ children }) => {
  const [container] = useState(() => document.createElement("div"));

  useEffect(() => {
    document.body.appendChild(container);

    return () => {
      document.body.removeChild(container);
    };
  }, [container]);

  return ReactDom.createPortal(children, container);
};
