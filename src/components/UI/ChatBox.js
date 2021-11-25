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
import classes from "./ChatBox.module.css";

const ChatBox = (props) => {
  if (!props.sentMsg)
    return (
      <Flex
        direction="row"
        align="start"
        maxWidth="30rem"
        float="left"
        mb={4}
        width="100%"
        className={classes.anim}
      >
        <Tooltip label={props.data.id}>
          <Avatar
            name={props.data.name}
            src={`https://source.boringavatars.com/marble/160/${props.data.id}`}
            mt={1}
          />
        </Tooltip>
        <VStack align="start" ms={3}>
          <HStack align="center">
            <Text fontWeight={600} fontSize={{ base: "1.05rem", sm: "1.2rem" }} color={colors.primary} isTruncated>
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
            px={4}
            py={3}
            borderRadius={15}
            borderTopLeftRadius={5}
            maxWidth="30rem"
          >
            <Text>{props.data.msg}</Text>
          </Box>
        </VStack>
      </Flex>
    );
  else
    return (
      <Flex
        direction="row-reverse"
        align="start"
        maxWidth="30rem"
        float="right"
        mb={4}
        width="100%"
        className={classes.anim}
      >
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
            px={4}
            py={3}
            borderRadius={15}
            borderTopRightRadius={5}
            maxWidth="30rem"
          >
            <Text color="white">{props.data.msg}</Text>
          </Box>
        </VStack>
      </Flex>
    );
};

export default ChatBox;
