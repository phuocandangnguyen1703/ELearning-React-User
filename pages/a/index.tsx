import React from "react";
import styles from "./styles.module.css";
import Box from "./Box";
import PopularCourse from "~/components/PopularCourse";
type Props = {};

const A = (props: Props) => {
  return (
    <div className="w-full flex justify-center">
      <PopularCourse/>
    </div>
  );
};

export default A;
