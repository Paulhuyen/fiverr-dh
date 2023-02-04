import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { http } from "../../util/setting";
import { AppDispatch } from "../configStore";
import { BinhLuan } from "../models/binhLuanModel";

type InitialState = {
  arrComment: BinhLuan[];
  comment: BinhLuan;
};

const initialState: InitialState = {
  arrComment: [],
  comment: {
    id: 0,
    maCongViec: 0,
    maNguoiBinhLuan: 0,
    ngayBinhLuan: "",
    noiDung: "",
    saoBinhLuan: 0,
  },
};

const binhLuanReducer = createSlice({
  name: "binhLuanReducer",
  initialState,
  reducers: {
    getJobComment: (state, action: PayloadAction<BinhLuan[]>) => {
      state.arrComment = action.payload;
    },
  },
});

export const { getJobComment } = binhLuanReducer.actions;

export default binhLuanReducer.reducer;

//----------------API------------------------
export const getJobCommentApi = (id: string | number) => {
  return async (dispatch: AppDispatch) => {
    try {
      const result = await http.get(
        `/binh-luan/lay-binh-luan-theo-cong-viec/${id}`
      );
      const comments: BinhLuan[] = result.data.content;
      dispatch(getJobComment(comments));
    } catch (err) {
      console.log(err);
    }
  };
};
export const postCommentApi = (comment: BinhLuan) => {
  return async (dispatch: AppDispatch) => {
    try {
      const result = await http.post("/binh-luan", comment);
      console.log(result);
    } catch (err) {
      console.log(err);
    }
  };
};
