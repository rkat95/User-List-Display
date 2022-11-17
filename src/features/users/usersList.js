import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { getUsersList } from "./usersSlice";

export function UserListComponent() {
  const dispatch = useDispatch();
  const { data, status, error } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(getUsersList());
  }, [dispatch]);

  return (
    <div>
      <ol>
        {data.map((user) => (
          <li>
            <p>{user.name}</p>
            <p>{user.username}</p>
            <p>{user.city}</p>
            <p>{user.company.name}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default UserListComponent;
