import * as React from 'react';
import './App.css';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Background from "./img/background.png";
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreIcon from '@mui/icons-material/MoreVert';
import { makeStyles } from "@mui/styles";
import Button from '@mui/material/Button';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import Badge from '@mui/material/Badge';
import { NavLink as Link, Route, Routes } from "react-router-dom";
import Fab from '@mui/material/Fab';
import CheckIcon from '@mui/icons-material/Check';
import WifiCalling3Icon from '@mui/icons-material/WifiCalling3';  

const useStyles = makeStyles((theme) => ({
    mainBackground: {
      backgroundImage: `url(${Background})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      position: 'relative',
      left: 0,
      right: 0, 
      top: 0,
      bottom: 0,
    }
  }));

export default function Home() {

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
      <div style={{display: 'flex', flexDirection: 'column'}}>
      <MenuItem>
      <Link to='/stocks'>Холодные закуски</Link>
      </MenuItem>
      <MenuItem>
      <Link to='/stocks'>Холодные закуски</Link>
      </MenuItem>
      <MenuItem>
      <Link to='/stocks'>Холодные закуски</Link>
      </MenuItem>
      <MenuItem>
      <Link to='/stocks'>Холодные закуски</Link>
      </MenuItem>
      <MenuItem>
      <Link to='/stocks'>Холодные закуски</Link>
      </MenuItem>
      </div>
    </Menu>
  );

    const classes = useStyles();

    return (
        <>
        <Paper style={{height: '484px', borderRadius: '0px'}} className={classes.mainBackground}>
        <Container>
          <Grid container>
            <Grid item md={10}>
            <p
          className='mainTitle'
          style={{fontFamily: 'Zing-Rust-Demo-Base', fontWeight: 'italic'}}
            >ДОСТАВКА ВКУСНЕЙШИХ <br/> БЛЮД ЗА 60 МИНУТ
            </p>
            <div className='mainForTitle'>
            <Typography
            variant='h3'
            fontSize='25px'
            textAlign='center'
            color='white'
            gutterBottom
            style={{fontFamily: 'Zing-Rust-Demo-Base', fontWeight: 'italic'}}
              >
              ЕЩЁ НЕ ПРОБОВАЛ?
              </Typography>
            </div>  
            </Grid>
          </Grid>
        </Container>
      </Paper>
      <Paper style={{height: '78px', borderRadius: '0px'}} className='background'>
        <Container>
            <Grid container>
              <Grid item md={15}>
              <ul style={{paddingTop: '10px'}}>
              <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <li>  
            <Link to='/stocks'>Холодные закуски</Link>
          </li>
          <li>
            <a href="#">
              Горячие закуски
            </a>
          </li>
          <li>
            <a href="#">
              Мясные блюда
            </a>
          </li>
          <li>
            <a href="#">
              Супы
            </a>
          </li>
          <li>
            <a href="#">
              Рыбные блюда
            </a>
          </li>
          <li>
            <a href="#">
              Гриль меню
            </a>
          </li>
          <li>
            <a href="#">
              Фирменные блюда
            </a>
          </li>
          <li>
            <a href="#">
              Напитки
            </a>
          </li>
          </Box>
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
        </ul>
              </Grid>
            </Grid>
        </Container>
      </Paper>
      <Paper className='background page' style={{borderRadius: '0px', minHeight: '500px'}}>
        <Typography
        variant='h3'
        fontSize='32px'
        color='white'
        gutterBottom
        style={{fontFamily: 'Zing-Rust-Demo-Base', fontWeight: 'italic'}} className='coldTitle'
        >ХОЛОДНЫЕ ЗАКУСКИ</Typography>
        <Grid sx={{ flexGrow: 1 }} container spacing={2}>
      <Grid item xs={12} style={{marginTop: '100px'}}>
        <Grid container justifyContent="center" spacing={4}>
          {[0, 1, 2].map((value) => (
            <Grid key={value} item>
              <Paper
                sx={{
                  height: 380,
                  width: 385,
                  backgroundColor: '#504B4A',
                  borderRadius: '5px'
                }}
              >
                <Box
        component="img"
        sx={{
          height: 227,
          width: 385,
          backgroundSize: 'cover',
          borderRadius: '5px'
        }}
        alt="The house from the offer."
        src='https://source.unsplash.com/random'
      />
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
      <Typography
      variant='h5'
      fontSize='27px'
      color='white'
      gutterBottom
      style={{fontFamily: 'Gilroy-Bold', fontWeight: '400', padding: '10px'}}
      >Ягненок</Typography>
      <Typography
      variant='h6'
      fontSize='12px'
      color='#CFCFCF'
      gutterBottom
      style={{fontFamily: 'Gilroy-Bold', fontWeight: '400', padding: '10px'}}
      >Вес: 225 г</Typography>
      </div>
      <Typography
      variant='h5'
      fontSize='13px'
      color='#CFCFCF'
      gutterBottom
      style={{fontFamily: 'Gilroy-Bold', fontWeight: '400', paddingLeft: '10px', position: 'relative', top: '-20px'}}
      >
      Фаршированный гречневой кашей, <br/>
курагой, апельсином и зеленым яблоком
      </Typography>
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
      <Typography
      variant='h5'
      fontSize='20px'
      color='#CFCFCF'
      gutterBottom
      style={{fontFamily: 'Gilroy-Bold', fontWeight: '400', paddingLeft: '10px'}}
      >
      620 ₽
      </Typography>
      <Button
      variant='contained'
      style={{backgroundColor: '#618967', marginRight: '20px'}}
      ><Link to="/card">В корзину</Link></Button>
      </div>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
      </Paper>

      <Paper className='background page' style={{borderRadius: '0px', minHeight: '500px'}}>
        <Typography
        variant='h3'
        fontSize='32px'
        color='white'
        gutterBottom
        style={{fontFamily: 'Zing-Rust-Demo-Base', fontWeight: 'italic'}} className='cold1Title'
        >ГОРЯЧИЕ ЗАКУСКИ</Typography>
        <Grid sx={{ flexGrow: 1 }} container spacing={2}>
      <Grid item xs={12} style={{marginTop: '100px'}}>
        <Grid container justifyContent="center" spacing={4}>
          {[0, 1, 2].map((value) => (
            <Grid key={value} item>
              <Paper
                sx={{
                  height: 380,
                  width: 385,
                  backgroundColor: '#504B4A',
                  borderRadius: '5px'
                }}
              >
                <Box
        component="img"
        sx={{
          height: 227,
          width: 385,
          backgroundSize: 'cover',
          borderRadius: '5px'
        }}
        alt="The house from the offer."
        src='https://source.unsplash.com/random'
      />

      <div style={{display: 'flex', justifyContent: 'space-between'}}>
      <Typography
      variant='h5'
      fontSize='27px'
      color='white'
      gutterBottom
      style={{fontFamily: 'Gilroy-Bold', fontWeight: '400', padding: '10px'}}
      >Утка</Typography>
      <Typography
      variant='h6'
      fontSize='12px'
      color='#CFCFCF'
      gutterBottom
      style={{fontFamily: 'Gilroy-Bold', fontWeight: '400', padding: '10px'}}
      >Вес: 225 г</Typography>
      </div>
      <Typography
      variant='h5'
      fontSize='13px'
      color='#CFCFCF'
      gutterBottom
      style={{fontFamily: 'Gilroy-Bold', fontWeight: '400', paddingLeft: '10px', position: 'relative', top: '-20px'}}
      >
      Фаршированный гречневой кашей, <br/>
курагой, апельсином и зеленым яблоком
      </Typography>
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
      <Typography
      variant='h5'
      fontSize='20px'
      color='#CFCFCF'
      gutterBottom
      style={{fontFamily: 'Gilroy-Bold', fontWeight: '400', paddingLeft: '10px'}}
      >
      620 ₽
      </Typography>
      <Button
      variant='contained'
      style={{backgroundColor: '#618967', marginRight: '20px'}}
      ><Link to="/card">В корзину</Link></Button>
      </div>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
      </Paper>

      <Paper className='background page' style={{borderRadius: '0px', minHeight: '500px'}}>
        <Typography
        variant='h3'
        fontSize='32px'
        color='white'
        gutterBottom
        style={{fontFamily: 'Zing-Rust-Demo-Base', fontWeight: 'italic'}} className='cold2Title'
        >МЯСНЫЕ БЛЮДА</Typography>
        <Grid sx={{ flexGrow: 1 }} container spacing={2}>
      <Grid item xs={12} style={{marginTop: '100px'}}>
        <Grid container justifyContent="center" spacing={4}>
          {[0, 1, 2].map((value) => (
            <Grid key={value} item>
              <Paper
                sx={{
                  height: 380,
                  width: 385,
                  backgroundColor: '#504B4A',
                  borderRadius: '5px'
                }}
              >
                <Box
        component="img"
        sx={{
          height: 227,
          width: 385,
          backgroundSize: 'cover',
          borderRadius: '5px'
        }}
        alt="The house from the offer."
        src='https://source.unsplash.com/random'
      />

      <div style={{display: 'flex', justifyContent: 'space-between'}}>
      <Typography
      variant='h5'
      fontSize='27px'
      color='white'
      gutterBottom
      style={{fontFamily: 'Gilroy-Bold', fontWeight: '400', padding: '10px'}}
      >Гусь</Typography>
      <Typography
      variant='h6'
      fontSize='12px'
      color='#CFCFCF'
      gutterBottom
      style={{fontFamily: 'Gilroy-Bold', fontWeight: '400', padding: '10px'}}
      >Вес: 225 г</Typography>
      </div>
      <Typography
      variant='h5'
      fontSize='13px'
      color='#CFCFCF'
      gutterBottom
      style={{fontFamily: 'Gilroy-Bold', fontWeight: '400', paddingLeft: '10px', position: 'relative', top: '-20px'}}
      >
      Фаршированный гречневой кашей, <br/>
курагой, апельсином и зеленым яблоком
      </Typography>
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
      <Typography
      variant='h5'
      fontSize='20px'
      color='#CFCFCF'
      gutterBottom
      style={{fontFamily: 'Gilroy-Bold', fontWeight: '400', paddingLeft: '10px'}}
      >
      620 ₽
      </Typography>
      <Button
      variant='contained'
      style={{backgroundColor: '#618967', marginRight: '20px'}}
      ><Link to="/card">В корзину</Link></Button>
      </div>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
      {renderMobileMenu}
      {renderMenu}
      </Paper>
      </>

    )

}