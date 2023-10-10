import React, { useState, useEffect, useContext } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';

import UserContext from '../common/UserContext';
import WarmUpApi from '../api/api';
import {Box, Button, Typography } from '@mui/material';

import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle'


export default function Test() {

        const [open, setOpen] = useState(false);

        const handleClickOpen = () => {
          setOpen(true);
        };
      
        const handleClose = () => {
          setOpen(false);
        };


          return (

            <Box>

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
              <Button onClick={handleClose}>Cancel</Button>
              <Button onClick={handleClose}>Subscribe</Button>
            </DialogActions>
            </Dialog>
            



            </Box> 
            
        );
}
