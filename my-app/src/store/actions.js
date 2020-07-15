import superagent from 'superagent';

let apiUrl = 'https://api401-todo.herokuapp.com/product';


export const postRemoteData = (body) => async dispatch => {

    body.quantity = 1;
    return superagent.post(apiUrl)
        .send(body)
        .set('X-API-Key', 'foobar')
        .set('Accept', 'application/json')
        .then(response => {
            dispatch(postAction(response.body));
        });

}

export const getRemoteData = () => dispatch => {

    return superagent.get(apiUrl)
        .then(data => {
            console.log(data.body);
            dispatch(getAction(data.body))
        });
}
export const putRemoteData = (change, body, id) => async dispatch => {
    body.quantity = parseInt(change);
    return superagent.put(`${apiUrl}/${id}`)
        .send(body)
        .set('Accept', 'application/json')
        .then(res => {
            dispatch(putAction(res));
        });
}

export const deleteRemoteData = (id) => async dispatch => {
    let res = await (await superagent.delete(`${apiUrl}/${id}`));
    dispatch(deleteAction(res.body));
}

export const postAction = payload => {
    return {
        type: 'POST',
        payload: payload
    }
}
export const getAction = payload => {
    return {
        type: 'GET',
        payload: payload
    }
}

export const putAction = payload => {
    return {
        type: 'PUT',
        payload: payload
    }
}


export const deleteAction = payload => {
    return {
        type: 'DELETE',
        payload: payload
    }
}