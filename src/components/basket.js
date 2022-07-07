import * as React from 'react';
import './css/basket.css';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { makeStyles } from "@mui/styles";
import Button from '@mui/material/Button';
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import IconButton from '@mui/material/IconButton';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

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
      <Paper className='mainPage' style={{borderRadius: '0px'}}>
        <Container fixed>
        <div style={{display: 'flex', alignItems: 'center'}}>
        <Link to="/">
        <IconButton style={{color: 'white'}}>
              <ArrowBackIosNewRoundedIcon style={{fontSize: '20px'}} />
            </IconButton>
            </Link>
        <Typography className='choise'>
            к выбору блюда
        </Typography>
        </div>
        <div style={{display: 'flex'}}>
            <Typography
            className='basketTitle'
            >
                КОРЗИНА
            </Typography>
            <Typography
            className='basketSubTitle'
            >
                (в корзине 3 товара)
            </Typography>
        </div>
            <Grid container>
                <Grid item md={20} className='basketGrid'>
                    <div className='mainDivPage'>
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
      <div style={{paddingLeft: '40px', paddingTop: '70px'}}>
        <Typography
        className='basketName'
        >
            ПИЦЦА ДВОЙНАЯ ПЕППЕРОНИ
        </Typography>
        <Typography
        className='basketInfo'
        >
        Кальмары, мидии, креветки, сыр маасдам, <br/>
красный лук, микс оливок, базилик, соус песто
        </Typography>
    </div>
        <div style={{display: 'flex', alignItems: 'center'}}>
            <div className='circle'>
                <IconButton style={{color: 'white'}}>
                    <RemoveRoundedIcon className='circleCheck' />
                </IconButton>
            </div>
            <Typography
                className='circleScore'
            >
                1
            </Typography>
            <div className='circle'>
                <IconButton style={{color: 'white'}}>
                    <AddBoxOutlinedIcon className='circleCheck' />
                </IconButton>
            </div>
            <Typography className='basketPrice'>
                1640 ₽
            </Typography>
            <div className='circle'  style={{marginLeft: '70px'}}>
                <IconButton style={{color: 'white'}}>
                    <CloseRoundedIcon className='circleCheck' />
                </IconButton>
            </div>
        </div>
    </div>
    <div className='mainDivTwoPage'>
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
      <div style={{paddingLeft: '40px', paddingTop: '70px'}}>
        <Typography
        className='basketName'
        >
            ПИЦЦА ДВОЙНАЯ ПЕППЕРОНИ
        </Typography>
        <Typography
        className='basketInfo'
        >
        Кальмары, мидии, креветки, сыр маасдам, <br/>
красный лук, микс оливок, базилик, соус песто
        </Typography>
    </div>
        <div style={{display: 'flex', alignItems: 'center'}}>
            <div className='circle'>
                <IconButton style={{color: 'white'}}>
                    <RemoveRoundedIcon className='circleCheck' />
                </IconButton>
            </div>
            <Typography
                className='circleScore'
            >
                1
            </Typography>
            <div className='circle'>
                <IconButton style={{color: 'white'}}>
                    <AddBoxOutlinedIcon className='circleCheck' />
                </IconButton>
            </div>
            <Typography className='basketPrice'>
                1640 ₽
            </Typography>
            <div className='circle'  style={{marginLeft: '70px'}}>
                <IconButton style={{color: 'white'}}>
                    <CloseRoundedIcon className='circleCheck' />
                </IconButton>
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
        className='addBuy'
        >ДОБАВИТЬ К ЗАКАЗУ</Typography>
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
      <Paper className='mainTwoPage' style={{borderRadius: '0px', paddingTop: '20px'}}>
        <Container fixed>
            <Grid container>
                <Grid item md={10} className='containerAllPrice' style={{marginBottom: '20px'}}>
                    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                        <div style={{marginLeft: '30px'}}>
                        <Typography className='allPrice'>
                            Итого: <span style={{fontSize: '25px', color: '#fff'}}>500 ₽ </span>
                        </Typography>
                        <Typography
                        className='freeDelivery'
                        >
                            До бесплатной доставки не хватет: <span style={{color: '#72A479'}}>100 ₽</span>
                        </Typography>
                        <Typography
                        className='minimumPriceDelivery'
                        style={{paddingBottom: '20px'}}
                        >
                            Минимальная сумма заказа 1500 ₽
                        </Typography>
                        </div>
                        <Link to="/delivery">
                    <Button
                    variant='contained'
                    className='placeAnOrder'
                    >
                        Оформить заказ
                    </Button>
                    </Link>
                    </div>
                </Grid>
            </Grid>

        </Container>
      </Paper>
      </>

    )

}