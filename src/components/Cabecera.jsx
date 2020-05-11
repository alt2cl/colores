import React from 'react';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

    header: {
      paddingBottom: theme.spacing(3),
      marginBottom: theme.spacing(3),
      borderBottom: `1px solid ${theme.palette.divider}`,

    },
 
  }));
  



function Cabecera(props){
    const classes = useStyles();
    return(
        <React.Fragment>
          <div className={classes.header}>
              <Typography component="h3" variant="h3" color="textPrimary">
                {props.titulo}
              </Typography>
              <Typography component="h6" variant="h6" color="textSecondary">
                {props.subtitle}
              </Typography>
          </div>
        </React.Fragment>
        
    )
}

export default Cabecera;