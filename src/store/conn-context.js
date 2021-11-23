import React from "react";

const ConnContext = React.createContext({
  name: null,
  ip: null,
  port: null,
  isConnected: false,
  socket: null,
});

export default ConnContext;
