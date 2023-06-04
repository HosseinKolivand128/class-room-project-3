import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import Typography from "@mui/material/Typography";

import { useReducer, useState } from "react";

export default function AddPerson({ title, Organization, Class, icon }) {
  const [open, setOpen] = useState(false);
  const [data, dispatchInputData] = useReducer(formReducer, initialValue);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleUserName = (e) => {
    dispatchInputData({
      type: ActionType.UserName,
      value: e.target.value,
    });
  };
  const passwordHandler = (e) => {
    dispatchInputData({
      type: ActionType.Password,
      value: e.target.value,
    });
  };
  const confirmPasswordHandler = (e) => {
    dispatchInputData({
      type: ActionType.ConfrimPassword,
      value: e.target.value,
    });
  };

  const handleAddPerson = () => {
    setOpen(false);
  };

  return (
    <div style={{ margin: "10px" }}>
      <Button
        variant="outlined"
        sx={{ width: "280px", borderRadius: "15px", letterSpacing: "2px" }}
        endIcon={icon}
        onClick={handleClickOpen}
      >
        {title}
      </Button>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle sx={{ display: "flex", alignItems: "center" }}>
          {title} <GroupAddIcon sx={{ marginLeft: "5px" }} />
        </DialogTitle>

        <DialogContent sx={{ width: "300px" }}>
          {/* -------------------------------------------- username */}

          <TextField
            autoFocus
            onChange={handleUserName}
            value={data.userName}
            margin="dense"
            id="username"
            label="Username"
            type="text"
            fullWidth
            variant="standard"
          />
          {/* -------------------------------------------- password */}
          <TextField
            onChange={passwordHandler}
            required
            fullWidth
            value={data.password}
            // error={error.password}
            // value={data.password}
            id="Password"
            label="Password"
            // InputProps={{
            //   startAdornment: (
            //     <InputAdornment position="start">
            //       <PasswordIcon />
            //     </InputAdornment>
            //   ),
            // }}
            variant="standard"
          />
          {/*-------------------------------------------- confirm pasword */}
          <TextField
            onChange={confirmPasswordHandler}
            required
            fullWidth
            value={data.confrimPassword}
            // error={error.password}
            // value={data.password}
            id="Password"
            label="ConfirmPassword"
            // InputProps={{
            //   startAdornment: (
            //     <InputAdornment position="start">
            //       <PasswordIcon />
            //     </InputAdornment>
            //   ),
            // }}
            variant="standard"
          />
          <Typography variant="overline" display="block" gutterBottom>
            {Organization} - {Class}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleAddPerson}>Add</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

const ActionType = {
  UserName: "__UserName",
  Password: "__Password",
  ConfrimPassword: "ConfrimPassword",
};

const formReducer = (state, action) => {
  switch (action.type) {
    case ActionType.UserName:
      return { ...state, userName: action.value };
    case ActionType.Password:
      return { ...state, password: action.value };
    case ActionType.ConfrimPassword:
      return { ...state, confrimPassword: action.value };
    default:
      break;
  }
};

const initialValue = {
  userName: "",
  password: "",
  confrimPassword: "",
};
