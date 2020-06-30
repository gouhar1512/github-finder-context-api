import React from "react";
import { Link } from "react-router-dom";

const UserItem = ({ user }) => {
  return (
    <div>
      <Link to={`/user/${user.login}`}>{user.login}</Link>
    </div>
  );
};

export default UserItem;
