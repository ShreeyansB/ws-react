import { Box } from "@chakra-ui/react";
import React from "react";
import ChatBox from "./UI/ChatBox";
import { Scrollbars } from "react-custom-scrollbars-2";
import AlertBox from "./UI/AlertBox";

const ChatList = (props) => {
  const formatDate = (date) => {
    return `${date.getHours().toString()}:${date
      .getMinutes()
      .toString()}, ${date.getDay().toString()}-${date
      .getMonth()
      .toString()}-${date.getFullYear().toString()}`;
  };

  return (
    <Box justify="start" overflowY="hidden" maxHeight="50vh">
      <Scrollbars style={{ width: "100%", height: "50vh", maxWidth: "57rem"}} autoHide>
        <Box px={6} py={3}>
          <ChatBox
            data={{
              name: "Bupper",
              msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, magnam? Reiciendis obcaecati expedita nihil voluptates fugit, eos numquam accusamus quam in perferendis at itaque dolor possimus dolores quaerat iste minima.",
              id: "Bupper1234",
              time: formatDate(new Date()),
            }}
          />
          <AlertBox data={{
            msg: "Bupper123 has disconnected."
          }}/>
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
          />
        </Box>
      </Scrollbars>
    </Box>
  );
};

export default ChatList;
