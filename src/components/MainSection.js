import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Flex,
  Switch,
  VStack,
} from "@chakra-ui/react";
import FadeUpAnim from "./Animations/FadeUpAnim";

const MainSection = (props) => {
  const [formSwitch, setformSwitch] = useState(false);

  const [formData, setformData] = useState({
    name: "",
    ip: "",
    port: "",
  });

  const formHandler = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  const returnForm = () => (
    <Flex justify="center" direction="row">
      <FadeUpAnim index={1} delay={0.2}>
        <Box borderRadius="2xl" shadow="2xl" p={9}>
          <Heading>Enter Details</Heading>
          <br />
          <form onSubmit={formHandler}>
            <VStack spacing={7} align="self-start">
              <FormControl isRequired>
                <FormLabel>Display Name</FormLabel>
                <Input
                  placeholder="Display Name"
                  type="text"
                  value={formData.name}
                  autoFocus
                  onChange={(e) =>
                    setformData((prev) => {
                      return { ...prev, name: e.target.value };
                    })
                  }
                />
              </FormControl>
              {formSwitch && (
                <FormControl isRequired>
                  <FormLabel>IP Address</FormLabel>
                  <Input
                    placeholder="10.1.1.1"
                    type="text"
                    value={formData.ip}
                    onChange={(e) =>
                      setformData((prev) => {
                        return { ...prev, ip: e.target.value };
                      })
                    }
                  />
                </FormControl>
              )}
              {formSwitch && (
                <FormControl isRequired>
                  <FormLabel>Port</FormLabel>
                  <Input
                    placeholder="3000"
                    type="number"
                    value={formData.port}
                    onChange={(e) =>
                      setformData((prev) => {
                        return { ...prev, port: e.target.value };
                      })
                    }
                  />
                </FormControl>
              )}
              <FormControl display="flex" alignItems="center">
                <FormLabel>Use Local Socket Server?</FormLabel>
                <Switch
                  colorScheme="blue"
                  isChecked={formSwitch}
                  onChange={() => setformSwitch(() => !formSwitch)}
                />
              </FormControl>
              <Button colorScheme="blue" type="submit">
                Connect
              </Button>
            </VStack>
          </form>
        </Box>
      </FadeUpAnim>
    </Flex>
  );

  return (
    <Box px={{ base: 8, md: "22vw" }} mt="10rem" w="100%">
      {returnForm()}
    </Box>
  );
};

export default MainSection;
