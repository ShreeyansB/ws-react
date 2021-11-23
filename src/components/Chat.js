import React, { useContext } from "react";
import { Box, Text, Flex } from "@chakra-ui/react";
import ConnContext from "./../store/conn-context";
import FadeUpAnim from "./Animations/FadeUpAnim";
import colors from "./../Colors";
import { MdCancel } from "react-icons/md";
import ChatList from "./ChatList";

const Chat = (props) => {
  const connCtx = useContext(ConnContext);

  return (
    !connCtx.isConnected && (
      <FadeUpAnim delay={0.6}>
        <Flex
          justify="center"
          direction="column"
          mb="6rem"
          borderRadius="2xl"
          shadow="xl"
        >
          <Box w="100%" maxW="57rem">
            <Flex
              direction="row"
              borderTopRadius="1rem"
              bg={colors.primary}
              p={4}
              justify="space-between"
            >
              <Box>
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
              <MdCancel
                size={30}
                color="white"
                cursor="pointer"
                onClick={() => window.location.reload()}
              />
            </Flex>
          </Box>
          <ChatList />
        </Flex>
      </FadeUpAnim>
    )
  );
};

export default Chat;
