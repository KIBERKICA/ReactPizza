import * as React from 'react';
import './App.css';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import LunchDiningOutlinedIcon from '@mui/icons-material/LunchDiningOutlined';
import FlashOnOutlinedIcon from '@mui/icons-material/FlashOnOutlined';
import StarPurple500Icon from '@mui/icons-material/StarPurple500';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import DeveloperBoardOutlinedIcon from '@mui/icons-material/DeveloperBoardOutlined';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import InsightsOutlinedIcon from '@mui/icons-material/InsightsOutlined';
import RadioButtonCheckedOutlinedIcon from '@mui/icons-material/RadioButtonCheckedOutlined';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Background from "./img/background.png";
import backgroundThree from "./img/backgroundThree.png";
import Paper from '@mui/material/Paper';
import { makeStyles } from "@mui/styles";
import Button from '@mui/material/Button';
import { NavLink as Link, Route, Routes } from "react-router-dom";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});



const useStyles = makeStyles((theme) => ({
    backgroundTwo: {
      backgroundImage: `url(${Background})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      position: 'relative',
      width: '100%',
      height: '100%',
      left: 0,
      right: 0, 
      top: 0,
      bottom: 0,
    },
    backgroundThree: {
      backgroundImage: `url(${backgroundThree})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      position: 'relative',
      width: '100%',
      height: '100%',
      left: 0,
      right: 0, 
      top: 0,
      bottom: 0,
    },
  }));

  const Item = styled(Paper)(({ theme }) => ({
    width: '227px',
    height: '227px',
    textAlign: 'center',
    backgroundColor: '#4b4746', borderRadius: '0px',
    color: 'white',
    fontSize: '18px',
    fontFamily: 'Gilroy-Bold', fontWeight: '400',
    display: 'flex',
    alignItems: 'center', 
    justifyContent: 'center',
    flexDirection: 'column'
  }));
  

export default function Footer() {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
    const classes = useStyles();
    return (
        <>
        <Paper style={{borderRadius: '0px'}} className={classes.backgroundTwo}>
          <Grid container>
            <Grid item md={15} style={{display: 'flex', justifyContent: 'space-between'}}>
              <div  className='meCoffe'>
                <Typography
                variant='h3'
                fontSize='32px'
                color='white'
                gutterBottom
                style={{fontFamily: 'Gilroy-Bold', fontWeight: 'italic'}}
                >НАШЕ КАФЕ</Typography>
                <Typography
                variant='h6'
                fontSize='20px'
                color='#CFCFCF'
                gutterBottom
                style={{fontFamily: 'Gilroy-Bold', fontWeight: '400', paddingTop: '30px'}}
                >
                Мы расположены в одном из самых живописных мест города — на берегу реки, это ваш оазис в черте города, куда можно сбежать от шумного и пыльного мегаполиса. Мы, действительно уникальные, ведь все продумано до мелочей: проект построен из дикого закарпатского сруба, камин в основном зале ресторана и панорамные окна с видом на реку, уютные беседки на берегу реки и лучшая видовая террасса, шатер с посадкой на 200 человек, сказочный детский домик и бассейн.
                </Typography>
                <Button
                variant='contained'
                className='mainButton'
                style={{marginTop: '30px'}}
                onClick={handleClickOpen}
                >ПОСМОТРЕТЬ МЕНЮ</Button>
                <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogContent style={{backgroundColor: '#504B4A', display: 'flex'}}> 
          <DialogContentText id="alert-dialog-slide-description" >
          <IconButton style={{color: '#70A177'}}>
              <ShoppingBasketOutlinedIcon style={{fontSize: '100px'}} />
            </IconButton>
            Корзина пустая
          </DialogContentText>
        </DialogContent>
        <DialogActions style={{display: 'flex', justifyContent: 'center', backgroundColor: '#504B4A'}}>
          <Button variant='contained' className='dialogButton' onClick={handleClose}>Посмотреть меню</Button>
        </DialogActions>
      </Dialog>
              </div>
              <div>
              <Box style={{width: '55%'}} className='infoPage'>
      <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }} style={{marginTop: '50px', marginLeft: '200px'}}>
        <Grid item xs={6}>
          <Item>
          <IconButton style={{color: 'white'}}>
              <LunchDiningOutlinedIcon style={{fontSize: '70px'}}/>
            </IconButton>
            Свежайшие продукты
            </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
          <IconButton style={{color: 'white'}}>
              <FlashOnOutlinedIcon style={{fontSize: '70px'}}/>
            </IconButton>
            Быстрая доставка
            </Item>
        </Grid>
        <Grid item xs={6}>
        <Item>
          <IconButton style={{color: 'white'}}>
              <StarPurple500Icon style={{fontSize: '70px'}}/>
            </IconButton>
            Лучшие повара
            </Item>
        </Grid>
        <Grid item xs={6}>
        <Item>
          <IconButton style={{color: 'white'}}>
              <LunchDiningOutlinedIcon style={{fontSize: '70px'}}/>
            </IconButton>
            Свежайшие продукты
            </Item>
        </Grid>
      </Grid>
    </Box>
              </div>
            </Grid>
          </Grid>
      </Paper>
      <Paper className={classes.backgroundThree} style={{borderRadius: '0px', paddingBottom: '50px', color: 'white'}}>
        <Grid container style={{display: 'flex', paddingTop: '50px'}}>
          <Grid item className='contactsInfo'>
            <div style={{width: '100%', borderBottom: '1px solid black'}}>
            <Typography
            variant='h3'
            fontSize='30px'
            color='white'
            gutterBottom
            style={{fontFamily: 'Gilroy-Bold', fontWeight: '700', padding: '30px'}}
            >
              КОНТАКТЫ
            </Typography>
            </div>
            <div style={{display: 'flex', paddingLeft: '30px', paddingTop: '10px'}}>
            <IconButton style={{color: '#6D9C74', position: 'relative', top: '-15px'}}>
              <FmdGoodIcon/>
            </IconButton>
              <div>
              <Typography
              variant='h3'
              fontSize='16px'
              color='#CFCFCF'
              gutterBottom
              style={{fontFamily: 'Gilroy-Bold', fontWeight: '400'}}
              >Наш адрес: </Typography>
              <Typography 
              variant='h3'
              fontSize='14px'
              gutterBottom
              style={{fontFamily: 'Gilroy-Bold', fontWeight: '400'}}
              >
