import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import UserDetails from "./features/userDetails/userDetails";
import UserListComponent from "./features/users/usersList";

function RouterOutlet() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Navigate to="/user-list" />} />
        <Route exact path="/user-list" element={<UserListComponent />} />
        <Route exact path="/user-details" element={<UserDetails />} />
        <Route path="*" element={<Navigate to="/user-list" />} />
      </Routes>
    </Router>
  );
}

export default RouterOutlet;
