import React from "react";
import { ChatbotAside } from "../organisms";
import ChatbotContextProvider, {
  ChatbotContext,
} from "../contexts/ChatbotContext";
import ChatbotMain from "../organisms/ChatbotMain";

type Props = {};

const Chatbot = (props: Props) => {
  return (
    <div className="w-screen h-[calc(100vh-64px)] overflow-hidden flex items-stretch">
      <ChatbotAside></ChatbotAside>
      <ChatbotMain></ChatbotMain>
    </div>
  );
};

const Wrapper = () => {
  return (
    <ChatbotContextProvider>
      <Chatbot></Chatbot>
    </ChatbotContextProvider>
  );
};

export default Wrapper;
