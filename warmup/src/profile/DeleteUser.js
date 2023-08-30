import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../common/UserContext";

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
    
    <button onClick={handleDelete} className="delete-button">
      Delete
    </button>
  );
};

export default DeleteUser;
