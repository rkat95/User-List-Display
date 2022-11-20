import { setViewType } from "../../reducers/settingsSlice";
import { useTranslation } from "react-i18next";
import { Divider } from "@mui/material";
import { useDispatch } from "react-redux";
import React from "react";
import "./pageTitle.scss";

export default function PageTitle(props) {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const {
    title = "",
    subtitle = "",
    icons = [],
    subtitleParams = {},
  } = props.data;

  const handleIconClick = (view) => {
    dispatch(setViewType(view));
  };

  return (
    <div className="page-header-container">
      <div className="top-container">
        <div className="title-container">
          <div className="page-title">{t(title)}</div>
          <div className="page-subtitle">{t(subtitle, subtitleParams)}</div>
        </div>
        <div className="icons-container">
          {icons.map((icon) => {
            const Icon = icon.icon;
            return (
              <Icon
                className="action-icon"
                onClick={() => handleIconClick(icon.clickParam)}
              />
            );
          })}
        </div>
      </div>
      <Divider className="title-divider" />
    </div>
  );
}