МО, городской округ Красногорск, село Ильинкое, <br/>
Экспериментальная улица, 10</Typography>
              </div>
            </div>
            <div style={{width: '100%', borderBottom: '1px solid black'}}>
            <div style={{display: 'flex', paddingLeft: '30px', paddingTop: '20px'}}>
            <IconButton style={{color: '#6D9C74', position: 'relative', top: '-10px'}}>
              <EmailOutlinedIcon />
            </IconButton>
              <div style={{paddingBottom: '20px'}}>
              <Typography
              variant='h3'
              fontSize='16px'
              color='#CFCFCF'
              gutterBottom
              style={{fontFamily: 'Gilroy-Bold', fontWeight: '400'}}
              >Наша почта: </Typography>
              <Typography 
              variant='h3'
              fontSize='14px'
              gutterBottom
              style={{fontFamily: 'Gilroy-Bold', fontWeight: '400'}}
              >
auto.wash@gmail.com</Typography>
              </div>
            </div>
            </div>
            <div className='buttonBron'>
              <div>
              <Button
              variant='contained'
              className='bronButton2'
              >
                ЗАБРОНИРОВАТЬ СТОЛ
              </Button>
              </div>
              <div style={{padding: '30px'}}>
                <Typography
                variant='h3'
                fontSize='23px'
                gutterBottom
                style={{fontFamily: 'Gilroy-Bold', fontWeight: '700'}}
                >
                +7 (917) 510-57-59
                </Typography>
                <Typography
                variant='h3'
                fontSize='13px'
                paragraph
                color='#CFCFCF'
                style={{fontFamily: 'Gilroy-Bold', fontWeight: '400'}}
                >
                Звоните или оставляйте заявку
                </Typography>
              </div>
            </div>
            <div className='socialGroup'>
            <Typography
            variant='h3'
            fontSize='16px'
            paragraph
            style={{fontFamily: 'Gilroy-Bold', fontWeight: '600'}}
            >
              Мы в соц сетях: 
            </Typography>
            </div>
          </Grid>
          <div>
          </div>
        </Grid>
      </Paper>
      </>
    )
}