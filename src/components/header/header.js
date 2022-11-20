import LanguageSwitcher from "../languageSwitcher/languageSwitcher";
import logo from "../../assets/images/logo.svg";
import React from "react";
import "./header.scss";

export default function Header(props) {
  const lang = props.lang;

  return (
    <div className="header-container">
      <img className="logo" alt="" src={logo} />
      <div className="menu-items-container">
        <LanguageSwitcher lang={lang} />
      </div>
    </div>
  );
}
