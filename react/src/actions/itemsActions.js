import axios from 'axios';

export function fetchShopItems(item) {
    return async function (dispatch) {
        const response = await axios.get('/browse');
        dispatch({
            type: 'FETCH_SHOP_ITEMS',
            payload: response.data,
        })
    }
}