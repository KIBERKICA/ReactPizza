import * as React from 'react';
import './css/delivery.css';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { makeStyles } from "@mui/styles";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';

const useStyles = makeStyles((theme) => ({

  }));

export default function Card() {

    const [value, setValue] = React.useState('female');

  const handleChange = (event) => {
    setValue(event.target.value);
  };


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
      <Paper className='backgroundThree' style={{borderRadius: '0px'}}>
        <Container fixed>
        <div style={{display: 'flex', alignItems: 'center'}}>
        <Link to="/basket">
        <IconButton style={{color: 'white'}}>
              <ArrowBackIosNewRoundedIcon style={{fontSize: '20px'}} />
            </IconButton>
            </Link>
        <Typography className='choise'>
            в корзину
        </Typography>
        </div>
        <div>
            <Typography
            className='deliveryTitle'
            >
                ОФОРМЛЕНИЕ ЗАКАЗА
            </Typography>
        </div>
            <Grid container className='fieldOne'>
                <Grid item md={15}>
                    <Typography
                    className='contactPageInfo'
                    > 1. Контактная информация</Typography>
                    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 3, width: '60ch' },
        paddingBottom: '10px'
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Имя*" variant="outlined" />
      <TextField id="outlined-basic" label="Телефон*" variant="outlined" />
    </Box>
                </Grid>
            </Grid>
            <Grid container className='fieldTwo'>
                <Grid item md={15}>
                    <Typography
                    className='contactPageInfo'
                    >2. Доставка</Typography>
                    <ButtonGroup disableElevation style={{marginLeft: '40px', marginTop: '20px'}}>
      <Button
      variant='contained'
      className='fieldButton'
      >Доставка</Button>
      <Link to="/deliverytwo">
      <Button
      variant="outlined"
      className='fieldButtonTwo'
      style={{border: '1px solid #72A479', borderRadius: '0px 10px 10px 0px', color: '#fff'}}>Самовывоз</Button>
      </Link>
    </ButtonGroup>
    <Typography
                    className='contactPageInfo'
                    >Адрес доставки</Typography>
                    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 3, width: '60ch' },
        paddingBottom: '10px'
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Укажите улицу*" variant="outlined" />
      <TextField id="outlined-basic" label="Номер дома*" variant="outlined" />
    </Box>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 3, width: '35ch' },
        position: 'relative', 
        top: '-20px',
        paddingBottom: '10px'
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="№ квартиры/офиса*" variant="outlined" />
      <TextField id="outlined-basic" label="Подъезд*" variant="outlined" />
      <TextField id="outlined-basic" label="Этаж*" variant="outlined" />
    </Box>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 3, width: '45ch' },
        marginTop: '-30px',
        paddingBottom: '10px'
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Комментарий*" variant="outlined" />
    </Box>
                </Grid>
            </Grid>
            <Grid container className='fieldTwo'>
                <Grid item md={15}>
                    <Typography
                    className='contactPageInfo'
                    >3. Оплатить</Typography>
                    <ButtonGroup disableElevation style={{marginLeft: '10px', marginTop: '20px'}}>
      <Button
      variant='contained'
      className='fieldButton'
      >Оплата онлайн</Button>
      <Button
      variant="outlined"
      className='fieldButtonTwo'
      style={{border: '1px solid #72A479', color: '#fff'}}>Курьеру картой</Button>
      <Button
      variant="outlined"
      className='fieldButtonTwo'
      style={{border: '1px solid #72A479',borderRadius: '0px 10px 10px 0px', color: '#fff'}}>Курьеру картой</Button>
    </ButtonGroup>
                    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 3, width: '20ch' },
        paddingBottom: '10px'
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Сдача с" variant="outlined" />
    </Box>
                </Grid>
            </Grid>
            <Grid container className='fieldTwo'>
                <Grid item md={15}>
                    <Typography
                    className='contactPageInfo'
                    >4. Когда доставить</Typography>
                    <ButtonGroup disableElevation style={{marginLeft: '25px', marginTop: '20px'}}>
      <Button
      variant='contained'
      className='fieldButton'
      >В ближайшее время</Button>
      <Button
      variant="outlined"
      className='fieldButtonTwo'
      style={{border: '1px solid #72A479', color: '#fff'}}>Ко времени</Button>
      <Box
      component="form"
      sx={{
        '& > :not(style)': { marginLeft: '10px', width: '17ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Укажите время" variant="outlined" />
    </Box>
    </ButtonGroup>
                    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 3, width: '30ch' },
        paddingBottom: '10px'
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Кол-во персон" variant="outlined" >
      </TextField>
    </Box>
    <Typography
                    className='contactPageInfo'
                    style={{marginTop: '-30px'}}
                    >Хотите мы позвоним?</Typography>
                    <FormControl>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={value}
        onChange={handleChange}
        style={{marginLeft: '30px', paddingBottom: '20px'}}
      >
        <FormControlLabel value="female" control={<Radio style={{color: '#72A479'}} />} label="Не перезванивать" className='deliveryLabel' />
        <FormControlLabel value="male" control={<Radio style={{color: '#72A479'}} />} label="Потребуется звонок оператора" className='deliveryLabel' />
      </RadioGroup>
    </FormControl>
                </Grid>
            </Grid>
            <Grid container className='fieldTwo'>
                <Grid item md={15} style={{display: 'flex', justifyContent: 'space-between'}}>
                <FormGroup>
      <FormControlLabel control={<Checkbox defaultChecked style={{color: '#72A479'}} />} label="Я согласен на обработку моих перс. данных в соответствии с " style={{color: '#fff', margin: '25px'}} />
    </FormGroup>
    <Link to="/conditions" className='conditionsInfo'>Условиями</Link>
    <Button
    variant='contained'
    className='arrange'
    style={{margin: '25px'}}
    >
        Оформить заказ
    </Button>
                </Grid>
            </Grid>
        </Container>
      </Paper>
      </>

    )

}