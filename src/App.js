import Header from "./components/Header";
import MainSection from "./components/MainSection";
import ConnContext from "./store/conn-context";
import { useState } from "react";

function App() {
  const [connState, setConnState] = useState({
    name: null,
    ip: null,
    port: null,
    isConnected: false,
    socket: null,
  });

  return (
    <div className="App">
      <Header />
      <ConnContext.Provider
        value={{ state: connState, setState: setConnState }}
      >
        <MainSection />
      </ConnContext.Provider>
    </div>
  );
}

export default App;
