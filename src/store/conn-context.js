import React from "react";

const ConnContext = React.createContext({
  name: null,
  id: null,
  isConnected: false,
  socket: null,
});

export default ConnContext;
