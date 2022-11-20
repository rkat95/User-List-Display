import * as React from "react";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import Dialog from "@mui/material/Dialog";
import { useTranslation } from "react-i18next";
import GoogleMap from "google-maps-react-markers";
import Marker from "google-maps-react-markers";
import { useState, useEffect } from "react";
import "./dialogDisplay.scss";

export default function DialogDisplay(props) {
  const { lat, lon, open, onCloseFn } = props;
  const { t } = useTranslation();

  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    setOpen(open);
  }, [open]);

  return (
    <Dialog open={isOpen} onClose={onCloseFn}>
      <DialogTitle>
        <div className="dialog-title-container">
          {t("location_dialog_title")}
          <div className="close-dialog" onClick={onCloseFn}>
            X
          </div>
        </div>
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          <div className="sub-title"> {t("location_dialog_subtitle")}</div>
        </DialogContentText>
        <GoogleMap
          defaultCenter={{ lat: 45.4046987, lng: 12.2472504 }}
          defaultZoom={5}
          mapMinHeight="350px"
          onChange={(map) => console.log("Map moved", map)}
          className="map-wrapper"
        >
          <Marker lat={Number(lat)} lng={Number(lon)} markerId={"marker"} />
        </GoogleMap>
      </DialogContent>
    </Dialog>
  );
}
