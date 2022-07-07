import * as React from 'react';
import './css/Card.css';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { makeStyles } from "@mui/styles";
import Button from '@mui/material/Button';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import IconButton from '@mui/material/IconButton';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { Route, Link, BrowserRouter as Router } from "react-router-dom";

const useStyles = makeStyles((theme) => ({

  }));

export default function Card() {

    const classes = useStyles();

    return (
        <>
      <Paper className='background' style={{borderRadius: '0px'}}>
        <Container>
            <Grid container>
              <Grid item md={15}>
        <div>
        </div>
              <ul>
          <li>  
            <a href="#">
              Холодные закуски
            </a>
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
        </ul>
              </Grid>
            </Grid>
        </Container>
      </Paper>
      <Paper style={{borderRadius: '0px'}} className='cardPage background'>
        <Container fixed style={{paddingTop: '50px'}}>
        <div style={{display: 'flex', alignItems: 'center', position: 'relative', top: '-25px'}}>
          <div className='circleArrow' >
          <Link to="/">
          <IconButton style={{color: 'white'}}>
              <ArrowBackIosNewRoundedIcon style={{fontSize: '15px', marginLeft: '-2px', marginTop: '-2px'}} />
            </IconButton>
            </Link>
          </div>
        <Typography
        gutterBottom
        className='circleTitle'
        >
          Вернуться назад
        </Typography>
        </div>
          <Grid container className='cardContainer'>
            <Grid item md={15}>
              <div style={{display: 'flex'}}>
                <div>
                <Box
                  component="img"
                  sx={{
                    height: 450,
                    width: 599,
                    backgroundSize: 'cover',
                  }}
                  src='https://source.unsplash.com/random'
                />
                </div>
                <div style={{padding: '40px'}}>
                  <Typography
                  variant='h3'
                  fontSize='25px'
                  color='white'
                  style={{fontFamily: 'Gilroy-Bold', fontWeight: '700px'}}
                  >
                    Ягненок
                  </Typography>
                  <Typography
                  variant='h5'
                  fontSize='14px'
                  color='#CFCFCF'
                  style={{fontFamily: 'Gilroy-Bold', fontWeight: '400px'}}
                  >
                  помидор, сыр фета, масло подсолнечное, капуста пекинская, 
перец сладкий красный, огурцы, оливки без косточек
                  </Typography>
                  <Typography
                  variant='h5'
                  fontSize='14px'
                  color='#CFCFCF'
                  style={{fontFamily: 'Gilroy-Bold', fontWeight: '400px', paddingTop: '115px'}}
                  >
                  Вес: 210 г
                  </Typography>
                  <div style={{display: 'flex', alignItems: 'center', marginTop: '20px'}}>
                  <Link to="/basket">
                    <Button 
                    variant='contained'
                    className='cardButton'
                    >
                      
                      <Typography 
                      className='buttonTitle'
                      >Корзина</Typography>
                      <IconButton style={{color: 'white'}}>
              <ShoppingBagOutlinedIcon/>
            </IconButton>
                    </Button>
                    </Link>
                    <Typography
                  variant='h3'
                  fontSize='25px'
                  color='white'
                  style={{fontFamily: 'Gilroy-Bold', fontWeight: '700px', paddingLeft: '25px'}}
                  >
                    259 ₽
                  </Typography>
                  </div>
                  <div style={{display: 'flex ', marginTop: '30px'}}>
                    <div>
                      <Typography
                      className='productInfoTitle'
                      style={{paddingLeft: '0px'}}
                      >
                        Белки
                      </Typography>
                      <Typography
                      className='productInfoSubTitle'
                      style={{paddingLeft: '0px'}}
                      >
                        17.23
                      </Typography>
                    </div>
                    <div>
                    <Typography
                      className='productInfoTitle'
                      >
                        Жиры
                      </Typography>
                      <Typography
                      className='productInfoSubTitle'
                      >
                        7.63
                      </Typography>
                    </div>
                    <div>
                    <Typography
                      className='productInfoTitle'
                      >
                        Углеводы
                      </Typography>
                      <Typography
                      className='productInfoSubTitle'
                      >
                        22.35
                      </Typography>
                    </div>
                    <div>
                    <Typography
                      className='productInfoTitle'
                      >
                        Ккал
                      </Typography>
                      <Typography
                      className='productInfoSubTitle'
                      >
                        234
                      </Typography>
                    </div>
                    <div>
                    <Typography
                      className='productInfoTitle'
                      >
                        Вес
                      </Typography>
                      <Typography
                      className='productInfoSubTitle'
                      >
                        210 г
                      </Typography>
                    </div>
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>
        </Container>  
      </Paper>
      <Paper className='background' style={{borderRadius: '0px', minHeight: '500px'}}>
        <Typography
        variant='h3'
        fontSize='32px'
        color='white'
        gutterBottom
        className='thisBuy'
        >С ЭТИМ ТОВАРОМ ПОКУПАЮТ</Typography>
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
      </Paper>
      </>

    )

}