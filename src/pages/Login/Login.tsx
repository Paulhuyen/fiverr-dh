import React from "react";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useState } from "react";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { loginApi } from "../../redux/reducers/userReducer";
import { AppDispatch } from "../../redux/configStore";
type Props = {};

//
const signin: string = require("../../assets/img/signin.jpg");
const eye = <FontAwesomeIcon icon={faEye} />;
export default function Login({}: Props) {
  // const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();
  // show pass
  const [passwordShow, setPasswordShow] = useState(false);
  const togglePassword = () => {
    setPasswordShow(!passwordShow);
  };

  // Lấy dữ liệu từ form
  const frm = useFormik({
    initialValues: {
      // Dữ liệu ban đầu mặc định của form
      email: "",
      password: "",
    },
    validationSchema: Yup.object().shape({
      // check validation
      email: Yup.string()
        .required("Email không được bỏ trống !")
        .email("Email không đúng định dạng !"),
      password: Yup.string()
        .required("Password không được bỏ trống !")
        .min(6, "pass từ 6 - 32 ký tự !")
        .max(32, "pass từ 6 - 32 ký tự !"),
      // .matches(/cybersoft/, 'password không đúng đinh dạng !')
    }),
    onSubmit: (values) => {
      console.log(values);
      dispatch(loginApi(values));
    },
  });
  return (
    <section className="sign-in">
      <div className="container_form">
        <div className="signin-content">
          <div className="signin-image">
            <figure>
              <img src={signin} alt="sing up image" className="w-100" />
            </figure>
          </div>
          <div className="signin-form">
            <h2 className="form-title mb-5">Sign In to Fiverr</h2>
            <form
              className="login-form"
              id="login-form"
              onSubmit={frm.handleSubmit}
            >
              <div className="d-flex flex-row align-items-center mb-4">
                <i className="fas fa-user fa-lg me-3 fa-fw" />
                <div className="form-outline flex-fill mb-0">
                  <input
                    className="form-control"
                    id="email"
                    name="email"
                    required
                    placeholder="Your Email"
                    onChange={frm.handleChange}
                    onBlur={frm.handleBlur}
                  />
                  <div className="text-danger position-absolute mt-1">
                    {frm.errors.email && frm.touched.email ? (
                      <span className="text-danger">{frm.errors.email}</span>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>
              <div className="d-flex flex-row align-items-center mb-4">
                <i className="fas fa-lock fa-lg me-3 fa-fw" />
                <div
                  className="form-outline flex-fill mb-0"
                  style={{ position: "relative" }}
                >
                  <input
                    type={passwordShow ? "text" : "password"}
                    className="form-control"
                    id="password"
                    name="password"
                    required
                    placeholder="Your Password"
                    onChange={frm.handleChange}
                    onBlur={frm.handleBlur}
                  />
                  <div className="text-danger position-absolute mt-1">
                    {frm.errors.password && frm.touched.password ? (
                      <span className="text-danger">{frm.errors.password}</span>
                    ) : (
                      ""
                    )}
                  </div>
                  <button
                    type="button"
                    className="show"
                    style={{
                      position: "absolute",
                      top: 8.5,
                      right: 10,
                      border: "none",
                      opacity: "0.5",
                      background: "none",
                    }}
                    onClick={togglePassword}
                  >
                    <i>{eye}</i>
                  </button>
                </div>
              </div>
              <div className="form-group register d-flex justify-content-start align-items-baseline gap-3 ms-5 mt-5">
                <button className="btn btn-success login" type="submit">
                  Login
                </button>
                <NavLink className="text_register" to={"/register"}>
                  Register now ?
                </NavLink>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
