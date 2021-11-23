import { Box } from "@chakra-ui/react";
import React from "react";
import FadeInAnim from "../Animations/FadeInAnim";

const Backdrop = (props) => {
  return (
    props.isError.open && (
      <FadeInAnim style={{position: "fixed", zIndex: 3}}>
        <Box
          position="fixed"
          bg="blackAlpha.700"
          w="100%"
          h="100%"
          top={0}
          left={0}
          zIndex={3}
        ></Box>
      </FadeInAnim>
    )
  );
};

export default Backdrop;
