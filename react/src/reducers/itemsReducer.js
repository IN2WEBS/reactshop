const shopItems = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_SHOP_ITEMS': return [...action.payload];
        default :
            return state
    }
};

export default shopItems;