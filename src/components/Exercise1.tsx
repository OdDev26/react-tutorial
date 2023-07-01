import React, { ReactNode, useState } from "react";
interface Props {
  children: string;
  onClick: () => void;
  color?: "primary" | "danger";
}
const Exercise1 = ({ children, color = "primary", onClick }: Props) => {
  return (
    <>
      <button onClick={onClick} type="button" className={"btn btn-" + color}>
        {children}
      </button>
    </>
  );
};

export default Exercise1;
