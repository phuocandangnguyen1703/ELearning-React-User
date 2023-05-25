import EventEmitter from "events";
import { debounce } from "lodash";
import React, { useEffect, useRef, useState } from "react";
import { DotLoader } from "react-spinners";

export const loadingEvent = new EventEmitter();
const Loading = () => {
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
    <div className="fixed inset-0 flex justify-center items-center z-20">
      <DotLoader color="#36d7b7" />
    </div>
  );
};

export default Loading;
