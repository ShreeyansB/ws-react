import { Text, Box } from "@chakra-ui/react";
import React from "react";
import FadeUpAnim from "../Animations/FadeUpAnim";

const AlertBox = (props) => {
  return (
    <FadeUpAnim delay={0.2} style={{display: "block"}}>
      <Box direction="row" float="left" textAlign="center" w="100%" p={3} mb={3}>
        <Text fontWeight={500} color="purple.600">
          {props.data.msg}
        </Text>
      </Box>
    </FadeUpAnim>
  );
};

export default AlertBox;
