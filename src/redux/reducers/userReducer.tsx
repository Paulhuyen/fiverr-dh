import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { swap } from "formik";
import { toast } from "react-toastify";
import { history } from "../../index";
import Swal from "sweetalert2";
import {
  ACCESS_TOKEN,
  getStore,
  getStoreJson,
  http,
  ID_LOGIN,
  ROLE_lOGIN,
  setCookie,
  setStore,
  setStoreJson,
  USER_LOGIN,
} from "../../util/setting";
import { AppDispatch } from "../configStore";
import {
  DangNhapView,
  ThongTinNguoiDung,
  ThongTinNguoiDungDangKi,
  ThongTinNguoiDungUpdate,
} from "../models/AuthModel";
import { ThueCongViec } from "../models/JobModel";
import { getUserApi } from "./adminReducer";
import { message } from "antd";

const initialState: any = {
  userLogin: {
    // id: "",
    // name: "",
    // email: "",
    // password: "",
    // phone: "",
    // birthday: "",
    // gender: false,
    // role: "",
    // skill: [],
    // certification: [],
  },
  role: "",
};

const userReducer = createSlice({
  name: "userReducer",
  initialState,
  reducers: {
    getProfileAction: (state, action: PayloadAction<ThongTinNguoiDung[]>) => {
      state.userLogin = action.payload;
    },
    signOutAction: (state, action) => {
      state.userLogin = {};
      toast.success("Đăng xuất thành công !");
    },
    getRoleAction: (state, action) => {
      state.role = action.payload;
    },
  },
});

export const { getProfileAction, signOutAction, getRoleAction } =
  userReducer.actions;

export default userReducer.reducer;

// -------------------------- action api ----------------------- //
//register
export const registerApi = (user: ThongTinNguoiDungDangKi) => {
  return async (dispatch: AppDispatch) => {
    try {
      const result = await http.post(`/auth/signup`, user);
      console.log(result);
      toast.success("Đăng kí tài khoản thành công !");
      history.push(`/login`);
    } catch (err: any) {
      console.log(err);
      toast.error(err.response.data.content);
    }
  };
};
//login
export const loginApi = (userLogin: DangNhapView) => {
  return async (dispatch: AppDispatch) => {
    try {
      const result = await http.post(`/auth/signin`, userLogin);
      console.log(result);
      // set token
      setCookie(ACCESS_TOKEN, result.data.content.token, 30);
      setStore(ACCESS_TOKEN, result.data.content.token);
      // set id
      setCookie(ID_LOGIN, result.data.content.user.id, 30);
      setStore(ID_LOGIN, result.data.content.user.id);
      // set role
      setCookie(ROLE_lOGIN, result.data.content.user.role, 30);
      setStore(ROLE_lOGIN, result.data.content.user.role);
      //
      if (getStore(ROLE_lOGIN) === "ADMIN") {
        history.push("/admin");
      } else if (getStore(ROLE_lOGIN) === "admin") {
        history.push("/admin");
      } else {
        history.push("/profile");
      }
      //
      toast.success("Đăng nhập tài khoản thành công !");
      dispatch(getProfileApi());
    } catch (err: any) {
      console.log(err);
      toast.error(err.response.data.content);
    }
  };
};
// profile
export const getProfileApi = (id_login = getStore(ID_LOGIN)) => {
  return async (dispatch: AppDispatch) => {
    try {
      const result = await http.get(`/users/${id_login}`);
      // console.log(result);
      const action = getProfileAction(result.data.content);
      dispatch(action);
      setStoreJson(USER_LOGIN, result.data.content);
    } catch (err) {
      console.log(err);
    }
  };
};
// update profile
export const updateProfile = (data: ThongTinNguoiDungUpdate) => {
  return async (dispatch: AppDispatch) => {
    try {
      http
        .put(`/users/${getStore(ID_LOGIN)}`, data)
        .finally(() => dispatch(getProfileApi()));
    } catch (err) {
      console.log(err);
    }
  };
};
// update avatar
export const updateAvatar = (file) => {
  return async (dispatch: AppDispatch) => {
    try {
      http
        .post(
          `/users/upload-avatar`,
          { formFile: file },
          {
            headers: { "Content-Type": "multipart/form-data" },
          }
        )
        .finally(() => dispatch(getProfileApi()));
    } catch (err) {
      console.log(err);
    }
  };
};
//
export const rentJobApi = (rentJob: ThueCongViec) => {
  return async (dispatch: AppDispatch) => {
    try {
      const result = await http.post("/thue-cong-viec", rentJob);
      console.log(result);
      // Swal.fire({
      //   icon: "success",
      //   title: "Thêm thành công !",
      // });
      message.success("Thêm thành công !");
      dispatch(getProfileApi());
      history.push(`/profile`);
    } catch (err) {
      console.log(err);
    }
  };
};
