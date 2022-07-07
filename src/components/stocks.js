import * as React from 'react';
import './css/stocks.css';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { NavLink as Link, Route, Routes } from "react-router-dom";

export default function Home() {

    return (
        <>
      <Paper style={{height: '78px', borderRadius: '0px'}} className='background'>
        <Container>
            <Grid container>
              <Grid item md={15}>
              <ul style={{paddingTop: '10px'}}>
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
      <Paper className='background' style={{borderRadius: '0px', minHeight: '500px'}}>
        <Typography
        variant='h3'
        fontSize='32px'
        color='white'
        gutterBottom
        style={{fontFamily: 'Zing-Rust-Demo-Base', fontWeight: 'italic'}} className='mainTitleStocks'
        >АКЦИИ</Typography>
        <Grid sx={{ flexGrow: 1 }} container spacing={4}>
      <Grid item xs={12} style={{marginTop: '100px', borderTop: "1px solid black", paddingTop: '50px'}}>
        <Grid container justifyContent="center" spacing={6} style={{paddingBottom: '50px'}}>
          {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((value) => (
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
      >Без мяса? Здесь!</Typography>
      </div>
      <Typography
      variant='h5'
      fontSize='13px'
      color='#CFCFCF'
      gutterBottom
      style={{fontFamily: 'Gilroy-Bold', fontWeight: '400', paddingLeft: '10px', position: 'relative', top: '-20px'}}
      >
      Описание пиццы
      </Typography>
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
      <Typography
      variant='h5'
      fontSize='20px'
      color='#CFCFCF'
      gutterBottom
      style={{fontFamily: 'Gilroy-Bold', fontWeight: '400', paddingLeft: '10px'}}
      >
      До 31 июня
      </Typography>
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