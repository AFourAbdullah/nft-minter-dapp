import React from "react";
import logo from "../assets/logo-removebg-preview.png";
import { ConnectWallet } from "@thirdweb-dev/react";
const Header = () => {
  return (
    <header className="w-screen bg-slate-900 flex items-center justify-around">
      <img src={logo} alt="" className="w-20 h-20" />
      <ConnectWallet theme="dark" />
    </header>
  );
};

export default Header;
