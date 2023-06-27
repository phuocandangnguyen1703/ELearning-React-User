import clsx from "clsx";
import React, { useEffect, useState } from "react";
import ModalChoosen from "./ModalChoosen";
import { useLoading } from "../atoms";
import { chooseMaintype, processRecommend } from "@/apis/recommend";
import { useToast } from "@iscv/toast";
import { useRouter } from "next/router";

type Props = {};

const ModalRechoose = (props: Props) => {
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
  const handleChoose = async (choosen: string) => {
    loading.open();
    await chooseMaintype(choosen)
      .then((success) => {
        toast.success();
        router.push("/roadmap");
      })
      .catch((error) => {
        console.log(error);
        toast.error;
      });
    loading.close();
  };
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
