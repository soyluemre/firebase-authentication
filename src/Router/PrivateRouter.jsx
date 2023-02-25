import React, { useContext } from "react";
import Login from "../pages/Login";
import { Outlet } from "react-router-dom";
import { LoginContext } from "../context/LoginContext";

const PrivateRouter = () => {
  const { giris } = useContext(LoginContext);
  return giris ? <Outlet /> : <Login />;
};

export default PrivateRouter;
