import {Text , Box} from "@chakra-ui/react";
import React from "react";

const AlertBox = (props) => {
  return (
    <Box direction="row" float="left" textAlign="center" w="100%" p={3}>
      <Text fontWeight={500} color="purple.600">{props.data.msg}</Text>
    </Box>
  );
};

export default AlertBox;
