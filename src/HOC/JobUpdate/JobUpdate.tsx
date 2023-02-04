// import React from 'react'

// type Props = {}

// export default function JobUpdate({}: Props) {
//   return (
//     <div>JobUpdate</div>
//   )
// }

import { useTheme } from "@mui/material/styles";
import {
  useMediaQuery,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Grid,
  TextField,
} from "@mui/material";
import { useState, useImperativeHandle, forwardRef, useEffect } from "react";
import { AppDispatch, RootState } from "../../redux/configStore";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { updateJobApi } from "../../redux/reducers/adminReducer";
import { message } from "antd";

const JobUpdate = (props, ref) => {
  const dispatch: AppDispatch = useDispatch();
  const { job } = useSelector((state: RootState) => state.adminReducer);
  //
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const [img, setImg] = useState();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  //
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleChangeImage = (e) => {
    console.log(e.target.files[0]);
    if (e.target.files) {
      e.target.files[0].preview = URL.createObjectURL(e.target.files[0]);
      setImg(e.target.files[0]);
    }
  };
  //
  const form = useFormik({
    enableReinitialize: true,
    initialValues: {
      tenCongViec: job?.tenCongViec,
      danhGia: job?.danhGia,
      giaTien: job?.giaTien,
      hinhAnh: job?.hinhAnh,
      moTa: job?.moTa,
      maChiTietLoaiCongViec: job?.maChiTietLoaiCongViec,
      moTaNgan: job?.moTaNgan,
      saoCongViec: job?.saoCongViec,
    },
    onSubmit: (values) => {
      console.log(values);
      dispatch(updateJobApi(values, img));
      message.success("Cập nhật thành công !");
    },
  });
  //
  useImperativeHandle(ref, () => ({
    open: (data?) => {
      form.setValues(job);
      setOpen(true);
    },
    close: () => setOpen(false),
  }));
  //
  return (
    <Dialog
      className="dialog"
      fullScreen={fullScreen}
      open={open}
      onClose={handleClose}
      aria-labelledby="responsive-dialog-title"
    >
      <DialogTitle className="dialogTitle" id="responsive-dialog-title">
        Update Job
      </DialogTitle>
      <DialogContent className="dialogContent">
        <form className="form" onSubmit={form.handleSubmit}>
          <Grid spacing={1} container mt={1}>
            <Grid item xs={12} md={12} mt={1}>
              <TextField
                fullWidth
                id="tenCongViec"
                name="tenCongViec"
                type="text"
                label="Name Job"
                value={form.values.tenCongViec}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
            </Grid>

            <Grid item xs={12} md={12} mt={1}>
              <TextField
                fullWidth
                id="danhGia"
                name="danhGia"
                type="text"
                label="Rate"
                value={form.values.danhGia}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
            </Grid>
            <Grid item xs={12} md={12} mt={1}>
              <TextField
                fullWidth
                id="giaTien"
                name="giaTien"
                type="text"
                label="Price"
                value={form.values.giaTien}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
            </Grid>
            <Grid item xs={12} md={12} mt={1}>
              <TextField
                fullWidth
                id="moTa"
                name="moTa"
                type="text"
                label="Discription"
                value={form.values.moTa}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
            </Grid>
            <Grid item xs={12} md={12} mt={1}>
              <TextField
                fullWidth
                id="moTaNgan"
                name="moTaNgan"
                type="text"
                label="Short Discription"
                value={form.values.moTaNgan}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
            </Grid>
            <Grid item xs={12} md={12} mt={1}>
              <TextField
                fullWidth
                id="maChiTietLoaiCongViec"
                name="maChiTietLoaiCongViec"
                type="text"
                label="Detail code"
                value={form.values.maChiTietLoaiCongViec}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
            </Grid>
            <Grid item xs={12} md={12} mt={1}>
              <TextField
                fullWidth
                id="saoCongViec"
                name="saoCongViec"
                type="text"
                label="Star Ratting"
                value={form.values.saoCongViec}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
            </Grid>
            <Grid item xs={12} md={12} mt={1}>
              <Button variant="contained" component="label">
                Upload Image
                <input
                  hidden
                  id="hinhAnh"
                  name="hinhAnh"
                  type="file"
                  onChange={handleChangeImage}
                  onBlur={form.handleBlur}
                />
              </Button>
              {img && (
                <img
                  src={URL.createObjectURL(img)}
                  width="90px"
                  className="ms-3"
                />
              )}
            </Grid>
          </Grid>
          <DialogActions className="dialogActions_admin">
            <Button
              type="submit"
              onClick={handleClose}
              className="btn_add"
              style={{ background: "#1dbf73", color: "#fff" }}
            >
              Save
            </Button>
            <Button
              onClick={handleClose}
              autoFocus
              className="btn_cancel"
              style={{ background: "#e14c4c", color: "#fff" }}
            >
              Cancel
            </Button>
          </DialogActions>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default forwardRef(JobUpdate);
