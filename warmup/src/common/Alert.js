import React from "react";
import { 
Box, Typography
} from "@mui/material";

function cleanErrorMessage(error) {
  if (error.startsWith('instance.')) {
    return error.substring('instance.'.length);
  }
  return error;
}


function Alert({ type = "danger", messages = [] }) {
  console.debug("Alert", "type=", type, "messages=", messages);

  return (
      <Box className={`alert alert-${type}`} role="alert">
        {messages.map(error => (
            <Typography
              key={error}
              sx={{
                color: "red",
                margin: "10px"
              }}
            >
              {cleanErrorMessage(error)}
            </Typography>
        ))}
      </Box>
  );
}

export default Alert;
