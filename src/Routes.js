import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import UserListComponent from "./pages/user-list";

function RouterOutlet() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Navigate to="/user-list" />} />
        <Route exact path="/user-list" element={<UserListComponent />} />
      </Routes>
    </Router>
  );
}

export default RouterOutlet;
