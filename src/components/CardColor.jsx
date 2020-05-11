import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import Icon from '@material-ui/core/Icon';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ClearIcon from '@material-ui/icons/Clear';


import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    '@global': {
      ul: {
        margin: 0,
        padding: 0,
        listStyle: 'none',
      },
    },
    card: {
        "&:hover .exa": {
            transition: 'all 0.5s ease',
            transform: 'scale(2.3)',
            display: 'block',
            paddingTop: 30
        }

    },

    heroContent: {
      padding: theme.spacing(8, 0, 6),
    },
    cardHeader: {
      backgroundColor:
        theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
    },
    cardPricing: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'baseline',
      marginBottom: theme.spacing(2),
    },

    media: {
        minHeight:120,
        
    },
    btn: {
        width: "100%",
        textAlign: "center"
    },
    title: {
        textTransform: "capitalize",
        letterSpacing: "-1px"
    },
    pantone: {
        letterSpacing: 2,
        position: 'relative'
    },
    year: {
        position: 'absolute',
        top: -38,
        right: -14,
        transform: 'rotate(90deg)'
        
    }
  }));
  



function CardColor(props){
    const classes = useStyles();
    const {item} = props;
    const [copytext, setCopyText] = React.useState(false);

    console.log("el item in card", item.name)

    const handleCopyLink = () => {
        var dummy = document.createElement('input'),
        text = item.color;
    
        document.body.appendChild(dummy);
        dummy.value = text;
        dummy.select();
        document.execCommand('copy');
        document.body.removeChild(dummy);

        


        setCopyText(true)
        setTimeout(function(){ setCopyText(false) }, 3000);
    
      }

    return(
        <React.Fragment>
            
            <Card className={classes.card}>
                <CardMedia
                className={classes.media}
                //image="/static/images/cards/contemplative-reptile.jpg"
                style={{backgroundColor: item.color}}
                >
                    <Typography variant="overline" color="textSecondary" className={'exa'}>
                        {item.color}
                    </Typography>

                    </CardMedia>
                <CardContent align="left">
                    <Typography component="h2" variant="h5" color="textPrimary" className={classes.title}>
                      {item.name}
                    </Typography>
                    <p className={classes.pantone}>
                        <Typography variant="overline" color="textSecondary">
                        Pantone: 
                        </Typography>
                        <Typography variant="overline" color="textSecondary">
                        {item.pantone_value}
                        </Typography>
                        <Typography variant="overline" color="textSecondary" className={classes.year}>
                        {item.year}
                        </Typography>
                    </p>
                   
                    
                </CardContent>
                
                    <CardActions align="center">
                        <Button variant="outlined" color="primary" className={classes.btn} startIcon={copytext ? <Icon color="primary">check</Icon> : <Icon color="primary">add_circle</Icon>} onClick={handleCopyLink}>
                        
                        {copytext ? "Copiado": "Copiar"}
                        </Button>
                    </CardActions>
                
                
            </Card>
           
            
        </React.Fragment>
        
    )
}

export default CardColor;