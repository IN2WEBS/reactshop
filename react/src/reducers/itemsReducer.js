const shopItems = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_SHOP_ITEMS': return [...action.payload.items];
        default :
            return state
    }
};

export default shopItems;