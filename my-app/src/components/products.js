import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../store/cart.js'
import { makeStyles } from '@material-ui/core/styles';
import { Card ,CardActionArea,CardActions,CardContent,CardMedia,Button,Typography} from '@material-ui/core';

const useStyles = makeStyles({

    root: {
        maxWidth: 150,
        display: 'inline-block',
        margin: 8
    },
    media: {
        height: 140,
    },
    h3:{
	    textAlign:'center'
    }
});

let arr = [];
const Products = props => {
    const classes = useStyles();
    return (
          <>
        	<section className={classes.products}>
            <h1 className={classes.h3}>{props.products.activeCategory}</h1>
	  <h3 >In our Store:</h3>
        	<ul className={classes.right} >
        	{props.products.products.map((cat,idx)=>	     
        	<Card key={idx} className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="/static/images/cards/contemplative-reptile.jpg"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
        		{cat.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
        		price: {cat.price }$ 
                  </Typography>
        		<Typography variant="body2" color="textSecondary" component="p">
        		in Stock: {cat.inStock}  
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button variant="contained" color="primary" onClick={()=>{arr.push(cat.name)
        		 props.addToCart(arr)}}>Add To Cart1</Button>
              </CardActions>
            </Card>
        	)}
	</ul>
          </section>
          </>
    );
}

const mapStateToProps = state => ({
    products: state.product
});

const addCartPatch = { addToCart }


export default connect(mapStateToProps, addCartPatch)(Products);