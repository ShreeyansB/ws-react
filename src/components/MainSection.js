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
import ReactDOM from "react-dom";
import Backdrop from "./UI/Backdrop";
import Modal from "./UI/Modal";
import Chat from "./Chat";
import shortUUID from "short-uuid";

const MainSection = (props) => {
  const [formSwitch, setformSwitch] = useState(false);
  const [btnIsLoading, setbtnIsLoading] = useState(false);
  const [isError, setIsError] = useState({
    open: false,
    title: "null",
    subtitle: "null",
    action: "null",
    onClick: () => {},
  });

  const [messages, setMessages] = useState([]);

  const connCtx = useContext(ConnContext);

  const [formData, setformData] = useState({
    name: "",
    ip: "",
    port: "",
  });

  var socket;

  const formHandler = (event) => {
    event.preventDefault();
    const userID =
      formData.name.replace(/\s+/g, "") + "-" + shortUUID.generate();
    let URL;
    if (formData.port === "" || formData.port === undefined) {
      URL = formSwitch
        ? "ws://" + formData.ip.trim() + "?id=" + userID
        : process.env.WS_URL + "?id=" + userID && "ws://null";
    } else {
      URL = formSwitch
        ? "ws://" + formData.ip.trim() + ":" + formData.port + "?id=" + userID
        : process.env.WS_URL + "?id=" + userID && "ws://null";
    }
    // console.log(URL);
    setbtnIsLoading(true);
    try {
      socket = new WebSocket(URL);
      socket.addEventListener("open", function (event) {
        console.log("Connected to Server.");
        setbtnIsLoading(false);
        props.setState((prev) => {
          return {
            ...prev,
            name: formData.name,
            id: userID,
            isConnected: true,
            socket: socket,
          };
        });
      });

      socket.onerror = function (event) {
        console.log(event, "Failed to connect.");
        setbtnIsLoading(false);
        setIsError({
          open: true,
          title: "Connection Error",
          subtitle:
            "Cannot connect to the specified WebSocket. Server may be down.",
          action: "Return",
          onClick: () => {
            setIsError((prev) => {
              return { ...prev, open: false };
            });
            window.location.reload();
          },
        });
      };

      socket.addEventListener("disconnect", function (event) {
        console.log(event, "Disconnected.");
        setIsError({
          open: true,
          title: "Connection Error",
          subtitle: "Disconnected from the WebSocket.",
          action: "Return",
          onClick: () => {
            setIsError((prev) => {
              return { ...prev, open: false };
            });
            window.location.reload();
          },
        });
      });

      socket.addEventListener("message", function (event) {
        // console.log("Message receieved: ", event.data);
        setMessages((prev) => {
          return [...prev, JSON.parse(event.data)];
        });
      });
    } catch (e) {
      alert(e);
      window.location.reload();
    }
  };

  const returnForm = () => (
    <Flex justify="center" direction="row" mb="6rem">
      <FadeUpAnim index={1} delay={0.2}>
        <Box borderRadius="2xl" shadow="xl" p={9}>
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
                <FormControl>
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
      {!connCtx.isConnected && returnForm()}
      <Chat messages={messages} />

      {ReactDOM.createPortal(
        <Backdrop isError={isError} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <Modal isError={isError} />,
        document.getElementById("backdrop-root")
      )}
    </Box>
  );
};

export default MainSection;
