import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  NavLink,
  Outlet,
} from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/configStore";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import "./assets/scss/styles.scss";
import Index from "./pages/Index/Index";
import UserDetail from "./pages/UserDetail/UserDetail";
import HeaderHomeTemplate from "./templates/HeaderHomeTemplate";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import VerifyAuth from "./guard/VerifyAuth";
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
import { createBrowserHistory } from "history";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdminTemplate from "./templates/Admin/AdminTemplate";
import ManageUser from "./pages/AdminPages/ManageUser/ManageUser";
import ManageJob from "./pages/AdminPages/ManageJob/ManageJob";
import ManageJobType from "./pages/AdminPages/ManageJobType/ManageJobType";
import ManageService from "./pages/AdminPages/ManageService/ManageService";
import InfoProfile from "./pages/UserDetail/InfoProfile";
import VerifyAdmin from "./guard/VerifyAdmin";
import CustomAdmin from "./assets/CustomLogo/CustomAdmin";
import Categories from "./pages/Categories/Catagories";
import Result from "./pages/Result/Result";
import JobDetail from "./pages/JobDetail/JobDetail";
import JobTitle from "./pages/JobTitle/JobTitle";
//
export const history = createBrowserHistory({ window });

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <HistoryRouter history={history}>
      <Routes>
        {/*  */}
        <Route path="" element={<HeaderHomeTemplate />}>
          <Route index element={<Index />} />
          <Route path="*" element={<Navigate to="" />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="/categories">
            <Route path=":id" element={<Categories />}></Route>
          </Route>
          <Route path="/result">
            <Route path=":name" element={<Result />}></Route>
          </Route>
          <Route path="/jobdetail">
            <Route path=":id" element={<JobDetail />}></Route>
          </Route>
          <Route path="/title">
            <Route path=":id" element={<JobTitle />}></Route>
            <Route path="*" element={<Navigate to={"/home"} />}></Route>
          </Route>
        </Route>
        <Route
          path=""
          element={
            <VerifyAuth>
              <HeaderHomeTemplate />
            </VerifyAuth>
          }
        >
          <Route path="profile" element={<UserDetail />}></Route>
        </Route>
        {/*  */}
        <Route path="admin" element={<AdminTemplate />}>
          <Route index element={<CustomAdmin />} />
          <Route path="qlnd" element={<ManageUser />} />
          <Route path="qlcv" element={<ManageJob />} />
          <Route path="qllcv" element={<ManageJobType />} />
          <Route path="qldv" element={<ManageService />} />
        </Route>
        {/*  */}
      </Routes>
    </HistoryRouter>
    <ToastContainer />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
