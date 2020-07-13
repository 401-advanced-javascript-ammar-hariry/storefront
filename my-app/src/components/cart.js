import React from 'react';
import { connect } from 'react-redux'

const SimpleCart = props => {

    return (
		<>
	<header>cart({props.carts.status ? 0 :props.carts.payload.length}) </header>
                <aside>
                <ul>
	        {props.carts.status ? '' :props.carts.payload.map((products,idx) =>
		<li key={idx}>- {products} </li> )}   
                </ul>

                </aside>
	</>
    )
}

const mapStateToProps = state => ({
    carts: state.productsCart
});

export default connect(mapStateToProps)(SimpleCart);