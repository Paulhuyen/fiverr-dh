import _ from "lodash";
import React, { useRef } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserUpdate from "../../HOC/UserUpdate/UserUpdate";
import { AppDispatch, RootState } from "../../redux/configStore";
import { getCongViecApi } from "../../redux/reducers/jobReducer";
import { ToastContainer, toast } from "react-toastify";
import {
  getProfileApi,
  signOutAction,
  updateAvatar,
} from "../../redux/reducers/userReducer";
import { GoogleOutlined, PlusOutlined } from "@ant-design/icons";
import { FaFacebook, FaGithub, FaTwitter } from "react-icons/fa";
import {
  ACCESS_TOKEN,
  clearStore,
  ID_LOGIN,
  ROLE_lOGIN,
  USER_LOGIN,
} from "../../util/setting";
import { history } from "../../index";
import { message } from "antd";
type Props = {};

export default function InfoProfile({}: Props) {
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
  return (
    <div className="info">
      <div className="info_sellercard_top">
        <div className="info_card">
          <div className="onl">
            <div className="user_online">
              <i className="dot">·</i>Online
            </div>
            <div className="dropdown">
              <button
                className="dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              ></button>
              <ul
                className="dropdown-menu p-0"
                aria-labelledby="dropdownMenuButton1"
              >
                <li>
                  <button
                    className="dropdown-item"
                    type="button"
                    onClick={() => {
                      clearStore(ACCESS_TOKEN);
                      clearStore(USER_LOGIN);
                      clearStore(ID_LOGIN);
                      clearStore(ROLE_lOGIN);
                      dispatch(signOutAction(userLogin));
                      history.push("/");
                    }}
                  >
                    Đăng Xuất
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div className="info_profile">
            <div className="info_profile_image">
              <label className="info_label">
                <div className="label_camera">
                  <span>
                    <i className="las la-camera icon" />
                  </span>
                </div>
                <input
                  className="label_inp"
                  type="file"
                  onChange={(e) => {
                    const file = _.head(e.target.files);
                    dispatch(updateAvatar(file))
                      .then((res) => {
                        message.success("Cập nhật avatar thành công !");
                      })
                      .catch((err) => {
                        toast.success("Error");
                      });
                  }}
                />
                <div className="image d-flex">
                  {userLogin?.avatar ? (
                    <img
                      src={userLogin?.avatar}
                      alt="avatar"
                      className="w-100 avatar"
                    />
                  ) : (
                    <p
                      className="text my-0 text-center"
                      style={{ fontSize: 16 }}
                    >
                      {userLogin?.name}
                    </p>
                  )}
                </div>
              </label>
            </div>
            <div className="info_profile_label">
              <p>{userLogin?.email}</p>
              <div className="btn_update">
                <UserUpdate ref={refUpdateUserDialog} />
                <button
                  className="edit"
                  onClick={() => {
                    refUpdateUserDialog.current.open();
                  }}
                >
                  <i className="fa-solid fa-pen icon" />
                </button>
              </div>
            </div>
          </div>
          <div className="info_desc">
            <div className="location">
              <div className="location_left">
                <i className="las la-map-marker-alt icon" />
                <span> From</span>
              </div>
              <div className="location_right">
                <span>Vietnam</span>
              </div>
            </div>
            <div className="location">
              <div className="location_left">
                <i className="fa-solid fa-user icon" />
                <span> Member since</span>
              </div>
              <div className="location_right">
                <span className="text">Oct2022</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="info_sellercard_bottom">
        <div className="info_card">
          <div className="inner_item">
            <div className="inner_row">
              <h3>Description</h3>
              <button
                className="edit"
                onClick={() => {
                  refUpdateUserDialog.current.open();
                }}
              >
                <i className="fa-solid fa-pen icon" />
              </button>
            </div>
            <div className="d-flex align-items-center gap-5">
              <h6>Name:</h6>
              <p className="lorem">{userLogin?.name}</p>
            </div>
            <div className="d-flex align-items-center gap-5">
              <h6>Phone:</h6>
              <p className="lorem">{userLogin?.phone}</p>
            </div>
            <div className="d-flex align-items-center gap-5">
              <h6>Birthday:</h6>
              <p className="lorem">{userLogin?.birthday}</p>
            </div>
          </div>
          <div className="inner_item">
            <div className="inner_row">
              <h3>Languages</h3>
            </div>
            <p className="lorem">
              English - <span>Basic</span>
            </p>
            <p className="lorem">
              Vietnamese (Tiếng Việt) - <span>Native/Bilingual</span>
            </p>
          </div>
          <div className="inner_item">
            <div className="inner_row">
              <h3>Skills</h3>
              <button
                className="edit"
                onClick={() => {
                  refUpdateUserDialog.current.open();
                }}
              >
                <i className="fa-solid fa-pen icon" />
              </button>
            </div>
            <div className="d-flex flex-row flex-wrap">
              {userLogin?.skill?.map((item: string, index: number) => {
                return (
                  <p className="lorem mx-1" key={index}>
                    {item}
                  </p>
                );
              })}
            </div>
          </div>
          <div className="inner_item">
            <div className="inner_row">
              <h3>Education</h3>
              <button
                className="edit"
                onClick={() => {
                  refUpdateUserDialog.current.open();
                }}
              >
                <i className="fa-solid fa-pen icon" />
              </button>
            </div>
            <p className="lorem"> CYBERSOFT</p>
          </div>
          <div className="inner_item">
            <div className="inner_row">
              <h3>Certification</h3>
              <button
                className="edit"
                onClick={() => {
                  refUpdateUserDialog.current.open();
                }}
              >
                <i className="fa-solid fa-pen icon" />
              </button>
            </div>
            <div className="d-flex flex-row flex-wrap">
              {userLogin?.certification?.map((item: string, index: number) => {
                return (
                  <p className="lorem mx-1" key={index}>
                    {item}
                  </p>
                );
              })}
            </div>
          </div>
          <div className="inner_item" style={{ border: "none" }}>
            <div className="inner_row">
              <h3>Linked Accounts</h3>
            </div>
            <ul className="ul">
              <li className="li">
                <FaFacebook />
                <a href="#" className="btn-connect">
                  Facebook
                </a>
              </li>
              <li className="li">
                <GoogleOutlined />
                <a href="#" className="btn-connect cl-gg">
                  Google
                </a>
              </li>
              <li className="li">
                <FaGithub />
                <a href="#" className="btn-connect">
                  Github
                </a>
              </li>
              <li className="li">
                <FaTwitter />
                <a className="btn-connect">Twitter</a>
              </li>
              <li className="li">
                <PlusOutlined />
                <a href="#" className="btn-connect">
                  Dirbble
                </a>
              </li>
              <li className="li">
                <PlusOutlined />
                <a href="#" className="btn-connect">
                  Stack Overflow
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
