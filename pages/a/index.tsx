import React from "react";
import styles from "./styles.module.css";
import Box from "./Box";

type Props = {};

const A = (props: Props) => {
  return (
    <div className={styles.red}>
      A<Box></Box>
      
    </div>
  );
};

export default A;
