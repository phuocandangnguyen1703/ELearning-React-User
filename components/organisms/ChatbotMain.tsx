import { BotIcon } from "@/assets/home";
import React from "react";
import { Button, TextField } from "../atoms";
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import ChatbotTyping from "../moleculers/ChatbotTyping";
type Props = {};

const ChatbotMain = (props: Props) => {
  return (
    <div className="flex-1 flex flex-col">
      {/* header */}
      <div className="h-[82px] flex w-full gap-4 px-5 items-center border-b-[1px]">
        <div className="w-[65px] h-[65px] border-blue-secondary border-[1px] rounded-full p-2">
          <BotIcon className="w-full h-full object-contain"></BotIcon>
        </div>
        <div className="flex flex-1 gap-2">
          <div className="flex flex-col flex-1">
            <h3 className=" font-semibold text-lg">Usagi</h3>
            <i className=" text-sm text-1">Trợ lý AI</i>
          </div>

          <div className="flex items-center gap-2">
            <Button className=" bg-blue-secondary flex justify-center items-center !rounded-full w-[40px] h-[40px] !p-2">
              <AiOutlineSearch className="text-xl w-full h-full"></AiOutlineSearch>
            </Button>
            <Button className=" bg-blue-secondary flex justify-center items-center !rounded-full w-[40px] h-[40px] !p-2">
              <AiOutlineClose className="text-xl w-full h-full"></AiOutlineClose>
            </Button>
          </div>
        </div>
      </div>

      {/* main */}
      <div className="flex-1 flex flex-col">
        {/* history */}
        <div className="flex-1"></div>

        {/* typing */}
        <div className="w-full min-h-[95px] flex items-center px-6">
          <ChatbotTyping></ChatbotTyping>
        </div>
      </div>
    </div>
  );
};

export default ChatbotMain;
