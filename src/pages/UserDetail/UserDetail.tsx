import _ from "lodash";
import React, { useRef } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserUpdate from "../../HOC/UserUpdate/UserUpdate";
import { AppDispatch, RootState } from "../../redux/configStore";
import {
  CongViecViewModel,
  ThueCongViecViewModel,
} from "../../redux/models/JobModel";
import { delCVThueApi, getCongViecApi } from "../../redux/reducers/jobReducer";
import { ToastContainer, toast } from "react-toastify";
import { getProfileApi, updateAvatar } from "../../redux/reducers/userReducer";
import { GoogleOutlined, PlusOutlined } from "@ant-design/icons";
import { FaFacebook, FaGithub, FaTwitter } from "react-icons/fa";
import InfoProfile from "./InfoProfile";
import GigsProfile from "./GigsProfile";
type Props = {};
//
const img: string = require("../../assets/img/signup.jpg");
//
export default function UserDetail({}: Props) {
  //
  const refUpdateUserDialog = useRef<any>(null);
  const dispatch: AppDispatch = useDispatch();
  const { userLogin } = useSelector((state: RootState) => state.userReducer);
  const { congViecDaThue } = useSelector(
    (state: RootState) => state.jobReducer
  );
  console.log(congViecDaThue);
  //
  useEffect(() => {
    dispatch(getProfileApi());
  }, []);

  useEffect(() => {
    dispatch(getCongViecApi());
  }, []);

  //
  return (
    <div className="main_content my-3">
      <div className="main_wrapper">
        <div className="main_row row">
          <InfoProfile />
          <GigsProfile />
        </div>
      </div>
    </div>
  );
}
