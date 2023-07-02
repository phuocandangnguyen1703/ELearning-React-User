import { RootState } from "@/redux/store";
import React from "react";
import { useSelector } from "react-redux";

type Props = {
  children: React.ReactNode;
};

const Permission = (props: Props) => {
  const { children } = props;
  const token = useSelector((state: RootState) => state.user.token);
  if (!children) return <div className="w-full h-full bg-white"></div>;
  return <>{children}</>;
};

export default Permission;
