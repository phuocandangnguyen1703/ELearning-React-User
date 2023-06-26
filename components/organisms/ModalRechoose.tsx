import clsx from "clsx";
import React, { useState } from "react";
import ModalChoosen from "./ModalChoosen";

type Props = {};

const ModalRechoose = (props: Props) => {
  const [prediction, setPrediction] = useState<
    {
      maintype: string;
      maintype_id: string;
      percent: number;
    }[]
  >([]);
  const handleChoose = () => {};
  return (
    <div className="bg-[#50505072] fixed top-0 bottom-0 z-50 h-screen w-screen flex items-center justify-center">
      <div className={clsx("w-2/3 h-4/5 bg-white flex rounded-2xl", {})}>
        <ModalChoosen
          prediction={prediction!}
          handleChoose={handleChoose}
        ></ModalChoosen>
      </div>
    </div>
  );
};

export default ModalRechoose;
