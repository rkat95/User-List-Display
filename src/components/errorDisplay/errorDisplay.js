import React from "react";
import "./errorDisplay.scss";
import { useTranslation } from "react-i18next";

export default function ErrorDisplay(props) {
  const errorMessage = props.errorMessage || "";
  const { t } = useTranslation();

  return (
    <div className="error-wrapper">
      <div className="error-message">{t(errorMessage)}</div>
    </div>
  );
}
