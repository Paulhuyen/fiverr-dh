import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import CustomLogo from "../../assets/CustomLogo/CustomLogo";
import { AppDispatch, RootState } from "../../redux/configStore";
import { FaBars } from "react-icons/fa";
import { getProfileApi } from "../../redux/reducers/userReducer";
import { history } from "../../index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { timeout } from "../../util/setting";
//
type Props = {
  fill?: string;
};
const logo: string = require("../../assets/img/logo.png");
library.add(fas);
//
export default function Header({}: Props) {
  const dispatch: AppDispatch = useDispatch();
  const [param, setParam] = useState("");
  const location = useLocation();
  const [scrollPosition, setScrollPosition] = useState(0);

  //
  const navigate = useNavigate();
  const { userLogin } = useSelector((state: RootState) => state.userReducer);
  console.log(userLogin);
  //
  const renderItem = () => {
    if (Object.keys(userLogin).length === 0) {
      return <NavLink to={"/login"}>Sign in</NavLink>;
    } else {
      return (
        <NavLink to={"/profile"}>
          {userLogin?.avatar ? (
            <figure className="mb-0">
              <img
                src={userLogin?.avatar}
                alt="avatar"
                className="avatar"
                style={{ borderRadius: 50, width: 50, height: 50 }}
              />
            </figure>
          ) : (
            <p className="text my-0">{userLogin?.name}</p>
          )}
        </NavLink>
      );
    }
  };
  const renderItem2 = () => {
    if (Object.keys(userLogin).length === 0) {
      return (
        <li
          className="join"
          onClick={() => {
            navigate("/register");
          }}
        >
          <NavLink to={"/register"}>Join</NavLink>
        </li>
      );
    } else {
      return (
        <li
          className="join d-none"
          onClick={() => {
            navigate("/register");
          }}
        >
          <NavLink to={"/register"}>Join</NavLink>
        </li>
      );
    }
  };
  const renderItemNav = () => {
    if (Object.keys(userLogin).length === 0) {
      return (
        <NavLink className="btn btn-success w-100" to={"/login"}>
          Sign in
        </NavLink>
      );
    } else {
      return (
        <div>
          {userLogin?.avatar ? (
            <figure className="mb-0 d-flex">
              <img
                src={userLogin?.avatar}
                alt="avatar"
                className="nav_avatar"
                style={{ borderRadius: 50, width: 50, height: 50 }}
              />
              <div className="d-flex flex-column align-items-start  mx-3">
                <h6>{userLogin?.name}</h6>
                <p>{userLogin?.email}</p>
              </div>
            </figure>
          ) : (
            <div className="d-flex flex-column align-items-start">
              <h6>{userLogin?.name}</h6>
              <p>{userLogin?.email}</p>
            </div>
          )}
        </div>
      );
    }
  };
  useEffect(() => {
    dispatch(getProfileApi());
  }, []);

  useEffect(() => {
    const updatePosition = () => {
      if (location.pathname === "/") {
        setScrollPosition(window.pageYOffset);
      } else if (location.pathname !== "/") {
        setScrollPosition(0);
      }
    };
    window.addEventListener("scroll", updatePosition);
    updatePosition();
    return () => window.removeEventListener("scroll", updatePosition);
  }, [location.pathname]);
  //
  const handelSubmit = async (e) => {
    e.preventDefault();
    await timeout(1000);
    navigate(`/result/${param}`);
  };
  const handelChange = (e) => {
    setParam(e.target.value);
  };
  //
  return (
    <header
      className={
        scrollPosition > 0 || location.pathname !== "/"
          ? "header"
          : "header header-active"
      }
    >
      <div className="header_wrapper">
        <div className="header_row">
          <div className="left">
            <div className="d-flex">
              <div>
                <button
                  className="nav_icon"
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasExample"
                  aria-controls="offcanvasExample"
                >
                  <FaBars />
                </button>
                <div
                  className="offcanvas offcanvas-start"
                  tabIndex={-1}
                  id="offcanvasExample"
                  aria-labelledby="offcanvasExampleLabel"
                >
                  <div className="offcanvas-header align-items-center">
                    <div className="d-flex gap-3">{renderItemNav()}</div>
                    <button
                      type="button"
                      className="btn-close text-reset d-flex align-items-center"
                      data-bs-dismiss="offcanvas"
                      aria-label="Close"
                      style={{ boxShadow: "none" }}
                    >
                      {/* <ImCross /> */}
                    </button>
                  </div>
                  <div className="offcanvas-body">
                    <div className="nav_item">
                      <div className="nav_item_ul d-flex flex-column ">
                        <NavLink to={""} style={{ color: "#1bdf73" }}>
                          Fiverr Pro
                        </NavLink>
                        <NavLink to={""}>Explore</NavLink>
                        <NavLink to={""}>Messages</NavLink>
                        <NavLink to={""}>List</NavLink>
                        <NavLink to={""}>Orders</NavLink>
                      </div>
                    </div>
                    <div className="dropdown mt-3">
                      <div
                        className=" dropdown-toggle"
                        id="dropdownMenuButton"
                        data-bs-toggle="dropdown"
                      >
                        Help & Resources
                      </div>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuButton"
                      >
                        <li>
                          <a className="dropdown-item" href="#">
                            Help Center
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Fiverr Forum
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Fiverr Blogs
                          </a>
                        </li>
                        <div className="tW6GKQA">
                          <div className="Wb8wmFx" />
                        </div>
                        <li>
                          <a className="dropdown-item" href="#">
                            Ask the Community
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Contact Support
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <NavLink to={""} className="logo">
                <CustomLogo
                  color={
                    scrollPosition > 0 || location.pathname !== "/"
                      ? "#404145"
                      : "#fff"
                  }
                />
              </NavLink>
            </div>
            <div className="header_search">
              <form className="search_form" onSubmit={handelSubmit}>
                <div className="search">
                  <span>
                    <input
                      name="resultParam"
                      type="search"
                      className="inp"
                      placeholder="Find Services"
                      onChange={handelChange}
                    />
                  </span>
                </div>
                <button className="btn">Search</button>
              </form>
            </div>
          </div>
          <div className="right">
            <nav className="header_navbar">
              <ul className="ul">
                <li className="li_1 li_fiverr">Fiverr Business</li>
                <li className="li_1">Explore</li>
                <li className="li_1">
                  <FontAwesomeIcon
                    icon={["fas", "globe"]}
                    className="fa mx-1"
                  />
                  English
                </li>
                <li className="li_1">US$ USD</li>
                <li className="li_1">Become a Seller</li>
                <li>{renderItem()}</li>
                {renderItem2()}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
