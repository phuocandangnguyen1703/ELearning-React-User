import React, {useState} from "react";
import styles from "./styles.module.css";
import Box from "./Box";
import PopularCourse from "~/components/PopularCourse";
import Header from  "~/components/Header"
type Props = {};

const A = (props: Props) => {
  const [isLogin,setIsLogin] = useState<boolean>(true)
  return (
    <div className="w-full flex  flex-col">
      <Header isLogin/>
      <PopularCourse/>
    </div>
  );
};

export default A;
