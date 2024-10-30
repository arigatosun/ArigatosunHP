import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import toplogo from './images/arigatosun_logo.png';
import mark from './images/color_mark.png';
import {Link} from 'react-router-dom';
import marklogo from './images/arigatosun_marklogo_mobile.png';
import toplogo_mobile from './images/arigatosun_toplogo_mobile.png';

const pages = ['home', 'creative', 'contact', 'company'];
const pagesMobile = ['home', 'contact', 'company'];

function Appbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const menuItemStyle = {
    '& a': {
      fontFamily: "Kanit",
      textDecoration: 'none !important',
      color: "#79BED1 !important",
    }
  };

  return (
    <>
    <AppBar id="appbar-desktop" class="relative" style={{ backgroundColor: "transparent", boxShadow: '0px 0px 0px 0px',  zIndex: 50}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img src={mark} className='just-absolute header-mark' alt='colorlogo'/>
          <Link to={"/home"}>
            <div className="header-logo-container">
              <img 
                src={toplogo} 
                alt="logo" 
                className="header-logo"
              />
            </div>
          </Link>       
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' , justifyContent: "flex-end"} }}>
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
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: "flex-end" }}>
            {pages.map((page) => (
              <Link
                key={page}
                to={"/" +page}
                sx={{ textDecoration: 'none !important' }}
              >
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block', fontFamily: "Kanit", fontWeight: 300, textTransform: "lowercase", fontSize: "16px", textDecoration: 'none !important'}}
                >
                  {page}
                </Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    <AppBar id="appbar-mobile" class="relative" style={{ backgroundColor: "transparent", boxShadow: '0px 0px 0px 0px',  zIndex: 50}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link to={"/home"}
            style={{
              flex: '0 0 auto',
              marginRight: '10px'
            }}>
            <img 
              src={marklogo} 
              alt="Arigatosun mark logo" 
              style={{
                width: '74px',
                height: '52px',
                objectFit: 'contain'
              }}
            />
          </Link>
          <Box sx={{ 
            flexGrow: 1, 
            display: { xs: 'flex', md: 'none' },
            justifyContent: 'center',
            alignItems: 'center',
            margin: '0 auto',
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)'
          }}>
            <img 
              src={toplogo_mobile} 
              alt="Arigatosun text logo"
              style={{
                width: '340px',
                height: '34px',
                objectFit: 'contain'
              }}
            />
          </Box>          
          <Box sx={{ 
            flexGrow: 0,
            display: { xs: 'flex', md: 'none' },
            marginLeft: 'auto'
          }}>
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
              {pagesMobile.map((page) => (
                <MenuItem 
                  key={page} 
                  onClick={handleCloseNavMenu}
                  sx={menuItemStyle}
                >
                  <Link 
                    to={"/" + page} 
                    textAlign="center"
                  >
                    {page}
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    </>
  );
}

export default Appbar;