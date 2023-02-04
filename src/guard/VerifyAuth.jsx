import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ACCESS_TOKEN, getStore } from "../util/setting";

const VerifyAuth = ({ children }) => {
  const isSignined = getStore(ACCESS_TOKEN);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isSignined) {
      // toastService.showToast("warning", "Invalid token", "Please login !");
      // alert("Xin hãy đăng nhập !");
      toast.warning("Yêu cầu đăng nhập !");
      navigate("/login");
    }
  }, [isSignined]);

  return <>{children}</>;
};

export default VerifyAuth;
