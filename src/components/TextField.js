import { Box, Flex, Textarea } from "@chakra-ui/react";
import React from "react";
import colors from "./../Colors";
import { MdSend } from "react-icons/md";

const TextField = (props) => {
  return (
    <Box bg={colors.primary} p={6} borderBottomRadius="1rem">
      <Box bg="white" borderRadius="10rem" pt={3}>
        <Flex direction="row" align="start">
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
            pb={1}
          />
          <MdSend
            size={40}
            color={colors.primary}
            style={{ margin: "0px 10px" }}
            cursor="pointer"
            onClick={props.onSend}
          />
        </Flex>
      </Box>
    </Box>
  );
};

export default TextField;
