import React, { useState, useContext } from "react";
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
import ConnContext from "./../store/conn-context";

const MainSection = (props) => {
  const [formSwitch, setformSwitch] = useState(false);
  const [btnIsLoading, setbtnIsLoading] = useState(false);

  const connCtx = useContext(ConnContext);

  const [formData, setformData] = useState({
    name: "",
    ip: "",
    port: "",
  });

  const formHandler = (event) => {
    event.preventDefault();
    const URL = formSwitch
      ? "ws://" + formData.ip + ":" + formData.port
      : process.env.WS_URL || "ws://null";
    setbtnIsLoading(true);
    try {
      const socket = new WebSocket(URL);
      socket.addEventListener("open", function (event) {
        console.log("Connected to Server.");
        setbtnIsLoading(false);
      });

      socket.onerror = function (event) {
        console.log(event, "Failed to connect.");
        setbtnIsLoading(false);
      };

      socket.addEventListener("disconnect", function (event) {
        console.log(event, "Disconnected.");
      });

      socket.addEventListener("message", function (event) {
        console.log("Message: ", event.data);
      });
    } catch (e) {
      alert(e);
    }
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
              <Button isLoading={btnIsLoading} colorScheme="blue" type="submit">
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
