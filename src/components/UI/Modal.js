import React from "react";
import { Box, Text, Button, VStack } from "@chakra-ui/react";
import FadeInAnim from "../Animations/FadeInAnim";

const Modal = (props) => {
  return (
    props.isError.open && (
      <FadeInAnim style={{position: "fixed", zIndex: 4}}>
        <Box
          position="fixed"
          w={{ base: "80%", md: "30rem" }}
          top="40vh"
          left="50%"
          ml={{ base: "-40%", md: "-15rem" }}
          zIndex={4}
          shadow="xl"
          borderRadius="2xl"
          overflowY="auto"
          bg="white"
          p={7}
        >
          <VStack spacing={3} align="start">
            <Text fontSize={30} fontWeight={700}>
              {props.isError.title}
            </Text>
            <Text fontSize={17} fontWeight={500}>
              {props.isError.subtitle}
            </Text>
            <br />
            br
            <Button
              colorScheme="red"
              onClick={props.isError.onClick}
              alignSelf="end"
              _focus={{ outline: "none" }}
            >
              {props.isError.action}
            </Button>
          </VStack>
        </Box>
      </FadeInAnim>
    )
  );
};

export default Modal;
