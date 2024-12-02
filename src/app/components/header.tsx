import React from "react";
import "./header.scss";

const block = "header";
const Header: React.FC = () => {
  return <header className={`${block} container`}>Heaer</header>;
};

export default Header;
