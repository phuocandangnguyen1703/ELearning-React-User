import React, { useState } from "react";
import { TextFieldSearch } from "../atoms";

type Props = {};

const ChatbotSearch = (props: Props) => {
  const [search, setSearch] = useState<string | undefined>(undefined);
  return (
    <div className="flex-1">
      <TextFieldSearch
        value={search}
        className=" bg-gray-tertiary"
        onChange={(e) => setSearch(e.target.value)}
      ></TextFieldSearch>
    </div>
  );
};

export default ChatbotSearch;
