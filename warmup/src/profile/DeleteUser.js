import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../common/UserContext";

import {
Button, Box, Dialog, DialogActions,
DialogContent, DialogContentText,
DialogTitle
} from '@mui/material'


const deleteBtnStyle = {
  background: "#E57D74",
  borderRadius: "30px",
  border: "1px solid red",
  color: "#953129",
  height: "48px",
  width: "100px",
  padding: "5px",
  marginRight: "5px"
}

const deleteBtnStyleInt = {
  background: "#E57D74",
  borderRadius: "30px",
  border: "1px solid red",
  color: "#953129",
  height: "40px",
  width: "80px",
  padding: "5px",
  marginRight: "5px"
}

const cancleBtnStyle = {
  background: "#1CA168",
  borderRadius: "30px",
  border: "1px solid #93FF00",
  color: "white",
  height: "40px",
  width: "80px",
  padding: "5px",
  marginRight: "5px"
}

const DeleteUser = () => {
  const navigate = useNavigate();
  const { deleteUser } = useContext(UserContext);
  const { currentUser } = useContext(UserContext);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  console.log('currentUser', currentUser.username)
  const handleDelete = async () => {
    const result = await deleteUser();

    if (result.success) {
      console.log("User deleted successfully");
      navigate("/");
    } else {
      console.error("Error deleting user");
    }
  };

  return (
    
    <Box>

    <Button className="delete-button"
            onClick={handleClickOpen}
            sx={deleteBtnStyle}
            disabled={
              currentUser.username === 'testuser' ||
              currentUser.username === 'Kate' ||
              currentUser.username === 'Sophia'
            }
    >
      Delete
    </Button>

      <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Delete profile"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete your account permanently?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} sx={cancleBtnStyle}>Cancel</Button>
          <Button onClick={handleDelete}
                  autoFocus
                  sx={deleteBtnStyleInt}                  
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>

    </Box>

  );
};

export default DeleteUser;
