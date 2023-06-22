import React, { useEffect } from "react";
import { ToastContainer } from "@iscv/toast";
import { LoadingContainer } from "@/components/Loading";

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
      <LoadingContainer></LoadingContainer>
      {children}
    </div>
  );
}

export default ToastLayout;
