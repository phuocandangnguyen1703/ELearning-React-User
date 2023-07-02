import React, { useCallback, useEffect, useRef } from "react";
import Image from "next/image";
type Props = {
  prediction: {
    maintype: string;
    maintype_id: string;
    percent: number;
  }[];
  handleChoose: (choosen: string) => void;
  setOpen: (e: boolean) => void;
};
import {
  android,
  backend,
  blockchain,
  devops,
  flutter,
  frontend,
} from "@/assets/home";
import _ from "lodash";

const ModalChoosen = (props: Props) => {
  const { prediction, handleChoose, setOpen } = props;
  const modalRef = useRef(null);
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event: any) {
      if (
        modalRef.current &&
        !(modalRef.current as any).contains(event.target)
      ) {
        setOpen(false);
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modalRef]);
  const selectMaintype = useCallback((maintype: string) => {
    switch (maintype) {
      case "FrontEnd":
        return frontend.src;
      case "BackEnd":
        return backend.src;
      case "DevOps":
        return devops.src;
      case "Android":
        return android.src;
      case "Flutter":
        return flutter.src;
      case "BlockChain":
        return blockchain.src;
      default:
        return blockchain.src;
    }
  }, []);
  return (
    <div
      className="flex flex-col items-center gap-8 flex-1 p-[29px] w-full overflow-auto"
      ref={modalRef}
    >
      <h2 className="font-bold text-2xl text-center">Lộ trình đê xuất</h2>
      <div className="flex flex-col items-stretch gap-7">
        <p>Chọn 1 lộ trình dưới đây để bắt đầu hành trình của bạn</p>
        {prediction
          ?.filter((x) => Boolean(x.percent))
          .map((item) => {
            return (
              <div
                key={item.maintype_id}
                className="h-[105px] flex items-center"
              >
                <button
                  className="flex shadow-lg p-[7px] rounded-2xl items-center"
                  onClick={_.throttle(
                    () => handleChoose(item.maintype_id),
                    1500
                  )}
                >
                  <Image
                    alt="main_type"
                    src={selectMaintype(item.maintype)}
                    width={100}
                    height={50}
                    className=" rounded-2xl h-[90px] w-[171px]"
                  ></Image>
                  <h4 className="px-[44px] text-[#103D9C] text-xl">
                    {item.maintype}
                  </h4>
                </button>
                <div className=" shrink-0 text-center w-[160px] text-2xl ">
                  {item.percent?.toFixed(2)} %
                </div>
              </div>
            );
          })}
      </div>
      <div className="w-full">
        <div className="flex gap-2 items-center">
          <h4>Lộ trình khác</h4>
          <div className="flex-1 h-[1px] bg-black"></div>
        </div>

        <div className="w-full overflow-hidden">
          <div className="flex gap-5 overflow-y-auto py-8 px-1">
            {prediction
              .filter((x) => !Boolean(x.percent))
              .map((item) => {
                return (
                  <div
                    key={item.maintype_id}
                    className="h-[70px] flex items-center shrink-0"
                  >
                    <button
                      className="flex shadow-lg p-[7px] rounded-2xl items-center"
                      onClick={() => handleChoose(item.maintype_id)}
                    >
                      <Image
                        alt="main_type"
                        src={selectMaintype(item.maintype)}
                        width={70}
                        height={30}
                        className=" rounded-2xl h-[90px] w-[171px] object-cover"
                      ></Image>
                      <h4 className="px-[22px] text-[#103D9C] text-xl">
                        {item.maintype}
                      </h4>
                    </button>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalChoosen;
