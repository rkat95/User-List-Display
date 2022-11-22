import { languages } from "../../assets/configuration/config";
import { changeLanguage } from "../../reducers/settingsSlice";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import { useTranslation } from "react-i18next";
import Select from "@mui/material/Select";
import { useDispatch } from "react-redux";
import Box from "@mui/material/Box";
import "./languageSwitcher";
import React from "react";

export default function LanguageSwitcher(props) {
  const selectedLanguage = props.lang || "en";
  const { i18n } = useTranslation();

  const dispatch = useDispatch();

  const handleChange = (event) => {
    const lang = event.target.value;

    i18n.changeLanguage(lang);
    dispatch(changeLanguage(lang));
  };

  return (
    <Box className="lang-switcher-container">
      <FormControl fullWidth>
        <Select
          className="lang-switcher-select"
          id="language-switcher"
          value={selectedLanguage}
          onChange={handleChange}
        >
          {languages.map((lang, index) => {
            const Flag = lang.flag;
            return (
              <MenuItem key={index} value={lang.code} className="lang-item">
                <Flag className="flag" />
                {lang.label}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Box>
  );
}
