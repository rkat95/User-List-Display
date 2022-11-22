import { useTranslation } from "react-i18next";
import { Divider } from "@mui/material";
import React from "react";
import "./pageTitle.scss";

export default function PageTitle(props) {
  const { t } = useTranslation();

  const {
    title = "",
    subtitle = "",
    icons = [],
    subtitleParams = {},
  } = props.data;

  return (
    <div className="page-header-container">
      <div className="top-container">
        <div className="title-container">
          <div className="page-title" data-testid="page-title">
            {t(title)}
          </div>
          <div className="page-subtitle" data-testid="page-subtitle">
            {t(subtitle, subtitleParams)}
          </div>
        </div>
        <div className="icons-container">
          {icons.map((icon, index) => {
            const Icon = icon.icon;
            return (
              <Icon
                data-testid="icon"
                key={index}
                className="action-icon"
                onClick={(event) => {
                  icon.clickFn(icon.clickParam);
                }}
              />
            );
          })}
        </div>
      </div>
      <Divider className="title-divider" />
    </div>
  );
}
