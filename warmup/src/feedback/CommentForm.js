import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import {Box, Button, Typography } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle'

function CommentForm() {
        
        const [open, setOpen] = useState(false);

        const handleClickOpen = () => {
        setOpen(true);
        };
    
        const handleClose = () => {
        setOpen(false);
        };


        return (

            <Box className="form">

                <Button variant="outlined" onClick={handleClickOpen}>
                Open form dialog
                </Button>
                <Dialog open={open} onClose={handleClose}>

                <DialogTitle>Subscribe</DialogTitle>

                <DialogContent>

                <DialogContentText>
                    To subscribe to this website, please enter your email address here. We
                    will send updates occasionally.
                </DialogContentText>
                    <TextField
                        id="outlined-multiline-static"
                        fullWidth={true}
                        // label="Comment"
                        multiline
                        rows={8}
                        // defaultValue="Share you opinion about this category...""Share you opinion about this category..."
                        placeholder="Share you opinion about this category..."
                    />

                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}> Cancel </Button>
                    <Button onClick={handleClose}> Subscribe </Button>
                </DialogActions>
                </Dialog>

            </Box> 
            
        );
}

export default CommentForm;