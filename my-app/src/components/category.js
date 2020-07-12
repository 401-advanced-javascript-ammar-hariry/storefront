import React from 'react';
import { connect } from 'react-redux';
import {active} from '../store/products.js';
const Categories = props =>{
	return(
	<section>
		<ul>
		{props.counter.categories.map((val,idx)=>
		<li key={idx} onClick={()=>props.active(val.name) }>{val.name}</li>
		)}
		</ul>
	</section>
	)

}

const mapCategory = state =>({
	counter: state.product
});

const mapDispatchToProps = {active};

export default connect(mapCategory, mapDispatchToProps)(Categories);
