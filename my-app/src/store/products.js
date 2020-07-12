let initialState = {
    categories: [
        { name: 'electronics', displayName: 'Elecronics' },
        { name: 'food', displayName: 'Food' },
        { name: 'clothing', displayName: 'Clothing' },
    ],
    products: [
        { name: 'TV', category: 'electronics', price: 699.00, inStock: 5 },
        { name: 'Radio', category: 'electronics', price: 99.00, inStock: 15 },
        { name: 'Shirt', category: 'clothing', price: 9.00, inStock: 25 },
        { name: 'Socks', category: 'clothing', price: 12.00, inStock: 10 },
        { name: 'Apples', category: 'food', price: .99, inStock: 500 },
        { name: 'Eggs', category: 'food', price: 1.99, inStock: 12 },
        { name: 'Bread', category: 'food', price: 2.39, inStock: 90 },
    ],
    activeCategory: ''
}

export default (state = initialState, action) => {
    let { type, payload } = action;

    switch (type) {
        case 'Active':
            state = initialState;
            let products = state.products.filter(product => product.category === payload);
            let activeCategory = state.categories.filter(cat => cat.name === payload)[0]['displayName'];
            return { categories: state.categories, products, activeCategory };

        default:
            let product = state.products.filter(product => product.category === state.categories[0].name);
            let active = state.categories.filter(cat => cat.name === state.categories[0].name);
            return { categories: state.categories, products: product, activeCategory: active[0]['displayName'] };
    }
}

export const active = (name) => {
    return {
        type: 'Active',
        payload: name
    }
}