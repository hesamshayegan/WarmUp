import React, { useContext, useState } from "react";
import { Link} from "react-router-dom";
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import UserContext from "../common/UserContext";
import WarmUplogo from "../static/logo/WarmUpLogo.png";
import { Drawer, List, ListItem, Divider } from "@mui/material";
import theme from "../theme";


const pages = ['About', 'Quiz', 'Top Scores', 'Progress'];
const settings = ['Profile', 'Logout'];

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  alignItems: 'flex-start',
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(2),
  '@media all': {
    minHeight: 90,
  },
}));


const UnderlinedLink = styled(Link)`
  position: relative;
  text-decoration: none;
  color: white;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: #286414;
    transition: width 0.3s ease-in-out;
  }

  &:hover {
    &::after {
      width: 100%;
    }
  }
`;





function MyNav({ logout }) {
  const { currentUser } = useContext(UserContext);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);


  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };


  return (
    <AppBar position="static" style={{
      backgroundImage: 'linear-gradient(to right, #E81123, #FFF100, #BAD801 100%)',
    }}>

    <StyledToolbar  sx={{
                display: 'flex',
                alignItems: 'center',
              }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters className="Navbar-container">

          <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '80%',
              }}
          >

            {/* Drawer settings */}

            <Box
                  sx={{
                    flexGrow: 0,
                    display: { xs: 'flex', md: 'none' },
                    width: '10%',
                  }}
                 
                  
            >

                <IconButton
                        size="large"
                        aria-label="Open Drawer"
                        onClick={toggleDrawer}
                        color="inherit"
                      >
                  <MenuIcon />
                </IconButton>

                <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer} >
                  <Box className="drawer-container"  
                       sx={{ 
                       backgroundColor: "#D8FFCB",
                       width: "300px",
                       minHeight: "100vh" }}>
                    <List>
                    {currentUser ? (
                      <Box sx={{ display: 'flex',
                                 alignItems: 'center',
                                 justifyContent: 'left',
                                 alignItems: 'center',
                                 flexDirection: "column",}}
                      > 
                        <IconButton>
                          <Avatar alt="WarmUp User" src={currentUser.image_profile} />
                        </IconButton>
                        <Typography variant="h6" color="#377F37"> {currentUser.username} </Typography>

                      </Box>
                    ) : (
                      null
                     )

                    }
                      
                    </List>
                    <List>
                      {pages.map((page) => (
                        <ListItem key={page} onClick={toggleDrawer}>
                          <Typography textAlign="center">
                            {page === "About" ? (
                              <Link  to="/" style={{ textDecoration: "none", color: "#377F37"}}>
                                {page}
                              </Link>
                            ) : page === "Quiz" ? (
                              <Link to="/categories" style={{ textDecoration: "none", color: "#377F37" }}>
                                {page}
                              </Link>
                            ) : page === "Progress" ? (
                              <Link to="/progress" style={{ textDecoration: "none", color: "#377F37" }}>
                                {page}
                              </Link>
                            ) : (
                              <Link to="/topscores" style={{ textDecoration: "none", color: "#377F37" }}>
                                {page}
                              </Link>
                            )}
                          </Typography>
                          
                        </ListItem>
                      ))}
                      </List>
                      <Divider />

                    <List>                                      
                    {currentUser &&
                      settings.map((setting) => (
                        <ListItem key={setting} onClick={toggleDrawer}>
                          <Typography textAlign="center">
                            {setting === "Profile" ? (
                              <Link to="/profile" style={{ textDecoration: "none", color: "#377F37" }}>
                                {setting}
                              </Link>
                            ) : setting === "Logout" ? (
                              <Link to="/" style={{ textDecoration: "none", color: "#377F37" }} onClick={logout}>
                                {setting}
                              </Link>
                            ) : null}
                          </Typography>
                          
                        </ListItem>
                      ))}
                    </List>
                  </Box>
                </Drawer>
                

            </Box>

                <Box
                  sx={{
                    flexGrow: 0,
                    display: { xs: 'none', md: 'flex' },
                    width: '50%',
                  }}
                >

                  {pages.map((page) => (
                    <Typography key={page} variant="h5" sx={{ margin: 1}}>
                      {page === "About" ? (
                        <UnderlinedLink to="/"> {page} </UnderlinedLink>
                      ) : page === "Quiz" ? (
                        <UnderlinedLink to="/categories"> {page} </UnderlinedLink>
                      ) : page === "Top Scores" ? (
                        <UnderlinedLink to="/topscores"> {page} </UnderlinedLink>
                      ) : page === "Progress" && currentUser? (
                        <UnderlinedLink to="/progress"> {page} </UnderlinedLink>
                      ) : (
                        null
                      )}
                    </Typography>
                  ))} 

                </Box>


              <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'left',
                    width: '50%',
                  }}
                >

                  <a href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
                      <img
                        src={WarmUplogo}
                        height="50"
                        style={{ display: { xs: 'none', md: 'flex' }, marginRight: 5 }}
                        alt="WarmUp Logo"
                      />
                      
                      <Typography
                        variant="h4"
                        noWrap
                        component="span"
                        sx={{
                          fontWeight: 700,
                          color: '#286414',
                          textDecoration: 'none',
                          display: { xs: 'none', md: 'flex' },
                        }}
                      >
                        WarmUp
                      </Typography>
                  </a>
                </Box>
        </Box>

          {!currentUser ? (
            <Box
            className="profile"
            sx={{
              flexGrow: 1,
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              width: "10%",
              flexDirection: "column",
              [theme.breakpoints.up("md")]: {
                flexDirection: "row",
              },
            }}
          >
                    <Button
                      href="/signup"
                      variant="outlined"
                      size='large'
                      sx={{
                        borderRadius: theme.breakpoints.down("md")
                          ? "30px"
                          : "5px",
                        border: "2px solid white",
                        color: "white",

                        [theme.breakpoints.up("md")]: {
                          fontSize: "20px",
                          marginRight: "5px",
                          width: "120px",
                        },
                        [theme.breakpoints.down("md")]: {
                          marginRight: "5px",
                          marginBottom: "5px",
                          width: "90px",
                        }
                      }}
                    >
                      Join
                    </Button>
                  
                    <Button
                      href="/login"
                      variant="outlined"
                      size='large'
                      sx={{
                        borderRadius: "30px",
                        border: "2px solid white",
                        color: "white",
                        
                        [theme.breakpoints.up("md")]: { 
                          fontSize: "20px",
                          marginRight: "5px",
                          width: "120px",
                        }
                        
                      }}
                    >
                      Login
                    </Button>


         </Box>

        
          ) : (

              <Box
                  className="profile"
                  sx={{
                    flexGrow: 1,
                    display: "flex",
                    justifyContent: "flex-end",
                    maxWidth: "250px"                    
                  }}>
                      <Box sx={{
                        display: { xs: 'none', md: 'flex' },
                        alignItems: "center",
                      }}>
                        <Typography variant="h6" color="white"> {currentUser.username} </Typography>
                        <Link to="/profile">
                          <IconButton>
                            <Avatar alt="WarmUp User" src={currentUser.image_profile} />
                          </IconButton>
                        </Link>
                        <Button
                          variant="outlined"
                          size='large'
                          sx={{
                            borderRadius: "30px",
                            border: "2px solid white",
                            color: "white",
                            fontSize: "18px",
                            width: "100px",
                          }}
                          onClick={logout}
                        >
                          Logout
                        </Button>
                      </Box>               
                </Box>

          )}

        
        </Toolbar>
      </Container>
      </StyledToolbar>
    </AppBar>
  );
}

export default MyNav;

