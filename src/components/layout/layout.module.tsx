import React from "react";

interface ILayout {
  children?: React.ReactNode;
}

export default function Layout({ children }: ILayout) {
  return (
    <div className="bg-white w-full h-full flex flex-col justify-center items-center m-0 p-0">
      {children}
    </div>
  );
}
