import { changeLanguage } from "./reducers/settingsSlice";
import Header from "./components/header/header";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import React, { useEffect } from "react";
import "./assets/localization/i18n";
import RouterOutlet from "./Routes";

function App() {
  const { i18n } = useTranslation();
  const dispatch = useDispatch();
  const { language } = useSelector((state) => state.settings);

  useEffect(() => {
    //detect the language used when starting the project to set language switcher content
    dispatch(changeLanguage(i18n.language));
  }, []);

  return (
    <div>
      <Header lang={language} /> <RouterOutlet />
    </div>
  );
}

export default App;
