import { Box, Text, Flex } from "@chakra-ui/react";
import React, { useContext } from "react";
import ChatBox from "./UI/ChatBox";
import { Scrollbars } from "react-custom-scrollbars-2";
import AlertBox from "./UI/AlertBox";
import ConnContext from "./../store/conn-context";
import { useRef } from "react";
import { useEffect } from "react";

const ChatList = (props) => {
  const formatDate = (date) => {
    return `${date.getHours().toString()}:${date
      .getMinutes()
      .toString()}, ${date.getDay().toString()}-${date
      .getMonth()
      .toString()}-${date.getFullYear().toString()}`;
  };

  const connCtx = useContext(ConnContext);
  const scrollRef = useRef(null);

  useEffect(() => {
    scrollRef.current.scrollToBottom();
  }, [props.messages]);

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
      <Scrollbars
        style={{ width: "100%", height: "50vh", maxWidth: "57rem" }}
        ref={scrollRef}
      >
        <Box px={6} py={3}>
          {returnMessages(props.messages)}
          <Flex height="0.7rem" width="100%"></Flex>
        </Box>
      </Scrollbars>
    </Box>
  );
};

export default ChatList;
