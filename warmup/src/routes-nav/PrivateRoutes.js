import React, { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import UserContext from "../common/UserContext";


function PrivateRoutes() {
  const { currentUser } = useContext(UserContext);

  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  return (
      <Outlet />
  );
}

export default PrivateRoutes