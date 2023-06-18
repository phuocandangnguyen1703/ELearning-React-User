import React, { useEffect } from "react";
import { ToastContainer } from "@iscv/toast";

type Props = {
  children: React.ReactNode;
};

function ToastLayout({ children }: Props) {
  useEffect(() => {
    console.log("first");
  }, []);
  return (
    <div>
      <ToastContainer></ToastContainer>
      {children}
    </div>
  );
}

export default ToastLayout;
