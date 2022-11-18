import { menuItems } from "../../assets/configuration/config";
import { setViewType } from "../../reducers/settingsSlice";
import logo from "../../assets/images/logo.svg";
import { useTranslation } from "react-i18next";
import { useStore } from "react-redux";
import React from "react";
import "./header.scss";

export function Header() {
  const store = useStore();
  const { t } = useTranslation();

  const setDisplayView = (viewType) => {
    store.dispatch(setViewType(viewType));
  };
  return (
    <div className="header-container">
      <img className="logo" alt="" src={logo} />
      <div className="menu-items-container">
        {menuItems.map((item) => {
          return (
            <div onClick={() => setDisplayView(item.key)} className="menu-item">
              {t(item.label)}
            </div>
          );
        })}
      </div>
    </div>
  );
}
