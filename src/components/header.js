import * as React from 'react';
import './App.css';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import MoreIcon from '@mui/icons-material/MoreVert';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import Fab from '@mui/material/Fab';
import CheckIcon from '@mui/icons-material/Check';
import WifiCalling3Icon from '@mui/icons-material/WifiCalling3';
import { Route, Link, BrowserRouter as Router } from "react-router-dom";

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));
const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function Header() {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
    </Menu>
  );

  const [success, setSuccess] = React.useState(false);

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={1} color="error">
            <ShoppingBasketIcon />
          </Badge>
        </IconButton>
        <p>Корзина</p>
      </MenuItem>
    </Menu>
  );

  return (
      <main>
      <AppBar position="static" style={{backgroundColor: '#403C3B'}}>
        <Toolbar>
          <Typography
          className={'media'}
            variant="h6"
            noWrap
            component="div"
            sx={{ letterSpacing: '5px', fontFamily: 'GilroyBold', fontWeight: 'bold', fontSize: '25px', marginLeft: '98px' }}
          >
            <Link to="/">LOGOS</Link>
          </Typography>
          <Search>
          <IconButton style={{color: 'white'}}>
              <FmdGoodIcon/>
            </IconButton>
            <StyledInputBase 
              style={{width: '30.2vw', borderRadius: '10px', fontSize: '18px', fontFamily: 'GilroyBold', fontWeight: '400px', color: '#CFCFCF', position: 'relative', right: '50px'}}
              placeholder="Адрес доставки"
              inputProps={{ 'aria-label': 'search' }}
            />
            <IconButton style={{color: 'white'}}>
              <SearchIcon/>
            </IconButton>
          </Search>
          <Box sx={{ position: 'relative', display: 'flex'}}>
        <Fab
          aria-label="save"
          className='circleButton contactTitle'
          style={{width: '40px', height: '40px'}}
        >
          {success ? <CheckIcon className={'media'}/> : <WifiCalling3Icon style={{color: 'white', fontSize: '20px'}} />}
        </Fab>
        <Typography
        style={{position: 'absolute', paddingLeft: '50px', fontFamily: 'GilroyBold'}}
        className='contactTitle'
        >Контакты:</Typography>
        <Typography
        className='contactTitle'
        style={{position: 'absolute', paddingLeft: '50px', fontFamily: 'GilroyBold', paddingTop: '20px', whiteSpace: 'nowrap', fontWeight: 'bold', display: { xs: 'none', md: 'none' }}}
        >+7 (917) 510-57-59</Typography>
    </Box>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
          </Box>
          <Link to="/basket">
    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Button variant='contained' className={'shopButton'} style={{fontFamily: 'GilroyBold', fontWeight: '600', marginLeft: '-150px'}}>
              Корзина | <Fab
          aria-label="save"
          style={{width: '32px', height: '10px', backgroundColor: 'white', position: 'relative', left: '10px'}}
        >
          4
        </Fab>
            </Button>
          </Box>
          </Link>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
      </main>
  );
}