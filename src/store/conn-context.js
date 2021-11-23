import React from "react";

const ConnContext = React.createContext({
  name: null,
  isConnected: false,
  socket: null,
});

export default ConnContext;
