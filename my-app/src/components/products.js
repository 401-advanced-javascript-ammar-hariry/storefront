import React from 'react';
import { connect } from 'react-redux';

const Products = props => {
	return (
	    <>
	    <div >
	    <h1 >{props.products.activeCategory}</h1>
	    <h3>Content:</h3>
	    </div>
	    
	    <section className="products">
		    <ul>
	        {props.products.products.map((cat,idx)=>
		    
		<li key={idx}>ptoduct: {cat.inStock}  | price: {cat.price }{cat.name} </li>
		
		)}
		</ul>
	    </section>
	    </>
	);
      }
      
      
      
      const mapStateToProps = state => ({
	products: state.product
      });
      
      
      export default connect(mapStateToProps)(Products);