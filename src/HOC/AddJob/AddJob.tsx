import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Grid, Input, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { AppDispatch } from "../../redux/configStore";
import { addJobApi } from "../../redux/reducers/adminReducer";
import _, { method, rest, result } from "lodash";
export default function AddJob() {
  const dispatch: AppDispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const [img, setImg] = useState();

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
    initialValues: {
      tenCongViec: "",
      danhGia: 0,
      giaTien: 0,
      hinhAnh: "",
      moTa: "",
      maChiTietLoaiCongViec: 0,
      moTaNgan: "",
      saoCongViec: 0,
    },
    validationSchema: Yup.object().shape({
      tenCongViec: Yup.string().required(" Không được bỏ trống !"),
      moTa: Yup.string().required(" Không được bỏ trống !"),
      moTaNgan: Yup.string().required(" Không được bỏ trống !"),
      danhGia: Yup.string().matches(/^[0-9]+$/, "  Không đúng định dạng !"),
      maChiTietLoaiCongViec: Yup.string().matches(
        /^[0-9]+$/,
        "  Không đúng định dạng !"
      ),
      saoCongViec: Yup.string().matches(/^[0-9]+$/, "  Không đúng định dạng !"),
      giaTien: Yup.string()
        .matches(/^[0-9]+$/, "  Không đúng định dạng !")
        .required(" Không được bỏ trống !"),
    }),
    onSubmit: (values) => {
      console.log(values);
      dispatch(addJobApi(values, img))
        .then(() => {
          handleClose();
        })
        .catch((err) => {});
    },
  });

  return (
    <div className="mb-3">
      <Button variant="outlined" onClick={handleClickOpen}>
        ADD New Job
      </Button>
      <Dialog
        className="dialog_admin"
        open={open}
        onClose={handleClose}
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle className="dialogTitle_admin">ADD NEW JOB</DialogTitle>
        <DialogContent className="dialogContent_admin">
          <form className="form" onSubmit={form.handleSubmit}>
            <Grid spacing={1} container mt={1}>
              <Grid item xs={12} md={12} mt={1}>
                <TextField
                  fullWidth
                  id="tenCongViec"
                  name="tenCongViec"
                  type="text"
                  label="Name Job"
                  required
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
                {form.errors.tenCongViec && form.touched.tenCongViec ? (
                  <div className="text-danger">{form.errors.tenCongViec}</div>
                ) : (
                  ""
                )}
              </Grid>
              <Grid item xs={12} md={12} mt={1}>
                <TextField
                  fullWidth
                  id="moTa"
                  name="moTa"
                  type="text"
                  label="Discription"
                  required
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
                {form.errors.moTa && form.touched.moTa ? (
                  <div className="text-danger">{form.errors.moTa}</div>
                ) : (
                  ""
                )}
              </Grid>
              <Grid item xs={12} md={12} mt={1}>
                <TextField
                  fullWidth
                  id="moTaNgan"
                  name="moTaNgan"
                  type="text"
                  label="Short Discription"
                  required
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
                {form.errors.moTaNgan && form.touched.moTaNgan ? (
                  <div className="text-danger">{form.errors.moTaNgan}</div>
                ) : (
                  ""
                )}
              </Grid>
              <Grid item xs={12} md={12} mt={1}>
                <TextField
                  fullWidth
                  id="giaTien"
                  name="giaTien"
                  type="text"
                  label="Price"
                  required
                  placeholder="number"
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
                {form.errors.giaTien && form.touched.giaTien ? (
                  <div className="text-danger">{form.errors.giaTien}</div>
                ) : (
                  ""
                )}
              </Grid>
              <Grid item xs={12} md={12} mt={1}>
                <TextField
                  fullWidth
                  id="danhGia"
                  name="danhGia"
                  type="text"
                  label="Rate"
                  placeholder=" number"
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
                {form.errors.danhGia && form.touched.danhGia ? (
                  <div className="text-danger">{form.errors.danhGia}</div>
                ) : (
                  ""
                )}
              </Grid>
              <Grid item xs={12} md={12} mt={1}>
                <TextField
                  fullWidth
                  id="maChiTietLoaiCongViec"
                  name="maChiTietLoaiCongViec"
                  type="text"
                  label="Detail code"
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
                {form.errors.maChiTietLoaiCongViec &&
                form.touched.maChiTietLoaiCongViec ? (
                  <div className="text-danger">
                    {form.errors.maChiTietLoaiCongViec}
                  </div>
                ) : (
                  ""
                )}
              </Grid>
              <Grid item xs={12} md={12} mt={1}>
                <TextField
                  fullWidth
                  id="saoCongViec"
                  name="saoCongViec"
                  type="text"
                  placeholder=" number (1 -> 5)"
                  label="Star Ratting"
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
                {form.errors.saoCongViec && form.touched.saoCongViec ? (
                  <div className="text-danger">{form.errors.saoCongViec}</div>
                ) : (
                  ""
                )}
              </Grid>
              <Grid item xs={12} md={12} mt={1}>
                <Button variant="contained" component="label">
                  Upload Image
                  <input
                    hidden
                    id="hinhAnh"
                    name="hinhAnh"
                    type="file"
                    required
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
              <Button type="submit" className="btn_add">
                Save
              </Button>
              <Button onClick={handleClose} autoFocus className="btn_cancel">
                Cancel
              </Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
