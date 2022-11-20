import InfoDisplay from "../../components/infoDisplay/infoDisplay";
import PageTitle from "../../components/pageTitle/pageTitle";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useTranslation } from "react-i18next";
import Divider from "@mui/material/Divider";
import { useSelector } from "react-redux";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import "./userDetails.scss";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function UserDetails() {
  const { selectedUser } = useSelector((state) => state.users) || {};
  const navigate = useNavigate();
  const { t } = useTranslation();

  useEffect(() => {
    if (!Object.keys(selectedUser)?.length) {
      navigate("/user-list");
    }
  });

  return (
    <Box className="main-container">
      <PageTitle
        data={{
          title: "users_details_title",
          subtitle: "users_details_subtitle",
          subtitleParams: { username: selectedUser.username },
        }}
      />
      <Grid container>
        <Card className="card-container">
          <CardContent className="card-content">
            <div className="section">
              <Typography gutterBottom variant="h5" component="div">
                {t("personal_info")}
              </Typography>
              <div className="section-content">
                <div className="section-item">
                  <InfoDisplay
                    data={{
                      label: "username",
                      value: selectedUser.username,
                    }}
                  />
                </div>
                <div className="section-item">
                  {" "}
                  <InfoDisplay
                    data={{
                      label: "name",
                      value: selectedUser.name,
                    }}
                  />
                </div>

                <div className="section-item">
                  <InfoDisplay
                    data={{
                      label: "email",
                      value: selectedUser.email,
                    }}
                  />
                </div>
                <div className="section-item">
                  {" "}
                  <InfoDisplay
                    data={{
                      label: "phone",
                      value: selectedUser.phone,
                    }}
                  />
                </div>
              </div>
            </div>
            <Divider />

            <div className="section">
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                className="section-title"
              >
                {t("address")}
              </Typography>
              <div className="section-content">
                <div className="section-item">
                  <InfoDisplay
                    data={{
                      label: "city",
                      value: selectedUser.address?.city,
                    }}
                  />
                </div>
                <div className="section-item">
                  {" "}
                  <InfoDisplay
                    data={{
                      label: "street",
                      value: selectedUser.address?.street,
                    }}
                  />
                </div>

                <div className="section-item">
                  <InfoDisplay
                    data={{
                      label: "suite",
                      value: selectedUser.address?.suite,
                    }}
                  />
                </div>
                <div className="section-item">
                  {" "}
                  <InfoDisplay
                    data={{
                      label: "zipcode",
                      value: selectedUser.address?.zipcode,
                    }}
                  />
                </div>
                {/* <div className="section-item">
                  {" "}
                  <InfoDisplay
                    data={{
                      label: "view_location",
                      Icon: LocationOnIcon,
                    }}
                  />
                </div> */}
              </div>
            </div>
            <Divider />
            <div className="section">
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                className="section-title"
              >
                {t("company_info")}
              </Typography>
              <div className="section-content">
                <div className="section-item">
                  <InfoDisplay
                    data={{
                      label: "company",
                      value: selectedUser.company?.name,
                    }}
                  />
                </div>
                <div className="section-item">
                  {" "}
                  <InfoDisplay
                    data={{
                      label: "catch_phrase",
                      value: selectedUser.company?.catchPhrase,
                    }}
                  />
                </div>

                <div className="section-item">
                  <InfoDisplay
                    data={{
                      label: "bs",
                      value: selectedUser.company?.bs,
                    }}
                  />
                </div>
                <div className="section-item">
                  {" "}
                  <InfoDisplay
                    data={{
                      label: "website",
                      value: selectedUser.website,
                    }}
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </Grid>
    </Box>
  );
}
