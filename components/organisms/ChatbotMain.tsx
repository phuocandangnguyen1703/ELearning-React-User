import { BotIcon } from "@/assets/home";
import React, { useCallback, useContext, useRef } from "react";
import { Button, TextField } from "../atoms";
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import ChatbotTyping from "../moleculers/ChatbotTyping";
import { ChatbotContext, chatbotListener } from "../contexts/ChatbotContext";

import { Controller } from "react-hook-form";

import _ from "lodash";
import { ChatbotList } from "../moleculers";
type Props = {};

const ChatbotMain = (props: Props) => {
  const { listForm, chatForm, chatRef } = useContext(ChatbotContext);
  const handleSuggest = useCallback((input: string) => {
    chatbotListener.emit("suggest", input);
    setTimeout(() => {
      chatForm?.setValue("isBegin", false);
    }, 15000);
  }, []);
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

          {/* <div className="flex items-center gap-2">
            <Button className=" bg-blue-secondary flex justify-center items-center !rounded-full w-[40px] h-[40px] !p-2">
              <AiOutlineSearch className="text-xl w-full h-full"></AiOutlineSearch>
            </Button>
            <Button className=" bg-blue-secondary flex justify-center items-center !rounded-full w-[40px] h-[40px] !p-2">
              <AiOutlineClose className="text-xl w-full h-full"></AiOutlineClose>
            </Button>
          </div> */}
        </div>
      </div>

      {/* main */}
      <div className="flex-1 flex flex-col w-full overflow-hidden">
        {/* history */}
        <div
          ref={chatRef}
          className="flex-1 flex flex-col w-full p-4 overflow-y-auto gap-4 items-start"
        >
          <Controller
            control={chatForm?.control}
            name="list"
            render={({ field: chats }) => (
              <ChatbotList chats={chats.value}></ChatbotList>
            )}
          ></Controller>
        </div>

        {/* typing */}
        <div className="w-full bg-white">
          <Controller
            control={chatForm?.control}
            name="isBegin"
            render={({ field: { value: isBegin } }) => {
              if (!isBegin) return <></>;
              return (
                <div className="w-full px-4 pt-2">
                  <h6 className="text-sm">Câu hỏi gợi ý</h6>
                  <div className="w-full flex mt-2 gap-3 items-end overflow-x-auto">
                    {questionDefault.map((question, index) => {
                      return (
                        <Button
                          key={index}
                          onClick={() => handleSuggest(question)}
                          className="!bg-white border-[1px] border-gray-300 !text-gray-600"
                        >
                          {question}
                        </Button>
                      );
                    })}
                  </div>
                </div>
              );
            }}
          ></Controller>
          <div className="w-full flex items-center px-4 py-2">
            <ChatbotTyping mode="chatbot" className=""></ChatbotTyping>
          </div>
        </div>
      </div>
    </div>
  );
};

const questionDefault = [
  "Kỹ năng nào đang được tuyển dụng nhiều nhất ?",
  "Mức lương tham khảo của công ty FPT Software ?",
  "Mức lương của ngành Game ?",
];

export default ChatbotMain;
