import { Chatbot } from "@/components/templates";
import { HeaderLayout } from "@/layouts/index";
import React from "react";

type Props = {};

const ChatbotPage = (props: Props) => {
  return <Chatbot></Chatbot>;
};

ChatbotPage.getLayout = function getLayout(page: React.ReactElement) {
  return <HeaderLayout>{page}</HeaderLayout>;
};

export default ChatbotPage;
