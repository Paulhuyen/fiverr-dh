import React, { useState } from "react";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import { NavLink } from "react-router-dom";
import { registerApi } from "../../redux/reducers/userReducer";
import { AppDispatch } from "../../redux/configStore";
import { boolean } from "yup/lib/locale";

type Props = {};

//
const signup: string = require("../../assets/img/signup.jpg");
const eye = <FontAwesomeIcon icon={faEye} />;
export default function Register({}: Props) {
  // show pass
  const [passwordShow, setPasswordShow] = useState(false);
  const togglePassword = () => {
    setPasswordShow(!passwordShow);
  };
  //
  const dispatch: AppDispatch = useDispatch();
  //
  const frm = useFormik({
    initialValues: {
      email: "",
      password: "",
      passwordConfirm: "",
      name: "",
      phone: "",
      birthday: "",
      gender: true,
    },
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .required("  Email không được bỏ trống ")
        .email(" Email không đúng định dạng "),
      password: Yup.string()
        .required("  Password không được bỏ trống ")
        .min(6, " Password từ 6 - 32 ký tự ")
        .max(32, "pass từ 6 - 32 ký tự !"),
      passwordConfirm: Yup.string()
        .required("  PasswordConfirm không được bỏ trống ")
        .oneOf([Yup.ref("password")], "  Password phải trùng nhau "),
      name: Yup.string()
        .matches(
          /[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s]+$/,
          " Name Không đúng định dạng "
        )
        .required(" Name không được bỏ trống "),
      phone: Yup.string()
        .matches(
          /(84|0[3|5|7|8|9])+([0-9]{8})\b/,
          "  Phone phải từ 03 05 07 08 09 và có 10 số "
        )
        .required(" Phone không được bỏ trống "),
      birthday: Yup.string().required("Birthday không được bỏ trống"),
    }),
    onSubmit: (values) => {
      // console.log(values);
      const action = registerApi(values);
      dispatch(action);
    },
  });
  //
  return (
    <section className="signup" id="register">
      <div className="container_form">
        <div className="signup-content">
          <div className="signup-form">
            <h2 className="form-title-register">REGISTER</h2>
            <form
              className="register-form"
              id="register-form"
              onSubmit={frm.handleSubmit}
            >
              {/* name */}
              <div className="d-flex flex-row align-items-center mb-4">
                <i className="fas fa-user fa-lg me-3 fa-fw" />
                <div className="form-outline flex-fill mb-0">
                  <input
                    className="form-control"
                    id="name"
                    name="name"
                    required
                    placeholder="Your Name"
                    onChange={frm.handleChange}
                    onBlur={frm.handleBlur}
                  />
                  <div className="text-danger position-absolute mt-1">
                    {frm.errors.name && frm.touched.name ? (
                      <span className="text-danger">{frm.errors.name}</span>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>
              {/* email */}
              <div className="d-flex flex-row align-items-center mb-4">
                <i className="fas fa-envelope fa-lg me-3 fa-fw" />
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
              {/* pass */}
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
              {/* passconfirm */}
              <div className="d-flex flex-row align-items-center mb-4">
                <i className="fas fa-key fa-lg me-3 fa-fw" />
                <div
                  className="form-outline flex-fill mb-0"
                  style={{ position: "relative" }}
                >
                  <input
                    type={passwordShow ? "text" : "password"}
                    className="form-control"
                    id="passwordConfirm"
                    name="passwordConfirm"
                    required
                    placeholder="Repeat your password"
                    onChange={frm.handleChange}
                    onBlur={frm.handleBlur}
                  />
                  <div className="text-danger position-absolute mt-1">
                    {frm.errors.passwordConfirm &&
                    frm.touched.passwordConfirm ? (
                      <span className="text-danger">
                        {frm.errors.passwordConfirm}
                      </span>
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
              {/* phone */}
              <div className="d-flex flex-row align-items-center mb-4">
                <i className="fas fa-phone fa-lg me-3 fa-fw" />
                <div className="form-outline flex-fill mb-0">
                  <input
                    className="form-control"
                    id="phone"
                    name="phone"
                    required
                    placeholder="Your Phone"
                    onChange={frm.handleChange}
                    onBlur={frm.handleBlur}
                  />
                  <div className="text-danger position-absolute mt-1">
                    {frm.errors.phone && frm.touched.phone ? (
                      <span className="text-danger">{frm.errors.phone}</span>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>
              {/* date */}
              <div className="d-flex flex-row align-items-center mb-4">
                <i className="fa-solid fa-cake-candles me-3 fa-fw" />
                <div className="form-outline flex-fill mb-0">
                  <input
                    type="date"
                    className="form-control"
                    id="birthday"
                    name="birthday"
                    required
                    placeholder="Your birthday"
                    onChange={frm.handleChange}
                    onBlur={frm.handleBlur}
                  />
                  <div className="text-danger position-absolute mt-1">
                    {frm.errors.birthday && frm.touched.birthday ? (
                      <span className="text-danger">{frm.errors.birthday}</span>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>
              {/* gender */}
              <div id="gender" className="gender">
                <i className="fas fa-venus-mars fa-lg me-3 fa-fw" />
                <div className="radio gender_inp">
                  <input
                    id="male"
                    type="radio"
                    name="gender"
                    // value={true}
                    defaultValue="true"
                    defaultChecked
                    onChange={frm.handleChange}
                  />
                  <label className="radio-label" htmlFor="male">
                    Male
                  </label>
                  <input
                    id="female"
                    type="radio"
                    name="gender"
                    // value={false}
                    defaultValue="false"
                    onChange={frm.handleChange}
                  />
                  <label className="radio-label" htmlFor="female">
                    Female
                  </label>
                </div>
              </div>
              <div className="form-group mt-2-frm">
                <input
                  type="checkbox"
                  required
                  name="agree-term"
                  id="agree-term"
                  className="agree-term"
                />
                <label htmlFor="agree-term" className="label-agree-term">
                  <span>
                    <span />
                  </span>
                  I agree all statements in{" "}
                  <a href="#" className="term-service">
                    Terms of service
                  </a>
                </label>
              </div>
              <div className="form-group form-button">
                <button className="btn btn-primary btn_register" type="submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
          <div className="signup-image">
            <figure>
              <img src={signup} className="w-100" />
            </figure>
            <NavLink to="/login" className="signup-image-link">
              I am already member
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
}
