import { Button, CardActionArea, CardActions } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import InfoDisplay from "../infoDisplay/infoDisplay";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import BadgeIcon from "@mui/icons-material/Badge";
import WorkIcon from "@mui/icons-material/Work";
import { useTranslation } from "react-i18next";
import Divider from "@mui/material/Divider";
import Card from "@mui/material/Card";
import React from "react";
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
          <InfoDisplay
            data={{ label: "name", value: data.name, Icon: BadgeIcon }}
          />

          <Divider />
          <InfoDisplay
            data={{
              label: "address",
              value: data.address.city,
              Icon: LocationOnIcon,
              subValues: [data.address.street, data.address.zipcode],
            }}
          />
          <Divider />
          <InfoDisplay
            data={{
              label: "company",
              value: data.company?.name,
              Icon: WorkIcon,
            }}
          />
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
