import React from 'react';
import { connect } from 'react-redux';
import {active} from '../store/products.js';
import { makeStyles } from '@material-ui/core/styles';
import { Card ,CardActionArea,CardActions,CardContent,CardMedia,Button,Typography} from '@material-ui/core';

const useStyles = makeStyles({

    root: {
        maxWidth: 600,
        display: 'inline-block',
        margin: 8,
        textAlign:'center'
    },
    h3:{
	    textAlign:'center'
    },
    btn:{
	maxWidth : 50,
	margin:3,
	padding:50,
    }
});

const Categories = props =>{
	const classes = useStyles();
	return(
	<section>
		
	<Card className={classes.root}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
        		Browse Our Categories
                  </Typography>
	        </CardContent>
		</CardActionArea>
	<ul>
	{props.counter.categories.map((val,idx)=>		
	<Button key={idx} onClick={()=>props.active(val.name)} className={classes.btn} variant="outlined" color="primary">
  	{val.name}
	</Button>
	)}
	</ul>
            </Card>


		
	</section>
	)

}

const mapCategory = state =>({
	counter: state.product
});

const mapDispatchToProps = {active};

export default connect(mapCategory, mapDispatchToProps)(Categories);
