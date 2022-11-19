import { Button, CardActionArea, CardActions } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import BadgeIcon from "@mui/icons-material/Badge";
import WorkIcon from "@mui/icons-material/Work";
import { useTranslation } from "react-i18next";
import Divider from "@mui/material/Divider";
import Card from "@mui/material/Card";
import * as React from "react";
import "./cardView.scss";

export default function CardView(props) {
  const { t } = useTranslation();
  const data = props.data || {};
  return (
    <Card className="card-container">
      <CardActionArea>
        <CardContent className="card-content">
          <Typography gutterBottom variant="h5" component="div">
            {data.username}
          </Typography>
          <div className="info-item">
            <div className="icon-wrapper">
              <BadgeIcon className="info-icon" />
            </div>
            <div class="text-info">
              <Typography className="label" color="text.secondary">
                {t("name")}
              </Typography>
              <Typography className="value">{data.name}</Typography>
            </div>
          </div>

          <Divider />
          <div className="info-item">
            <div className="icon-wrapper">
              <LocationOnIcon className="info-icon" />
            </div>
            <div className="text-info">
              <Typography className="label" color="text.secondary">
                {t("address")}
              </Typography>
              <Typography className="value">{data.address?.city}</Typography>
              <Typography className="sub-value">
                {data.address?.street}
              </Typography>
              <Typography className="sub-value">
                {data.address?.zipcode}
              </Typography>
            </div>
          </div>
          <Divider />
          <div className="info-item">
            <div className="icon-wrapper">
              <WorkIcon className="info-icon" />
            </div>
            <div className="text-item">
              <Typography className="label" color="text.secondary">
                {t("company")}
              </Typography>
              <Typography className="value">{data.company?.name}</Typography>
            </div>
          </div>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          {t("view_details")}
        </Button>
      </CardActions>
    </Card>
  );
}
