const shopItems = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_SHOP_ITEMS': return [...action.payload.items];
        case 'FAVORITE_ITEM': {
            return  state.map((item)=>{
                if(item.id===action.payload){
                    return {...item, on_hold:!item.on_hold}
                }else{
                    return item
                }
            })
        }
        default :
            return state
    }
};

export default shopItems;