import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Grid, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/configStore";
import { registerAdminApi } from "../../redux/reducers/adminReducer";
import { toast } from "react-toastify";

export default function AddAdmin() {
  const dispatch: AppDispatch = useDispatch();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  //
  const form = useFormik({
    initialValues: {
      email: "",
      name: "",
      password: "",
      phone: "",
      role: "ADMIN",
    },
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .required("  Email không được bỏ trống ")
        .email(" Email không đúng định dạng "),
      password: Yup.string()
        .required("  Password không được bỏ trống ")
        .min(6, " Password từ 6 - 32 ký tự ")
        .max(32, "pass từ 6 - 32 ký tự !"),

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
    }),
    onSubmit: (values) => {
      console.log(values);
      dispatch(registerAdminApi(values))
        .then((res) => {
          handleClose();
        })
        .catch((err) => {});
    },
  });

  return (
    <div className="mb-3">
      <Button variant="outlined" onClick={handleClickOpen}>
        Add New Admin
      </Button>
      <Dialog
        className="dialog_admin"
        open={open}
        onClose={handleClose}
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle className="dialogTitle_admin">ADD NEW ADMIN</DialogTitle>
        <DialogContent className="dialogContent_admin">
          <form className="form" onSubmit={form.handleSubmit}>
            <Grid spacing={1} container mt={1}>
              <Grid item xs={12} md={6} mt={1}>
                <TextField
                  fullWidth
                  id="email"
                  name="email"
                  type="email"
                  label="Email"
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
                {form.errors.email && form.touched.email ? (
                  <div className="text-danger">{form.errors.email}</div>
                ) : (
                  ""
                )}
              </Grid>
              <Grid item xs={12} md={6} mt={1}>
                <TextField
                  fullWidth
                  id="name"
                  name="name"
                  type="text"
                  label="Name"
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
                {form.errors.name && form.touched.name ? (
                  <div className="text-danger">{form.errors.name}</div>
                ) : (
                  ""
                )}
              </Grid>
              <Grid item xs={12} md={6} mt={1}>
                <TextField
                  fullWidth
                  id="password"
                  name="password"
                  type="text"
                  label=" Password"
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
                {form.errors.password && form.touched.password ? (
                  <div className="text-danger">{form.errors.password}</div>
                ) : (
                  ""
                )}
              </Grid>
              <Grid item xs={12} md={6} mt={1}>
                <TextField
                  fullWidth
                  id="phone"
                  name="phone"
                  type="text"
                  label="Phone"
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
                {form.errors.phone && form.touched.phone ? (
                  <div className="text-danger">{form.errors.phone}</div>
                ) : (
                  ""
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
