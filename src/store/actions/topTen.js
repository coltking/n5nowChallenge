import axios from 'axios';
import { apiUrl, SET_TOP_TEN } from '../constants';


export const getTopTen = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get(apiUrl + '/ctas/top10');
            dispatch({
                type: SET_TOP_TEN,
                payload: response.data
            });
        } catch (error) {
            console.log(error);
        }
    }
}