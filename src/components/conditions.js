import * as React from 'react';
import './css/conditions.css';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { makeStyles } from "@mui/styles";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

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
            <Typography
            className='title'
            >
                Условия доставки
            </Typography>
            <Grid container>
                <Grid item md={15} style={{display: 'flex', justifyContent: 'space-between'}}>
                    <div className='accordion'>
                    <Accordion className='accordionMain'>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon style={{color: 'white'}} />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography
                            className='accordionTitle'
                            >У наших курьеров всегда должна быть сдача!</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography className='accordionSubTitle'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion className='accordionMain'>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon style={{color: 'white'}} />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                            <Typography
                            className='accordionTitle'
                            >Вам что-то не довезли?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography className='accordionSubTitle'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion className='accordionMain'>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon style={{color: 'white'}} />}
                            aria-controls="panel3a-content"
                            id="panel3a-header"
                        >
                            <Typography
                            className='accordionTitle'
                            >Не понравился продукт?</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography className='accordionSubTitle'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion className='accordionMain'>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon style={{color: 'white'}} />}
                            aria-controls="panel4a-content"
                            id="panel4a-header"
                        >
                            <Typography
                            className='accordionTitle'
                            >Если появились замечания</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography className='accordionSubTitle'>
                            Мы очень внимательно следим за качеством нашей работы, поэтому, если у вас будут какие-либо замечания или предложения, то обязательно сообщайте их нам
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion className='accordionMain'>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon style={{color: 'white'}} />}
                            aria-controls="panel5a-content"
                            id="panel5a-header"
                        >
                            <Typography
                            className='accordionTitle'
                            >Оплата Visa, MasterCard и МИР</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography className='accordionSubTitle'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion className='accordionMain'>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon style={{color: 'white'}} />}
                            aria-controls="panel6a-content"
                            id="panel1a-header"
                        >
                            <Typography
                            className='accordionTitle'
                            >Реквизиты</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography className='accordionSubTitle'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <div style={{display: 'flex', paddingTop: '20px'}}>
                        <Typography className='workTitle'>График работы доставки: <br/> <span style={{color: '#CFCFCF'}}>с 10:00-21:00</span></Typography>
                        <Typography className='workSubTitle'>График работы кафе: <br/> <span style={{color: '#CFCFCF'}}>с 08:00-21:00</span></Typography>
                    </div>
                    <Typography
                    className='minimum'
                    >Минимальный заказ:</Typography>
                    <Typography 
                    className='subMinimum'
                    >Бесплатная доставка пешим курьером при сумме заказа от 400 ₽
Доставка оператором такси от любой суммы заказа - по тарифам
перевозчика.</Typography>
                    </div>
                    <div className='imageBack'>
                    </div>
                </Grid>
            </Grid>
        </Container>
      </Paper>
      </>

    )

}