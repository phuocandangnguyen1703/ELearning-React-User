import { IChatbot } from "@/types/chatbot";
import AxiosServices from "apis/axiosServices";

export const getChat = (question: string) => {
  return new AxiosServices().get<IChatbot>(`chatbot/chat?question=${question}`);
};

export const history = () => {
  return new AxiosServices().get<IChatbot[]>(`chatbot/history`);
};
