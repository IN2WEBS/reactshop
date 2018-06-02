const singleItem = (state = [], action) => {
    switch (action.type) {
        case 'READ_ITEM' :
            return [...state, action.payload];
        default :
            return state
    }
};

export default singleItem;


