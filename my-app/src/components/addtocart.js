import React from 'react';
import {connect} from 'react-redux';
import Button from '@material-ui/core/Button';
import * as actions from '../store/actions';

function AddTOCart(props){
return(
    	<Button onClick={()=>props.post(props.body)} size="small" variant="contained" color="primary">
               Add To Cart
          </Button>
)
}


const mapStateToProps = state => ({
    cart: state.cart,  
});

const mapDispatchToProps = (dispatch, getState) => ({
    get: ()=> dispatch(actions.getRemoteData()),
    put: (id, body) => dispatch(actions.putRemoteData(id, body)),
    post: (body) => dispatch(actions.postRemoteData(body))
});
export default connect(mapStateToProps,mapDispatchToProps)(AddTOCart);