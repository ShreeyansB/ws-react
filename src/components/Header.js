import { VStack, Box, Flex, Link, HStack, Text } from "@chakra-ui/react";
import { HiChatAlt2 } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";

import React from "react";
import colors from "./../Colors";

function Header() {
  return (
    <VStack spacing={0} position="fixed" top={0} left={0} width="100%">
      <Box h={2} w="100%" bg="blue.600" />
      <Flex
        py={2}
        px={{ base: 5, md: "21vw" }}
        justify={{ base: "space-between" }}
        align="center"
        w="100%"
      >
        <HStack onClick={() => window.location.reload()} cursor="pointer">
          <HiChatAlt2 size={55} color={colors.primary} />
          <Text fontSize="1.8rem" fontWeight={700} color={colors.primary}>
            ws-chat
          </Text>
        </HStack>
        <Link
          href="https://github.com/ShreeyansB"
          target="_blank"
          _focus={{ border: "none" }}
          _hover={{ opacity: 0.34 }}
          opacity={0.27}
        >
          <FaGithub size={30} />
        </Link>
      </Flex>
      <Box h={1} w="100%" bg="blackAlpha.200" />
    </VStack>
  );
}

export default Header;
