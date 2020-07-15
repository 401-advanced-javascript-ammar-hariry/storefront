import React, { useEffect } from 'react';
import { connect, dispatch } from 'react-redux';
import { Button, Typography } from '@material-ui/core';
import { Link, Route } from 'react-router-dom';
import * as actions from '../store/actions'

var changes;

const SimpleCart = props => {

    const changeHandler = (e) => {
        changes = e.target.value;
    }

    useEffect(() => {
        props.get();
    }, []);

    return (
          <>
          <Button  >cart ({props.data.results.length})</Button>
	
        	<section style={{float: "right"}}>
          {props.data.results.map((record, idx) => {
          return <div key={idx}>
           	<h3>Title:  {record.name}</h3>  
             	category :{record.category}
              	price: {record.price}
              	inStock: {record.inStock}
                	quantity: {record.quantity}
          <Typography variant="body2" color="textSecondary" component="p">
                    Price: {record.price}$ - Quantity: <input onChange={changeHandler} className="inNum" type="number" name="quantity" placeholder={record.quantity} />
          </Typography>
	<Button onClick={()=>{props.delete(record._id)
		 props.get();}}>Delete</Button>
	      <Button onClick={()=>{props.put(changes,record,record._id)
	props.get();}}>update</Button>
          </div>
          })}
        	</section>
          </>
    )
}

const mapStateToProps = state => ({
    data: state.data
});

const mapDispatchToProps = (dispatch, getState) => ({
    get: () => dispatch(actions.getRemoteData()),
    put: (change, data, id) => dispatch(actions.putRemoteData(change, data, id)),
    post: (data) => dispatch(actions.postRemoteData(data)),
    delete: (id) => dispatch(actions.deleteRemoteData(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(SimpleCart);