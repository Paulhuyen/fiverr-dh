import {
  Button,
  DialogActions,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { ServiceType } from "../../../pages/AdminPages/ManageService/ManageService";
import { AppDispatch } from "../../../redux/configStore";
import { updateApi } from "../../../redux/reducers/adminReducer";

type Props = {
  service: ServiceType;
};

export default function ServiceUpdateForm({ service }: Props) {
  const dispatch: AppDispatch = useDispatch();
  const frm = useFormik({
    initialValues: {
      id: "id",
      maCongViec: "",
      maNguoiThue: "",
      ngayThue: "",
      hoanThanh: true,
    },
    onSubmit: (values: any) => {
      const payload = values;
      console.log(payload);
    },
  });

  return (
    <form className="form" onSubmit={frm.handleSubmit}>
      <Grid spacing={1} container mt={1}>
        <Grid item xs={12} md={6} mt={1}>
          <TextField
            color="success"
            fullWidth
            disabled
            id="id"
            name="id"
            type="text"
            label="ID"
            value={frm.values.id}
            onChange={frm.handleChange}
            onBlur={frm.handleBlur}
          />
        </Grid>
        <Grid item xs={12} md={6} mt={1}>
          <TextField
            color="success"
            fullWidth
            name="maCongViec"
            type="text"
            value={frm.values.maCongViec}
            onChange={frm.handleChange}
            onBlur={frm.handleBlur}
            label="Job ID"
          />
        </Grid>
        <Grid item xs={12} md={6} mt={1}>
          <TextField
            color="success"
            fullWidth
            name="maNguoiThue"
            type="text"
            value={frm.values.maNguoiThue}
            onChange={frm.handleChange}
            onBlur={frm.handleBlur}
            label="Hirer ID"
          />
        </Grid>
        <Grid item xs={12} md={6} mt={1}>
          <TextField
            color="success"
            fullWidth
            name="ngayThue"
            type="text"
            value={frm.values.ngayThue}
            onChange={frm.handleChange}
            onBlur={frm.handleBlur}
            label="Hire Date"
          />
        </Grid>
        <Grid item xs={12} md={12} mt={1}>
          <FormControl>
            <FormLabel color="success" id="demo-row-radio-buttons-group-label">
              Condition
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="hoanThanh"
              onChange={frm.handleChange}
            >
              <FormControlLabel
                value={true}
                control={<Radio color="success" />}
                label="Complete"
                name="hoanThanh"
              />
              <FormControlLabel
                color="success"
                value={false}
                control={<Radio color="success" />}
                label="Incomplete"
                name="hoanThanh"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
      </Grid>

      <DialogActions className="dialogActions">
        <Button data-bs-dismiss="modal" variant="contained" color="error" autoFocus className="btn_cancel">
          Cancel
        </Button>
        <Button type="submit" variant="contained" color="success" autoFocus className="btn_save">
          Save
        </Button>
      </DialogActions>
    </form>
  );
}
