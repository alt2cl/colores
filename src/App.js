import React from 'react';
import logo from './logo.svg';
import CardColor from './components/CardColor';
import Paginador from './components/Paginador';
import Cabecera from './components/Cabecera';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';


import './App.css';

function App() {

  const consulta = async () => {
    const api = await fetch('https://reqres.in/api/colors?page=1');
    const colores = await api.json()
    console.log(colores);
  }

  consulta();

  return (
    <React.Fragment>
      <CssBaseline />
      <div className="App">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
        
           
        
        </header>
        <Container maxWidth="md" >
            <Grid container spacing={2} alignItems="flex-end">
              <Grid item xs={12}>
                <Cabecera titulo="Cabecera"/>
              </Grid>
            </Grid>
        </Container>
        <Container maxWidth="md" component="main">
          <Grid container spacing={5} alignItems="flex-end">
            <Grid item xs={12} sm={4} md={4}>
              <CardColor/>
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
              <CardColor/>
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
              <CardColor/>
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
              <CardColor/>
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
              <CardColor/>
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
              <CardColor/>
            </Grid>
          </Grid>
        </Container>
        <Container maxWidth="md">
           
                <Paginador/>
             
        </Container>

      </div>
    </React.Fragment>
  );
}

export default App;
