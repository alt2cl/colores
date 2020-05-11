import { createMuiTheme } from '@material-ui/core/styles';
import { red,teal, amber, orange, blueGrey } from '@material-ui/core/colors';


const defaultFont = "'Roboto Condensed', sans-serif"


// Create a theme instance.
const theme = createMuiTheme({

  

  palette: {
    primary: {
      main: '#999ccc',
      
    },
    secondary: {
      main: '#19857b',
    },

    
  },
  
  

  typography: {

    fontFamily: [
      'Roboto Condensed',
      'sans-serif',
    ].join(','),
    subtitle1: {
      fontWeight: 500,
      lineHeight: 1.4,

    },
    body1: {
      fontFamily:"'Roboto Condensed', sans-serif",
      lineHeight: 1.5,
      color: '#546e7a',
      fontSize:18,
    },

    body2: {
      fontFamily:"'Roboto Condensed', sans-serif",
      lineHeight: 1.5,
      color: '#546e7a',
      fontSize:18,
    },
    button: {
      //fontStyle: 'italic',
    },
    overline: {
      lineHeight: 1.66,
      fontSize: '0.65rem',
    },

  },
  overrides:{
    typography: {
      fontFamily:"'Roboto', sans-serif"
    }   
   
  }

});

export default theme;
