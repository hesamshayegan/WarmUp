import React from 'react';
import LoadingSpinner from '../common/LoadingSpinner';
import { Box } from "@mui/material";


function Test() {
    

  return (
      
      <Box sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}>
        <LoadingSpinner />
      </Box>


  );
}

export default Test;