import React, { useEffect, useContext, useState } from 'react';
import WarmUpApi from '../api/api';
import ScoreContext from '../common/ScoreContext';
import UserContext from '../common/UserContext';
import {
Card, CardContent, CardMedia, CardActionArea,
Box, Button, Typography, TextField, Dialog,
DialogActions, DialogContent, DialogContentText,
DialogTitle, IconButton
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import plasticBadge from "../static/images/badges/plastic-badge.png"
import fossilBadge from "../static/images/badges/fossil-badge.png"
import deforestationBadge from "../static/images/badges/deforestation-badge.png"
import agricultureBadge from "../static/images/badges/agriculture-badge.png"
import transportationBadge from "../static/images/badges/transportation-badge.png"
import foodBadge from "../static/images/badges/food-badge.png"


const btnStyle = {
    background: "#96FFB5",
    borderRadius: "30px",
    border: "1px solid #38B2FB",
    color: "#2986cc",
    height: "38px",
    padding: "5px",
}

const btnDelStyle = {
    background: "#E57D74",
    borderRadius: "30px",
    border: "1px solid #38B2FB",
    color: "#953129",
    height: "38px",
    padding: "5px",
    marginRight: "5px"
}


const CategoryCommentCard = ({ id, category, content}) => {

            const { scoreLog, setScoreLog } = useContext(ScoreContext);
            const { currentUser } = useContext(UserContext);
            const [open, setOpen] = useState(false);
            const [formInput, setFormInput] = useState('');
            console.log(id, content)
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
                
                if (content) {
                    setFormInput(content);
                } else {
                    setFormInput('');
                }
                setOpen(true);
            };

            const handleClose = () => {
                setOpen(false);
            };

            

            // Update the form input value as the user types
            const handleInputChange = (event) => {
                setFormInput(event.target.value);
            };


            // handle Submit comment
            const handleCreate = async (evt) => {

                evt.preventDefault();
            
                try {
                    const username = currentUser.username;
                    
                    await WarmUpApi.registerComment({ username }, {category, content: formInput});
                    handleClose();
                    setFormInput('');
                    window.location.reload();

                } catch (error) {
                    console.error("Error writing comment:", error);
                }
            }


            // handle edit comment
            const handleEdit = async (evt) => {

                evt.preventDefault();
            
                try {
                    const username = currentUser.username;
                    
                    await WarmUpApi.editComment({ username }, {category, content: formInput});
                    handleClose();
                    setFormInput('');
                    window.location.reload();

                } catch (error) {
                    console.error("Error editing comment:", error);
                }
            }


            // handle remove comment
            const handleDelete = async (evt) => {

                evt.preventDefault();
            
                try {
                    const username = currentUser.username;
                    
                    await WarmUpApi.deleteComment({ username }, {category});                    
                    handleClose();                    
                    window.location.reload();
                    
                } catch (error) {
                    console.error("Error deleting comment:", error);
                }
            }



            return (

                    <Box sx={{ display: "flex", justifyContent: "center", marginTop: "10px"}}>

                        <Card sx={{ width: '80%',
                                    height: "260px",
                                    border: '5px solid #38B2FB',
                                    backgroundColor: "transparent",
                                    opacity: isCardDisabled ? 0.35 : 1,
                                    transition: "opacity 0.3s",
                                    pointerEvents: isCardDisabled ? "none" : "auto"
                                }}
                                disabled={isCardDisabled}                        
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

                                            <Typography variant="body2" color="#0C1AAD">
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

                                        <Box className="form" 
                                            sx={{ 
                                                display: "flex",
                                                justifyContent: "flex-end",
                                                
                                            }}
                                        >
                                            {content
                                            ?
                                            <Button onClick={handleClickOpen} sx={btnStyle}> Edit </Button>
                                            :
                                            <Button onClick={handleClickOpen} sx={btnStyle}> Create </Button>  
                                            }
                                        
                                            <Dialog open={open} onClose={handleClose}>

                                                <DialogTitle> 
                                                    Feedback about 
                                                    {category === "fossil-fuels" ? " fossil fuels"
                                                    : category === "food-production" ? " food production"
                                                    : ` ${category}` }
                                                </DialogTitle>
                                                <IconButton                    
                                                    onClick={handleClose}
                                                    sx={{
                                                        position: 'absolute',
                                                        right: 8,
                                                        top: 8,
                                                        backgroundColor: "#e3f2e8",
                                                        border: "1px solid #96FFB5",                            
                                                    }}
                                                >
                                                    <CloseIcon sx={{ color: "#4cd078"}} />
                                                </IconButton>
                                                <DialogContent>

                                                    <DialogContentText sx={{ marginBottom: "10px"}}>
                                                        How would you describe your views on this climate change topic?
                                                    </DialogContentText>
                                                        <TextField                                            
                                                            fullWidth={true}                                            
                                                            multiline
                                                            rows={8}                                            
                                                            placeholder="Plastic pollution is a major environmental problem, as it can take hundreds of years to decompose and can harm wildlife...."
                                                            value={formInput}
                                                            onChange={handleInputChange}
                                                        />

                                                    </DialogContent>

                                                <DialogActions>

                                                    {content 
                                                    ?
                                                    <Box>
                                                        <Button onClick={handleDelete} sx={btnDelStyle}> Delete </Button>
                                                        <Button onClick={handleEdit} sx={btnStyle}> Submit </Button>
                                                    </Box>
                                                    :
                                                    <Button onClick={handleCreate} sx={btnStyle}> Submit </Button> 
                                                    }
                                                    
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