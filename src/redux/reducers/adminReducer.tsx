import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { message } from "antd";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { getStore, http } from "../../util/setting";
import { AppDispatch } from "../configStore";
import { ThemAdmin } from "../models/AdminModel";
import {
  ThongTinNguoiDung,
  ThongTinNguoiDungUpdate,
} from "../models/AuthModel";
import { CongViecViewModel, ThemCongViecViewModel } from "../models/JobModel";
import { getProfileApi } from "./userReducer";

const initialState: any = {
  allUser: [],
  allService: [],
  allCongViec: [],
  allJobType: [],
  user: {
    id: "",
    email: "",
    name: "",
    phone: "",
    birthday: "",
    role: "",
    certification: [],
    skill: [],
    gender: false,
  },
  job: {
    tenCongViec: "",
    danhGia: "",
    giaTien: "",
    nguoiTao: "",
    hinhAnh: "",
    moTa: "",
    maChiTietLoaiCongViec: "",
    moTaNgan: "",
    saoCongViec: "",
  },
};

const adminReducer = createSlice({
  name: "adminReducer",
  initialState,
  reducers: {
    getAllUser: (state, action: PayloadAction<ThongTinNguoiDung[]>) => {
      state.allUser = action.payload;
    },
    getAllCongViecAction: (
      state,
      action: PayloadAction<CongViecViewModel[]>
    ) => {
      state.allCongViec = action.payload;
    },
    getJobAction: (state, action: PayloadAction<CongViecViewModel>) => {
      state.job = action.payload;
    },
    getAllServiceHire: (state, action) => {
      state.allServiceHire = action.payload;
    },
    getAllJobType: (state, action) => {
      state.allJobType = action.payload;
    },
    getUserAction: (state, action: PayloadAction<ThongTinNguoiDungUpdate>) => {
      state.user = action.payload;
    },
    getUserSearch: (
      state,
      aciton: PayloadAction<ThongTinNguoiDungUpdate[]>
    ) => {
      state.allUser = aciton.payload;
    },
  },
});

export const {
  getAllUser,
  getAllCongViecAction,
  getJobAction,
  getAllServiceHire,
  getAllJobType,
  getUserAction,
  getUserSearch,
} = adminReducer.actions;

export default adminReducer.reducer;

// ---------------------------------------------------- action api -------------------------------------------------

// -------------------------------  manageUser ------------------------------ //
// danh s??ch user
export const getUserApi = () => {
  return async (dispatch: AppDispatch) => {
    try {
      const result = await http.get(`/users`);
      let allUser: ThongTinNguoiDung[] = result.data.content;
      dispatch(getAllUser(allUser));
    } catch (err) {
      console.log(err);
    }
  };
};
// xem th??ng tin user
export const userIdApi = (id: number) => {
  return async (dispatch: AppDispatch) => {
    try {
      const result = await http.get(`/users/${id}`);
      dispatch(getUserAction(result.data.content));
    } catch (err: any) {
      console.log(err);
      toast.error(err.response.data.message);
    }
  };
};
// th??m admin
export const registerAdminApi = (user: ThemAdmin) => {
  console.log(user);
  return async (dispatch: AppDispatch) => {
    try {
      const result = await http.post("/users", user);
      // console.log(result);
      toast.success("Th??m qu???n tr??? th??nh c??ng !");
      dispatch(getUserApi());
    } catch (err: any) {
      toast.error(err.response.data.content);
    }
  };
};
// xo?? user
export const delUserApi = (id: number) => {
  return async (dispatch: AppDispatch) => {
    try {
      const result = await http.delete(`/users?id=${id}`);
      toast.success(result.data.message);
      dispatch(getUserApi());
    } catch (err: any) {
      console.log(err);
      toast.error(err.response.data.message);
    }
  };
};
// s???a user
export const updateUserApi = (data: ThongTinNguoiDungUpdate) => {
  return async (dispatch: AppDispatch) => {
    try {
      http
        .put(`/users/${getStore("id_user")}`, data)
        .finally(() => dispatch(getProfileApi()));
    } catch (err) {
      console.log(err);
    }
  };
};
// t??m user
export const searchUserApi = (key: string) => {
  return async (dispatch: AppDispatch) => {
    try {
      let seacrchKey = encodeURI(key);
      const result = await http.get(`/users/search/${seacrchKey}`);
      console.log(result);
      let data = result.data.content;
      let newData = [...data].map((e, index) => {
        return (e = {
          ...e,
          certification: JSON.parse(e.certification),
          skill: JSON.parse(e.skill),
        });
      });
      // console.log(newData);
      dispatch(getUserSearch(newData));
    } catch (err) {
      console.log(err);
    }
  };
};

