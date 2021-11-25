import { Box, Flex, Textarea, Tooltip } from "@chakra-ui/react";
import React, { useContext } from "react";
import colors from "./../Colors";
import { MdSend } from "react-icons/md";
import ConnContext from "../store/conn-context";
import { useState } from "react";

const TextField = (props) => {
  const connCtx = useContext(ConnContext);

  const [chatValue, setChatValue] = useState("");

  const sendMessage = () => {
    let message = chatValue.trim();
    if (message === "") return;
    const msg = {
      name: connCtx.name,
      id: connCtx.id,
      type: "msg",
      msg: message,
    };
    connCtx.socket.send(JSON.stringify(msg));
    setChatValue("");
  };

  const handleChat = (event) => {
    setChatValue(event.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <Box bg={colors.primary} p={6} borderBottomRadius="1rem">
      <Box bg="white" borderRadius="10rem" pt={3}>
        <Flex direction="row" align="start">
          <Tooltip label="Shift+Enter to Send">
            <Textarea
              placeholder="Enter message"
              size="sm"
              resize="none"
              borderRadius="10rem"
              border="none"
              focusBorderColor="none"
              rows={1}
              fontWeight={500}
              fontSize="1.2rem"
              me={4}
              ps={4}
              pb={{ base: 4, sm: 1 }}
              value={chatValue}
              onChange={handleChat}
              onKeyPress={handleKeyPress}
            />
          </Tooltip>
          <MdSend
            size={40}
            color={colors.primary}
            style={{ margin: "0px 10px" }}
            cursor="pointer"
            onClick={sendMessage}
          />
        </Flex>
      </Box>
    </Box>
  );
};

export default TextField;
