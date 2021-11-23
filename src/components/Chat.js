import React, { useContext } from "react";
import { Box, Text, Flex } from "@chakra-ui/react";
import ConnContext from "./../store/conn-context";
import FadeUpAnim from "./Animations/FadeUpAnim";
import colors from "./../Colors";

const Chat = (props) => {
  const connCtx = useContext(ConnContext);

  return (
    !connCtx.isConnected && (
      <FadeUpAnim delay={0.6}>
        <Flex justify="center" direction="row" mb="6rem">
          <Box borderRadius="2xl" shadow="xl" w="100%" maxW="57rem" grow={2}>
            <Box borderTopRadius="1rem" bg={colors.primary} p={6}>
              <Text
                display="inline"
                fontSize={22}
                fontWeight={600}
                color="white"
                ps={1}
              >
                Connected to : &nbsp;
              </Text>
              <Text
                display="inline"
                fontSize={24}
                fontWeight={600}
                fontFamily="monospace"
                color={colors.secondary}
              >
                {/* {connCtx.socket.url} */}
                ws://192.168.1.1:3000
              </Text>
            </Box>
          </Box>
        </Flex>
      </FadeUpAnim>
    )
  );
};

export default Chat;
