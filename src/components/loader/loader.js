import CircularProgress from "@mui/material/CircularProgress";
import React from "react";
import "./loader.scss";

export default function Loader(props) {
  const { size = 70 } = props;

  return (
    <div className="loader-wrapper" data-testid="loader">
      <CircularProgress size={size} className="loader-circle" />
    </div>
  );
}
