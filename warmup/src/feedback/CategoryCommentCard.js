import React, { useEffect, useContext, useState } from 'react';
import WarmUpApi from '../api/api';
import ScoreContext from '../common/ScoreContext';
import UserContext from '../common/UserContext';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Box, Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle'


import plasticBadge from "../static/images/badges/plastic-badge.png"
import fossilBadge from "../static/images/badges/fossil-badge.png"
import deforestationBadge from "../static/images/badges/deforestation-badge.png"
import agricultureBadge from "../static/images/badges/agriculture-badge.png"
import transportationBadge from "../static/images/badges/transportation-badge.png"
import foodBadge from "../static/images/badges/food-badge.png"




const CategoryCommentCard = ({ id, category, content}) => {

    const { scoreLog, setScoreLog } = useContext(ScoreContext);
    const { currentUser } = useContext(UserContext);
    const [open, setOpen] = useState(false);
    const [formInput, setFormInput] = useState('');

    useEffect(() => {
        async function fetchScoreHistory() {
          try {
            const username = currentUser.username;
            const fetchedScoreHistory = await WarmUpApi.getScoreHistory({ username });
            setScoreLog(fetchedScoreHistory);
          } catch (error) {
            console.error("Error fetching scores:", error);
          }
        }
    
        fetchScoreHistory();
    }, []);


    function topScore(id) {
        const result = scoreLog.find((el) => el.cat_id === id && el.score >= 0.8)
        return result
    }

    const isCardDisabled = !topScore(id);

    function truncateText(text) {
        if (text) {
            if (text.length <= 30) {
            return text;
            } else {
            return text.slice(0, 30) + "...";
            }
        } else {
            return null
        }
    }

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    

    // Update the form input value as the user types
    const handleInputChange = (event) => {
        setFormInput(event.target.value);
    };


    // handle Submit
    const handleCreate = async (evt) => {

        evt.preventDefault();
    
        try {
            const username = currentUser.username;
            
            await WarmUpApi.registerComment({ username }, {category, content: formInput});
            handleClose();
            setFormInput('');

            
    
        } catch (error) {
            console.error("Error fetching scores:", error);
        }
    }



    return (

            <Box sx={{ margin: "5px" }}>

                <Card sx={{ width: '80%',
                            height: "260px",
                            border: '5px solid #38B2FB',
                            backgroundColor: "transparent",
                            opacity: isCardDisabled ? 0.35 : 1,
                            transition: "opacity 0.3s",
                            pointerEvents: isCardDisabled ? "none" : "auto"
                        }}
                        disabled={isCardDisabled}
                        // handleClick={handleClick}
                >
                    
                    <CardActionArea >
                       
                            <CardMedia
                                component="img"
                                height="100"
                                image={
                                    category === "plastic"
                                    ? `${plasticBadge}`
                                    : category === "fossil-fuels"
                                    ? `${fossilBadge}`
                                    : category === "deforestation"
                                    ? `${deforestationBadge}`
                                    : category === "agriculture"
                                    ? `${agricultureBadge}`
                                    : category === "transportation"
                                    ? `${transportationBadge}`
                                    : category === "food-production"
                                    ? `${foodBadge}`
                                    : null
                                }
                                alt="category type"
                                sx={{ width: "100%", objectFit: "contain", backgroundColor: "#B9FF6F" }}
                            />

                            <CardContent>
                                <Box sx={{ height: "100px"}}>
                                    <Typography gutterBottom variant="h6" component="div" color="#0C1AAD" textTransform="uppercase">
                                        {category === "fossil-fuels" ? "fossil fuels"
                                        : category === "food-production" ? "food production"
                                        : category }
                                    </Typography>

                                    <Typography variant="body2" color="black">
                                        {content === null
                                        ? "There is no comment yet"
                                        : category === "plastic"
                                        ? truncateText(content)
                                        : category === "fossil-fuels"
                                        ? truncateText(content)
                                        : category === "deforestation"
                                        ? truncateText(content)
                                        : category === "agriculture"
                                        ? truncateText(content)
                                        : category === "transportation"
                                        ? truncateText(content)
                                        : category === "food-production"
                                        ? truncateText(content)
                                        : null}
                                    </Typography>
                                </Box>

                                <Box className="form" sx={{ display: "flex", justifyContent: "flex-end"}}>
                                    {content 
                                    ?
                                    <Button variant="outlined" onClick={handleClickOpen}> Edit </Button>
                                    :
                                    <Button variant="outlined" onClick={handleClickOpen}> Create </Button>  
                                    }
                                   
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
                                            multiline
                                            rows={8}                                            
                                            placeholder="Share you opinion about this category..."
                                            value={formInput}
                                            onChange={handleInputChange}
                                        />

                                    </DialogContent>
                                    <DialogActions>
                                        {/* <Button onClick={handleClose}> Cancel </Button> */}
                                        <Button onClick={handleCreate}> Submit </Button>
                                    </DialogActions>
                                    </Dialog>

                                </Box>

                            </CardContent>
                                                        
                    </CardActionArea>

                </Card>
            </Box>

    )
    
}

export default CategoryCommentCard;