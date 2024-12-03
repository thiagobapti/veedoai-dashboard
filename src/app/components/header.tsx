import React from "react";
import "./header.scss";
import logo from "../assets/logo.webp";
import Image from "next/image";

const block = "header";
const Header: React.FC = () => {
  return (
    <header className={`${block} `}>
      <div className={`container`}>
        <Image className={`${block}__logo`} src={logo} alt="logo" priority />
      </div>
    </header>
  );
};

export default Header;
