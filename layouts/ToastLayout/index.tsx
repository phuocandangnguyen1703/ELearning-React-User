import React, { useEffect } from "react";
import { ToastContainer } from "@iscv/toast";
import { LoadingContainer } from "@/components/atoms";

type Props = {};

function ToastLayout({}: Props) {
  return (
    <div>
      <ToastContainer></ToastContainer>
      <LoadingContainer></LoadingContainer>
      {/* {children} */}
    </div>
  );
}

export default ToastLayout;
