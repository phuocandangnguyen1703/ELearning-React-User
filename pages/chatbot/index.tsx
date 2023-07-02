import { Chatbot } from "@/components/templates";
import { HeaderLayout } from "@/layouts/index";
import { Permission } from "middleware";
import React from "react";

type Props = {};

const ChatbotPage = (props: Props) => {
  return <Chatbot></Chatbot>;
};

ChatbotPage.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <Permission>
      <HeaderLayout>{page}</HeaderLayout>
    </Permission>
  );
};

export default ChatbotPage;
