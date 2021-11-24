import React from "react";
import {
  Flex,
  Avatar,
  Text,
  Tooltip,
  HStack,
  VStack,
  Box,
} from "@chakra-ui/react";
import colors from "./../../Colors";

const ChatBox = (props) => {
  if (!props.data.sentMsg)
    return (
      <Flex direction="row" align="start" maxWidth="30rem" float="left" mb={4}>
        <Tooltip label={props.data.id}>
          <Avatar
            name={props.data.name}
            src={`https://source.boringavatars.com/marble/160/${props.data.id}`}
            mt={1}
          />
        </Tooltip>
        <VStack align="start" ms={3}>
          <HStack>
            <Text fontWeight={600} fontSize="1.2rem" color={colors.primary}>
              {props.data.name}
            </Text>
            <Text
              fontWeight={500}
              fontSize="0.85rem"
              color={colors.primary}
              pt={1}
              opacity={0.5}
            >
              {props.data.time}
            </Text>
          </HStack>
          <Box
            bg={colors.alt}
            px={5}
            py={4}
            borderRadius={15}
            borderTopLeftRadius={5}
          >
            <Text>{props.data.msg}</Text>
          </Box>
        </VStack>
      </Flex>
    );
  else
    return (
      <Flex direction="row" align="start" maxWidth="35rem" float="right" mb={4}>
        <VStack align="end" ms={3}>
          <Text
            fontWeight={500}
            fontSize="0.85rem"
            color={colors.primary}
            pt={1}
            opacity={0.5}
          >
            {props.data.time}
          </Text>
          <Box
            bg={colors.primary}
            px={5}
            py={4}
            borderRadius={15}
            borderTopRightRadius={5}
          >
            <Text color="white">{props.data.msg}</Text>
          </Box>
        </VStack>
      </Flex>
    );
};

export default ChatBox;
