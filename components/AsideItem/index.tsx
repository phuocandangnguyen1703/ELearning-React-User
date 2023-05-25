import clsx from "clsx";
import React, { useState } from "react";

type Props = {
  icon: string;
  title: string;
  children?: React.ReactNode;
  className?: string;
  contentClassName?: string;
};

const AsideItem = (props: Props) => {
  const [expand, setExpand] = useState(false);
  return (
    <div
      className={clsx(
        "px-3 py-5 border-t-gray-200 border-t-[1.5px] text-gray-600 first:border-t-0",
        props.className
      )}
    >
      <div className="flex items-center justify-between">
        <div className="shrink-[15px]">
          <i
            className={clsx("fa-regular text-xl", {
              [`fa-${props.icon}`]: true,
            })}
          ></i>
        </div>
        <span className="text-md font-medium flex-1 ml-3">{props.title}</span>
        <i
          onClick={(e) => setExpand(!expand)}
          className={clsx(
            "fa-regular cursor-pointer",
            { ["fa-plus"]: !expand },
            { ["fa-minus"]: expand }
          )}
        ></i>
      </div>
      <div
        className={clsx(
          { ["hidden"]: !expand },
          props.contentClassName,
          "w-full mt-4"
        )}
      >
        {props.children}
      </div>
    </div>
  );
};

export default AsideItem;
