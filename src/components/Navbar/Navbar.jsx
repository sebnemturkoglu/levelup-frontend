import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { FiLogOut } from 'react-icons/fi';
import { MdOutlineLanguage } from 'react-icons/md';
// import '@fontsource/roboto/500.css';
import './Navbar.css';
import logo from '../../assets/logo.svg';
import { Link, useNavigate, useLocation } from 'react-router-dom';
// import { useDispatch } from 'react-redux';

const Navbar = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
//   const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

//   const logout = () => {
//     dispatch({ type: 'LOGOUT' });

//     navigate('/');

//     setUser(null);
//   };

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElLanguage, setAnchorElLanguage] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleOpenLanguageMenu = (event) => {
    setAnchorElLanguage(event.currentTarget);
  };

  const handleCloseLanguageMenu = () => {
    setAnchorElLanguage(null);
  };

  const menuItems = [
    {
      title: 'Language',
      icon: <MdOutlineLanguage />,
      onClick: handleOpenLanguageMenu
    },
    {
      title: 'Logout',
      icon: <FiLogOut />,
      onClick: handleOpenLanguageMenu, // temp will be logout soon
    },
  ]

  const languageSettings = ['English', 'Turkish'];

  return (
    <AppBar position="fixed" sx={{ bgcolor: '#fff', boxShadow: '0 0px 15px rgba(0, 0, 0, 0.1)', zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            variant="h6"
            noWrap
            component="div"
            sx={{ height: 50, mr: 2, display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
            <img src={logo} alt="logo" id='header-logo' />
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
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
              {menuItems.map((item, index) => (
                <MenuItem key={index} onClick={item.onClick}>
                  <Typography textAlign="center">{item.title}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box
            variant="h6"
            noWrap
            component="div"
            sx={{ height: 70, flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <img src={logo} alt="logo" id='header-logo' />
          </Box>
          <Grid container justifyContent="flex-end" sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {menuItems.map((item, index) => (
              <Button
                key={index}
                onClick={item.onClick}
                sx={{ my: 2, color: '#2B2E4A', textTransform: 'initial', fontSize: 'small', mr: '16px' }}
                startIcon={item.icon}
              >
                {item.title}
              </Button>
            ))}
          </Grid>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip >
              <IconButton onClick={handleOpenNavMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElLanguage}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElLanguage)}
              onClose={handleCloseLanguageMenu}
            >
              {languageSettings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseLanguageMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
