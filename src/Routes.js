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
        <Route
          exact
          path="/"
          element={<Navigate to="/User-Display-List/user-list" />}
        />
        <Route
          exact
          path="/User-Display-List/user-list"
          element={<UserListComponent />}
        />
        <Route
          exact
          path="/User-Display-List/user-details"
          element={<UserDetails />}
        />
        <Route
          path="*"
          element={<Navigate to="/User-Display-List/user-list" />}
        />
      </Routes>
    </Router>
  );
}

export default RouterOutlet;
