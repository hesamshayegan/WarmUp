import React, { useState, useContext, useEffect } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import UserContext from "../common/UserContext";
import { styled } from '@mui/material/styles';
import Alert from "../common/Alert";
import DeleteUser from "./DeleteUser";
import { 
Box, Grid, Typography, Button,
FormControl, InputLabel, FilledInput,
InputAdornment, IconButton, Slide
} from "@mui/material";
import {
Visibility, VisibilityOff
} from '@mui/icons-material'

import theme from "../theme";
import img from "../static/images/profile/profile-avatar.png";
import bg5 from "../static/images/bg5.jpg"


const submitBtnStyle = {
    background: "#1CA168",
    borderRadius: "30px",
    border: "1px solid #93FF00",
    color: "white",
    height: "48px",
    width: "100px",
    padding: "5px",
    marginRight: "5px"
}

const formStyle = {
    width: "350px",
    m: 2
}

const UnderGreen= styled('div')({
    textDecoration: 'underline',
    textDecorationColor: '#93FF00',
    textDecorationThickness: '4px',
    display: 'inline' 
    
})

const EditUserForm = ({ updateUser }) => {

    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    console.debug(
        "userContext=",  useContext(UserContext)
    )

    const { currentUser, token, userInfoLoaded } = useContext(UserContext);
    
    let INITIAL_STATE = {
        username: "",
        password: "",
        email: "",
        image_profile: ""
    }

    const [formData, setFormData] = useState(INITIAL_STATE);
    const [formErrors, setFormErrors] = useState([]);

    useEffect(() => {
        if (token && currentUser) {
            INITIAL_STATE = {
                password: "",
                email: currentUser.email,
                image_profile: currentUser.image_profile
            };

            setFormData(INITIAL_STATE);
            console.log("INITIAL_STATE", INITIAL_STATE)
        }

    }, [currentUser]);


    if (!currentUser && userInfoLoaded) {
        return <Navigate replace to="/login" />
    }

    const handleSubmit = async evt => {
        evt.preventDefault();

        const profileData = { 
            password: formData.password,
            email: formData.email,
            image_profile: formData.image_profile            
        }

        let result = await updateUser(profileData);

        if (result.success) {
            setFormData(INITIAL_STATE);
            console.log(`edit successful`);
            navigate('/');
        }

       else {
        setFormErrors(result.errors);
       }
    }

    const handleChange = evt => {
        const { name, value } = evt.target;
        setFormData(fData => ({
            ...fData,
            [name]: value
        }));
    }


    console.log(formData)

    return (

        <Grid container>
            <Grid item md={2} 
                sx={{ backgroundColor: "#41548c",
                    width: "100vw",
                }}
                
            >
                <Box sx={{ width: "100%" }}>
                    <Box sx={{ 
                            display: "flex",                            
                            flexDirection: "column",
                            alignItems: "center",
                            marginTop: "30px"}}> 
                        <img
                            src={currentUser.image_profile ? currentUser.image_profile : img}                        
                            style={{ height: "150px",
                                     width: "150px",
                                     borderRadius: "50%"
                            }}                      
                        />
                        <Typography variant="h6" sx={{ fontWeight: 600, m: 2, color: "white" }}>
                            <UnderGreen> USERNAME </UnderGreen>
                        </Typography>
                        <Typography sx={{ fontStyle: 'italic', color: "white" }} >
                                    <UnderGreen> {currentUser ? currentUser.username : ""} </UnderGreen>
                        </Typography>
                    </Box>
                </Box>
            </Grid>


            <Grid item md={5} 
                  sx={{ backgroundColor: "#F0F8FF",
                        height: "100vh",
                        [theme.breakpoints.down("md")]: {
                            height: "100%"
                        }  
                    }}
            >
                
                <Box sx={{ width: "100%" }}>

                    <Box  sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center", 
                            marginTop: "30px",
                            [theme.breakpoints.down("md")]: {
                                width: "100vw"
                            }
                          }}
                    >
                                     
                        <FormControl sx={formStyle} variant="filled">
                            <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
                            <FilledInput
                                id="filled-adornment-password"
                                type={showPassword ? 'text' : 'password'}
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                    >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                                }
                            />
                        </FormControl>

                        <FormControl fullWidth sx={formStyle} variant="filled">
                            <InputLabel htmlFor="filled-adornment-email">Email</InputLabel>
                            <FilledInput
                                id="filled-adornment-email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}                        
                            />
                        </FormControl>

                        <FormControl fullWidth sx={formStyle} variant="filled">
                            <InputLabel htmlFor="filled-adornment-image_profile">Image Profile URL</InputLabel>
                            <FilledInput
                                id="filled-adornment-image_profile"
                                name="image_profile"
                                value={formData.image_profile}
                                onChange={handleChange}                       
                            />
                        </FormControl>

                        {formErrors.length
                            ? <Alert type="danger" messages={formErrors} />
                            : null
                            }
                        
                    </Box>

                        <Box sx={{ display: "flex", justifyContent: "center"}}> 
                            <Button onClick={handleSubmit} sx={submitBtnStyle}> Submit </Button>
                            <DeleteUser />
                        </Box>
                    
                    </Box>
                
                
            </Grid>

            <Grid item md={5} 
                    sx={{ 
                    backgroundImage: `url(${bg5})`,
                    }}
            >
                <Slide direction="left" 
                    in={true} 
                    mountOnEnter 
                    unmountOnExit
                    easing={{
                        enter: 'cubic-bezier(0.4, 0, 0.2, 1)'
                    }}
                    timeout={{ enter: 1000, exit: 0 }}
                >  
                    <Box sx={{ marginTop: "30px" }}>
                        <Typography variant="h4" 
                                    sx={{
                                        textAlign: "center",
                                        margin: "10px",
                                        marginTop: "20px",
                                        color: "#336d1a",
                                        fontWeight: 700,
                                        textTransform: "uppercase"
                                    }}
                        >
                            Edit Profile
                        </Typography>   
                        <Typography variant="h6" 
                                    sx={{
                                        textAlign: "center",
                                        margin: "10px",
                                        marginTop: "20px",
                                        color: "#336d1a"
                                    }}
                        > 
                            Update your WarmUp profile image and email to match your personality and style.
                        </Typography>
                    </Box>
                </Slide>
            </Grid>
        </Grid>
        

    )


}

export default EditUserForm;