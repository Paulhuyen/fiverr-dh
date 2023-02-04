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
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Autocomplete,
  Chip,
} from "@mui/material";
import {
  useState,
  useImperativeHandle,
  forwardRef,
  useEffect,
  Component,
} from "react";
import { AppDispatch, RootState } from "../../redux/configStore";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";

const Modal = (props, ref) => {
  const dispatch: AppDispatch = useDispatch();

  const { Component } = useSelector((state: RootState) => state.modalReducer);

  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  //
  useImperativeHandle(ref, () => ({
    open: (data?) => {
      setOpen(true);
    },
    close: () => setOpen(false),
  }));
  //
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  //

  return (
    <div
      className="modal fade"
      id="modalId"
      tabIndex={-1}
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      role="dialog"
      aria-labelledby="modalTitleId"
      aria-hidden="true"
    >
      <div
        className="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-sm"
        role="document"
      >
        <div className="modal-content">
          
          <div className="modal-body">{Component}</div>
        </div>
      </div>
    </div>
  );
};

export default forwardRef(Modal);
