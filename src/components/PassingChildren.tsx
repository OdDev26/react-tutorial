import { ReactNode } from "react";

interface Props {
  // children is a simple string
  //   children: string;

  // when children is an html
  children: ReactNode;
}

const PassingChildren = ({ children }: Props) => {
  return <div className="alert alert-primary">{children}</div>;
};

export default PassingChildren;
