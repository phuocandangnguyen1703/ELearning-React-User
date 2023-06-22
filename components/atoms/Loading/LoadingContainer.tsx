import React, { memo, useEffect, useRef, useState } from "react";
import { RingLoader } from "react-spinners";
import styles from "./styles.module.scss";
import events from "events";
import { debounce } from "lodash";

export const loadingEvent = new events.EventEmitter();

function Loading() {
  const [isLoading, setIsLoading] = useState(false);
  const stack = useRef(0);
  useEffect(() => {
    loadingEvent.on("set", (args) => {
      if (args) {
        if (stack.current === 0) {
          setIsLoading(true);
          // setIsLoading(args)
          debounce(() => {
            setIsLoading(false);
            stack.current = 0;
          }, 7000);
        }
        stack.current++;
      } else {
        if (stack.current === 1) setIsLoading(false);
        stack.current--;
      }
    });
  }, []);

  if (!isLoading) return <></>;
  return (
    <div className={styles.container}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}
export default memo(Loading);
