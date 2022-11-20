import CircularProgress from "@mui/material/CircularProgress";
import React from "react";
import "./loader.scss";

export default function Loader(props) {
  const { size = 70 } = props;

  return (
    <div className="loader-wrapper">
      <CircularProgress size={size} className="loader-circle" />
    </div>
  );
}
