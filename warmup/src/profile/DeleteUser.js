import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../common/UserContext";
import { Button } from "@mui/material";

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

const DeleteUser = () => {
  const navigate = useNavigate();
  const { deleteUser } = useContext(UserContext);

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
    
    <Button className="delete-button" onClick={handleDelete} sx={deleteBtnStyle}>
      Delete
    </Button>
  );
};

export default DeleteUser;
