import axios from 'axios';
import { Forecast } from '../models';

const key = process.env.REACT_APP_APIKEY;
const apiUrl = process.env.REACT_APP_API_URL;


export class ApiRequest {
    public static get = async (uri: string) => {
        try {
            const response = await axios.get<Array<Forecast>>(apiUrl + uri + `&APPID=${ key }&units=metric`);
            return response.data;
        } catch (e) {
            throw e;
        }

    }


}