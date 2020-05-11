import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import CardColor from './components/CardColor';
import Paginador from './components/Paginador';
import Cabecera from './components/Cabecera';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Zoom from '@material-ui/core/Zoom';

import CircularProgress from '@material-ui/core/CircularProgress';
import theme from './theme'



import './App.css';

const useStyles = makeStyles(theme => ({
  "@global":{
    '.App': {
      paddingTop: 40
  
    },

  },
  
  loading : {
      display: 'flex',
      margin: '0 auto',
      width: 80,
      justifyContent: 'center'

  },
  wrap: {
    marginBottom: theme.spacing(3),
  }
}));

function App() {
  const classes = useStyles();

  const [datos, setDatos] = useState(null);
  const [pagina, setPagina] = useState(1);
  const p = 1;

  const consulta = async (p) => {
    const api = await fetch(`https://reqres.in/api/colors?page=${p}`);
    const colores = await api.json()
    setDatos(colores);
  }

  const paginador = (e) => {
    consulta(e);

  }


  useEffect(() => {
    consulta();
  },[]);



  let items =[]

  if (datos) {

    datos.data.map((item,index) =>
        items.push(
          <Zoom in={datos}>
            <Grid item xs={12} sm={4} md={4} key={index}>
              <CardColor item={item}/>
            </Grid>
          </Zoom>
          
        )
      );

  }



  return (
    <React.Fragment>
      <CssBaseline />
      <ThemeProvider theme={theme}>
      <div className="App">

        <Container maxWidth="md" >
            <Grid container spacing={2} alignItems="flex-end">
              <Grid item xs={12}>
                <Cabecera titulo="COLORES CORPORATIVOS" subtitle="Copia en tu portapapeles el color que necesites en su formato #exadecimal"/>
              </Grid>
            </Grid>
        </Container>
        <Container maxWidth="md" component="main">
          
          <Grid container spacing={5} alignItems="flex-end" className={classes.wrap}>

            {items}
            
          </Grid>
        </Container>
        <Container maxWidth="md">
                <Paginador npag={datos ? datos.total_pages : 1} paginador={paginador}/>             
        </Container>

      </div>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
