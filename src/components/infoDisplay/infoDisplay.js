import Typography from "@mui/material/Typography";
import { useTranslation } from "react-i18next";
import "./infoDisplay.scss";
import React from "react";

export default function InfoDisplay(props) {
  const { label, value, Icon, subValues } = props.data;
  const { t } = useTranslation();
  return (
    <div className={`info-item ${!label || !value ? "center-items" : ""}`}>
      {Icon ? (
        <div className="icon-wrapper">
          <Icon className="info-icon" />
        </div>
      ) : (
        ""
      )}
      <div className="text-info">
        {label ? (
          <Typography className="label" color="text.secondary">
            {t(label)}
          </Typography>
        ) : (
          ""
        )}
        {value ? <Typography className="value">{value}</Typography> : ""}
        {subValues?.map((val, index) => (
          <Typography key={index} className="sub-value">
            {val}
          </Typography>
        ))}
      </div>
    </div>
  );
}
