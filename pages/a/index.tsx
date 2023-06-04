import React, {useState} from "react";
import styles from "./styles.module.css";
import Box from "./Box";
import PopularCourse from "~/components/PopularCourse";
import Header from  "~/components/Header"
import Introduce from "~/components/Introduce";
type Props = {};

const A = (props: Props) => {
  const [isLogin,setIsLogin] = useState<boolean>(false)
  return (
    <div className="w-full flex  flex-col">
      <Header isLogin={isLogin}/>
      <Introduce/>
      <PopularCourse/>
    </div>
  );
};

export default A;
