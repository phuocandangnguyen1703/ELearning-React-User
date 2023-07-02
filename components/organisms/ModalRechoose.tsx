import clsx from "clsx";
import React, { useCallback, useEffect, useState } from "react";
import ModalChoosen from "./ModalChoosen";
import { useLoading } from "../atoms";
import { chooseMaintype, processRecommend } from "@/apis/recommend";
import { useToast } from "@iscv/toast";
import Router, { useRouter } from "next/router";
import _ from "lodash";

type Props = {
  setOpen: (e: boolean) => void;
  handleReload: () => void;
};

const ModalRechoose = (props: Props) => {
  const { setOpen, handleReload } = props;
  const [prediction, setPrediction] = useState<
    {
      maintype: string;
      maintype_id: string;
      percent: number;
    }[]
  >([]);

  const loading = useLoading();
  const toast = useToast();
  const router = useRouter();
  useEffect(() => {
    (async () => {
      loading.open();

      await processRecommend()
        .then((success) => {
          const data = success.data;
          setPrediction(data);
        })
        .catch((error) => console.log(error));

      loading.close();
    })();
  }, []);
  const handleChoose = useCallback(
    _.throttle(async (choosen: string) => {
      loading.open();
      await chooseMaintype(choosen)
        .then((success) => {
          toast.success();
          handleReload();
          setOpen(false);
        })
        .catch((error) => {
          console.log(error);
          toast.error;
        });
      loading.close();
    }, 1500),
    []
  );
  return (
    <div className="bg-[#50505072] fixed top-0 bottom-0 z-50 h-screen w-screen flex items-center justify-center rounded-2xl overflow-hidden">
      <div
        className={clsx(
          "w-2/3 max-h-4/5 bg-white flex rounded-2xl overflow-y-auto",
          {}
        )}
      >
        <ModalChoosen
          prediction={prediction!}
          handleChoose={handleChoose}
          setOpen={setOpen}
        ></ModalChoosen>
      </div>
    </div>
  );
};

export default ModalRechoose;
