import React from 'react';
import Button from '@material-ui/core/Button';
import Pagination from '@material-ui/lab/Pagination';
import Typography from '@material-ui/core/Typography';


import Grid from '@material-ui/core/Grid';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  paginador: {
    display: 'flex',
    flexDirection: 'row-reverse',
  }
   
   

  }));
  



function Paginador(props){
    const classes = useStyles();
    const {paginador} = props;
    const [page, setPage] = React.useState(1);
    const handleChange = (event, value) => {
      setPage(value);
      paginador(value)
    };
    return(
        <React.Fragment>
          <Pagination count={props.npag} page={page} onChange={handleChange} className={classes.paginador} />  
        </React.Fragment>
        
    )
}

export default Paginador;