import axios from 'axios';

const key = process.env.REACT_APP_APIKEY;
const apiUrl = process.env.REACT_APP_API_URL;


// export class ApiRequest {
//     public static get = async (uri: string) => {
//         try {
//             const response = await axios.get<Array<Forecast>>(apiUrl + uri + `&APPID=${ key }&units=metric`);
//             return response.data;
//         } catch (e) {
//             throw e;
//         }
//     }
// }

export class ApiRequest {
    public static get = async <T>(uri: string) => {
        try {

            const response = await axios.get<T>(apiUrl + uri + `&APPID=${ key }&units=metric`);
            return response.data;
        } catch (e) {
            throw e;
        }
    };

}