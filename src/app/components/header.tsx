import React from "react";
import "./header.scss";
import logo from "../assets/logo.webp";
import Image from "next/image";
import Link from "next/dist/client/link";

const block = "header";
const Header: React.FC = () => {
  return (
    <header className={`${block} `}>
      <div className={`container ${block}__container`}>
        <Image className={`${block}__logo`} src={logo} alt="logo" priority />
        <Link className={`${block}__logout`} href="/">
          Logout
        </Link>
      </div>
    </header>
  );
};

export default Header;
