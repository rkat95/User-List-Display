import LanguageSwitcher from "../languageSwitcher/languageSwitcher";
import { useTranslation } from "react-i18next";
import logo from "../../assets/images/logo.svg";
import React from "react";
import "./header.scss";

export default function Header(props) {
  const lang = props.lang;
  const { t } = useTranslation();

  return (
    <div className="header-container">
      <div className="left-container">
        <img className="logo" alt="" src={logo} />{" "}
        <div className="header-title">{t("management_system")}</div>
      </div>
      <div className="menu-items-container">
        <LanguageSwitcher lang={lang} />
      </div>
    </div>
  );
}
