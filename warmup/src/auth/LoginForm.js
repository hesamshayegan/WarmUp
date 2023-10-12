import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Alert from "../common/Alert";

import { 
Box, Grid, Typography, Button,
FormControl, InputLabel, FilledInput,
InputAdornment, IconButton, TextField
} from "@mui/material";
import {
Visibility, VisibilityOff
} from '@mui/icons-material'

import theme from "../theme";
import bg5 from "../static/images/bg5.jpg"

const SubmitBtnStyle = {
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



const LoginForm = ({ loginUser }) => {

    const INITIAL_STATE = { username: "", password: "" };

    const navigate = useNavigate();
    const [formData, setFormData] = useState(INITIAL_STATE);
    const [formErrors, setFormErrors] = useState([]);
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    

    console.debug(
        "LoginForm",
        "formData=", formData,
        "formErrors", formErrors,
    );

    
    const handleSubmit = async (e) => {
      e.preventDefault(); 

      let result = await loginUser(formData);

      if (result.success) {
        setFormData(INITIAL_STATE);
        console.log(`login successful`);
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


    return (


      <Grid container>
          <Grid item md={7} 
                  sx={{ backgroundColor: "#F0F8FF",
                        height: "100vh",
                        [theme.breakpoints.down("md")]: {
                            height: "100%"
                        }  
                    }}
            >
              <Box sx={{ width: "100%" }}>
                <Box sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center", 
                            marginTop: "30px",
                            [theme.breakpoints.down("md")]: {
                                width: "100vw"
                            }
                          }}
                >
                  <TextField
                    label="Username"
                    id="filled-username-normal"
                    name="username"
                    // defaultValue="Normal"
                    variant="filled"
                    value={formData.username}
                    onChange={handleChange}
                    autoComplete="username"                    
                    sx={formStyle}
                  />

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



                  {formErrors.length
                      ? <Alert type="danger" messages={formErrors} />
                      : null}
                </Box>

                <Box sx={{ display: "flex", justifyContent: "center"}}> 
                    <Button onClick={handleSubmit} sx={SubmitBtnStyle}> Submit </Button>
                </Box>

              </Box>
            
          </Grid>

          <Grid item md={5}
                    sx={{ 
                      backgroundImage: `url(${bg5})`,
                      height: "100vh",
                      width: "100vw"
                    }}
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
                        Login
                    </Typography>                           
                    <Typography variant="h6" 
                                sx={{
                                    textAlign: "center",                               
                                    margin: "10px",
                                    marginTop: "20px",
                                    color: "#336d1a"
                                }}
                    > 
                        Sign in using your WarmUp account!
                    </Typography>
                </Box>
            </Grid>

      </Grid>

    );

}

export default LoginForm;