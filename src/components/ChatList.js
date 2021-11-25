import { Box } from "@chakra-ui/react";
import React, { useContext } from "react";
import ChatBox from "./UI/ChatBox";
import { Scrollbars } from "react-custom-scrollbars-2";
import AlertBox from "./UI/AlertBox";
import ConnContext from "./../store/conn-context";

const ChatList = (props) => {
  const formatDate = (date) => {
    return `${date.getHours().toString()}:${date
      .getMinutes()
      .toString()}, ${date.getDay().toString()}-${date
      .getMonth()
      .toString()}-${date.getFullYear().toString()}`;
  };

  const connCtx = useContext(ConnContext);

  const returnMessages = (messages) => {
    return messages.map((msg, index) => {
      if (msg.type === "alert")
        return <AlertBox data={{ msg: msg.msg }} key={msg.id + "-" + index} />;
      else {
        return (
          <ChatBox
            data={{ ...msg, time: formatDate(new Date(msg.time)) }}
            sentMsg={msg.id === connCtx.id ? true : false}
            key={msg.id + "-" + index}
          />
        );
      }
    });
  };

  return (
    <Box justify="start" overflowY="hidden" maxHeight="50vh">
      <Scrollbars style={{ width: "100%", height: "50vh", maxWidth: "57rem" }}>
        <Box px={6} py={3}>
          {returnMessages(props.messages)}
          {/* <ChatBox
            data={{
              name: "Bupper",
              msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, magnam? Reiciendis obcaecati expedita nihil voluptates fugit, eos numquam accusamus quam in perferendis at itaque dolor possimus dolores quaerat iste minima.",
              id: "Bupper1234",
              time: formatDate(new Date()),
            }}
          />
          <AlertBox
            data={{
              msg: "Bupper123 has disconnected.",
            }}
          />
          <ChatBox
            data={{
              name: "Bupper",
              msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, magnam? Reiciendis obcaecati expedita nihil voluptates fugit, eos numquam accusamus quam in perferendis at itaque dolor possimus dolores quaerat iste minima.",
              id: "Bupper1234",
              time: formatDate(new Date()),
              sentMsg: true,
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
          /> */}
        </Box>
      </Scrollbars>
    </Box>
  );
};

export default ChatList;
