import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ACCESS_TOKEN, getStore, ROLE_lOGIN } from "../util/setting";

const VerifyAdmin = ({ children }) => {
  const role = getStore(ROLE_lOGIN);
  const navigate = useNavigate();

  useEffect(() => {
    if (role !== "ADMIN") {
      alert(" Tài Khoản chưa đủ quyền truy cập Admin !");
      navigate("/login");
    }
  }, [role]);

  return <>{children}</>;
};

export default VerifyAdmin;
