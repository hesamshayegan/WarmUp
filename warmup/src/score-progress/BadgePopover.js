import React, { useState } from 'react';
import { Popover, Typography, Box } from '@mui/material';



function BadgePopover({ badgeImage, badgeContent }) {
    
                const [anchorEl, setAnchorEl] = useState(null);

                const handleClick = (event) => {
                setAnchorEl(event.currentTarget);
                };
            
                const handleClose = () => {
                setAnchorEl(null);
                };

        return (
                    <>
                    <img
                        src={badgeImage}
                        width="85px"                        
                        onClick={handleClick}
                        style={{ 
                            width: '85px',
                            cursor: 'pointer'}}                      
                    />
                    
                    <Popover
                        open={Boolean(anchorEl)}
                        anchorEl={anchorEl}
                        onClose={handleClose}
                        anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                        }}
                        transformOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                        }}
                    >
                        <Box p={2} 
                             sx={{
                                backgroundImage: "radial-gradient(circle, rgba(0,230,107,1) 0%, rgba(148,187,233,1) 100%)"
                             }}                             
                        >
                        <Typography color="white">{badgeContent}</Typography>
                        </Box>
                    </Popover>
                    </>
        );
}

export default BadgePopover;
