import axios from 'axios';
import { apiUrl, SET_CATEGORIES } from '../constants';

export const getCategories = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get(apiUrl + '/categories');
            dispatch({
                type: SET_CATEGORIES,
                payload: response.data
            });
        } catch (error) {
            console.log(error);
        }
    }
}