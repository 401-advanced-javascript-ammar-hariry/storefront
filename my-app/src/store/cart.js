let initialState = {
    products: [
        { name: 'TV ' },
        { name: 'Radio ' },
        { name: 'Shirt ' },
        { name: 'Socks ' },
        { name: 'Apples ' },
        { name: 'Eggs ' },
        { name: 'Bread ' },
    ],

}

export default (state = initialState, action) => {
    let { type, payload, status } = action;

    switch (type) {
        case 'ADD':
            state = initialState;
            return { payload, status, totalCart: state.totalCart };
        default:
            return { status: true };
    }
}

export const addToCart = (name) => ({
    type: 'ADD',
    payload: name,
    status: false
})
export const remove = () => ({
    type: 'Remove',

})