// -------------------------------  manageJobType ------------------------------ //
// Danh s??ch c??ng vi???c
export const getAllCongViecApi = () => {
  return async (dispatch: AppDispatch) => {
    try {
      const result = await http.get(`/cong-viec`);
      let allCongViec: CongViecViewModel[] = result.data.content;
      const action = getAllCongViecAction(allCongViec);
      dispatch(action);
    } catch (err) {
      console.log(err);
    }
  };
};
// xem th??ng tin c??ng vi???c
export const getJobApi = (id: number) => {
  return async (dispatch: AppDispatch) => {
    try {
      const result = await http.get(`/cong-viec/${id}`);
      dispatch(getJobAction(result.data.content));
    } catch (err) {
      console.log(err);
    }
  };
};
// th??m c??ng vi???c
export const addJobApi = (job: ThemCongViecViewModel, file: any) => {
  return async (dispatch: AppDispatch) => {
    const result = await http.post(`/cong-viec`, job);
    try {
      let data = new FormData();
      data.append("formFile", file);
      const avatar = await http.post(
        `/cong-viec/upload-hinh-cong-viec/${result.data.content.id}`,
        data
      );
      console.log(result);
      message.success("Th??m c??ng vi???c th??nh c??ng!");
      dispatch(getAllCongViecApi());
    } catch (err: any) {
      toast.error(err.response.data.content);
    }
  };
};
// xo?? c??ng vi???c
export const delCongViecApi = (id: number) => {
  return async (dispatch: AppDispatch) => {
    try {
      const result = await http.delete(`/cong-viec/${id}`);
      message.success(result.data.message);
      dispatch(getAllCongViecApi());
    } catch (err) {
      console.log(err);
      toast.error("Error");
    }
  };
};
// s???a c??ng vi???c
export const updateJobApi = (jobUpdate: ThemCongViecViewModel, file: any) => {
  return async (dispatch: AppDispatch) => {
    const result = await http.put(
      `/cong-viec/${getStore("id_job")}`,
      jobUpdate
    );
    try {
      let data = new FormData();
      data.append("formFile", file);
      const avatar = await http
        .post(`/cong-viec/upload-hinh-cong-viec/${getStore("id_job")}`, data)
        .finally(() => dispatch(getAllCongViecApi()));
    } catch (err) {
      console.log(err);
    }
  };
};

// -------------------------------  manageJobType ------------------------------ //
// danh s??ch jobtype
export const getJobTypeApi = () => {
  return async (dispatch: AppDispatch) => {
    try {
      const result = await http.get(`/loai-cong-viec`);
      dispatch(getAllJobType(result.data.content));
    } catch (err) {
      console.log(err);
    }
  };
};
// xo??
export const deleteApi = (url: string, id) => {
  return async (dispatch: AppDispatch) => {
    try {
      const result = await http.delete(url + id);
      message.success(result.data.message);
    } catch (err) {
      message.error("Delete fail !");
    }
  };
};
// c???p nh???t
export const updateApi = (url: string, id, data) => {
  return async (dispatch: AppDispatch) => {
    try {
      const result = await http.put(url + id, data);
      message.success(result.data.message);
    } catch (err) {
      message.error("Update fail !");
    }
  };
};
// th??m
export const addApi = (url: string, data) => {
  return async (dispatch: AppDispatch) => {
    try {
      const result = await http
        .post(url, data)
        .finally(() => dispatch(getJobTypeApi()));
      message.success(result.data.message);
    } catch (err) {
      message.error("Can't add new data !");
      dispatch(getJobTypeApi());
    }
  };
};
