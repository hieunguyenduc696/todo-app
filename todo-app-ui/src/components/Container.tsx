import { ReactNode } from "react";

const Container: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <div className="">{children}</div>;
};

export default Container;
