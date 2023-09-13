import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import UserContext from "../common/UserContext";
import WarmUplogo from "../static/logo/WarmUpLogo.png"
import { createTheme } from '@mui/material/styles'

// underline animated when hover over a link About,... (like NASA)

const pages = ['About', 'Quiz', 'Top Scores'];
const settings = ['Profile', 'Quiz Progress', 'Logout'];

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  alignItems: 'flex-start',
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(2),
  '@media all': {
    minHeight: 90,
  },
}));


const theme = createTheme({
  breakpoints: {
    values: {
      sm: 600,
      md: 1024,
    },
  },
});


function MyNav({ logout }) {
  const { currentUser } = useContext(UserContext);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" style={{
      backgroundImage: 'linear-gradient(to right, #E81123, #FFF100, #BAD801 100%)',
    }}>

    <StyledToolbar>
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

            <Box
                  sx={{
                    flexGrow: 0,
                    display: { xs: 'flex', md: 'none' },
                    width: '10%',
                  }}
            >
              <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleOpenNavMenu}
                    color="inherit"
                  >
                    <MenuIcon />
              </IconButton>

                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorElNav}
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'left',
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'left',
                    }}
                    open={Boolean(anchorElNav)}
                    onClose={handleCloseNavMenu}
                    sx={{
                      display: { xs: 'block', md: 'none' },
                    }}
                  >

                    {pages.map((page) => (
                      <MenuItem key={page} onClick={handleCloseNavMenu}>
                        <Typography textAlign="center">{page}</Typography>
                      </MenuItem>
                    ))} 

                  </Menu>
            </Box>

                <Box
                  sx={{
                    flexGrow: 0,
                    display: { xs: 'none', md: 'flex' },
                    width: '50%',
                  }}
                >
                    {pages.map((page) => (
                      <Button
                        key={page}
                        onClick={() => {

                            if (page === 'Quiz') {
                              navigate("/categories");  
                            }
                        
                        }}
                        sx={{ my: 2, color: 'white', display: 'block' }}
                      >
                        {page}
                      </Button>
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
                        variant="h6"
                        noWrap
                        component="span"
                        sx={{
                          fontFamily: 'monospace',
                          fontWeight: 700,
                          letterSpacing: '.3rem',
                          color: 'white',
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

            <React.Fragment>

                  <Box
                    className="profile"
                    sx={{
                      flexGrow: 1,
                      display: 'flex',
                      justifyContent: 'flex-end',
                      alignItems: "center",
                      width: '10%',
                    }}
                  >
                    <Button
                      href="/signup"
                      variant="outlined"
                      sx={{
                        borderRadius: theme.breakpoints.down('md') ? "30px" : "5px",
                        border: "2px solid white",
                        color: "white",
                        marginRight: theme.breakpoints.down('md') ? "10px" : "5px",
                        marginTop: theme.breakpoints.down('md') ? "10px" : "5px",
                        fontSize: theme.breakpoints.down('md') ? "16px" : "5px",
                        width: theme.breakpoints.down('md') ? "120px" : "100px",
                        
                      }}
                    >
                      Join Now
                    </Button>

                    

                    <Button
                      href="/login"
                      variant="outlined"
                      sx={{
                        borderRadius: '30px',
                        border: "2px solid white",
                        color: "white",
                        marginRight: theme.breakpoints.down('md') ? "10px" : "5px",
                        marginTop: theme.breakpoints.down('md') ? "10px" : "5px",
                        fontSize: theme.breakpoints.down('md') ? "16px" : "5px",
                        width: theme.breakpoints.down('md') ? "120px" : "100px",
                        


                      }}
                    >
                      Login
                    </Button>
                  </Box>


            </React.Fragment>

          ) : (

            <React.Fragment>
            
              <Box
                  className="profile"
                  sx={{
                    flexGrow: 1,
                    display: 'flex',
                    justifyContent: 'flex-end', 
                    width: '10%',
                  }}>

                  <Tooltip>
                    <div sx={{ display: 'flex', alignItems: 'center', justifyContent: 'right' }}>
                      <span sx={{ margin: '5px' }}> {currentUser.username} </span>
                      <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                        <Avatar alt="WarmUp User" src={currentUser.image_profile} />
                    </IconButton>
                    </div>
                  </Tooltip>
                  
                  <Menu
                    sx={{ mt: '45px' }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                  >
                    {settings.map((setting) => (
                      <MenuItem
                        key={setting}
                        onClick={() => {
                          handleCloseUserMenu();
                          if (setting === 'Logout') {
                            logout();  
                          }
                          else if (setting === 'Profile') {
                            navigate("/profile")
                          }
                        }}
                      >
                        <Typography textAlign="center">{setting}</Typography>
                      </MenuItem>
                    ))}
                  </Menu>

                  

                </Box>
            </React.Fragment>


          )}
        </Toolbar>
      </Container>
      </StyledToolbar>
    </AppBar>
  );
}

export default MyNav;
