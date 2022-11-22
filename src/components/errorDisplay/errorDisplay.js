import React from "react";
import "./errorDisplay.scss";
import { useTranslation } from "react-i18next";

export default function ErrorDisplay(props) {
  const errorMessage = props.errorMessage || "";
  const { t } = useTranslation();

  return (
    <div data-testid="error-container" className="error-wrapper">
      <div data-testid="error-message" className="error-message">
        {t(errorMessage)}
      </div>
    </div>
  );
}
