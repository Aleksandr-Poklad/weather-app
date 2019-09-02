import axios from 'axios';
import { RootObject } from '../models';

const key = process.env.REACT_APP_APIKEY;
const apiUrl = process.env.REACT_APP_API_URL;


export class ApiRequest {
    public static get = async (uri: string) => {
        try {

            const response = await axios.get<Array<RootObject>>(apiUrl + uri + `&APPID=${ key }`);

            return response.data;
        } catch (e) {
            throw e;
        }

    }


}