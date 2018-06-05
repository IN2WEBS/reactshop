import axios from 'axios';

export function readItem(item) {
    return {
        type: 'READ_ITEM',
        payload: item,
    }
}

export function favoriteItem(id) {
    return async function (dispatch) {
        const response = await axios.post('/item/favorite', {id: id});
        dispatch({
            type: 'FAVORITE_ITEM',
            payload: response.data,
        })
    }
}