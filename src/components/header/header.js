import { menuItems } from "../../assets/configuration/config";
import { setViewType } from "../../reducers/settingsSlice";
import logo from "../../assets/images/logo.svg";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import React from "react";
import "./header.scss";

export function Header() {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const setDisplayView = (viewType) => {
    dispatch(setViewType(viewType));
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
