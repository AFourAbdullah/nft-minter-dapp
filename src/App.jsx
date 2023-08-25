import React from "react";
import Header from "./components/Header";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import Home from "./components/Home";
import { Sepolia } from "@thirdweb-dev/chains";
import Main from "./components/Main";

const App = () => {
  return (
    <ThirdwebProvider activeChain={Sepolia}>
      <div>
        <Header />
        <Main />
      </div>
    </ThirdwebProvider>
  );
};

export default App;
