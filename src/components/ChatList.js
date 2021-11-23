import { VStack } from "@chakra-ui/react";
import React from "react";
import ChatBox from "./UI/ChatBox";

const ChatList = (props) => {
  const formatDate = (date) => {
    return `${date.getHours().toString()}:${date
      .getMinutes()
      .toString()}, ${date.getDay().toString()}-${date
      .getMonth()
      .toString()}-${date.getFullYear().toString()}`;
  };

  return (
    <VStack align="start" p={6} overflowY="auto" maxHeight="50vh">
      <ChatBox
        data={{
          name: "Bupper",
          msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, magnam? Reiciendis obcaecati expedita nihil voluptates fugit, eos numquam accusamus quam in perferendis at itaque dolor possimus dolores quaerat iste minima.",
          id: "Bupper1234",
          time: formatDate(new Date()),
        }}
      />

      <ChatBox
        data={{
          name: "Bupper",
          msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, magnam? Reiciendis obcaecati expedita nihil voluptates fugit, eos numquam accusamus quam in perferendis at itaque dolor possimus dolores quaerat iste minima.",
          id: "Bupper1234",
          time: formatDate(new Date()),
        }}
      />
      <ChatBox
        data={{
          name: "Bupper",
          msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, magnam? Reiciendis obcaecati expedita nihil voluptates fugit, eos numquam accusamus quam in perferendis at itaque dolor possimus dolores quaerat iste minima.",
          id: "Bupper1234",
          time: formatDate(new Date()),
        }}
      />
      <ChatBox
        data={{
          name: "Bupper",
          msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, magnam? Reiciendis obcaecati expedita nihil voluptates fugit, eos numquam accusamus quam in perferendis at itaque dolor possimus dolores quaerat iste minima.",
          id: "Bupper1234",
          time: formatDate(new Date()),
        }}
      />
    </VStack>
  );
};

export default ChatList;
