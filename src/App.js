import React from "react";
import RouterOutlet from "./Routes";

import { Header } from "./components/header/header";
import "./assets/localization/i18n";

function App() {
  return (
    <div>
      <Header /> <RouterOutlet />
    </div>
  );
}

export default App;
