import React from 'react';
import { Box } from "@mui/material";
import RingLoader from "react-spinners/RingLoader";

function LoadingSpinner() {
    
    return (
        <Box sx={{ 
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
        }}>     
            <RingLoader
                color="#33FF00"                
            />
        </Box>
    )
}

export default LoadingSpinner;