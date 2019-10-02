import { Store } from 'redux';
import { Action } from '../../types';
import { ACTION_TYPES } from '../actionTypes';
import { ApiRequest } from '../../../apis/ApiRequest';
import {defaultCities} from '../../../apis/DefaultCities';
import { Forecast } from '../../../models';
import { addCity } from '../actions';
import { subscribe } from '../../../utils/redux';

const fetchWorker = async (action: Action<undefined>, next, dispatch, getState) => {

    try {

        const state = getState();
        // console.log(state.weather.value);
        // let newArr = [];
        //
        // const forecastItem = await ApiRequest.get<Array<Forecast>>(`group?id=${cityName}`);
        // newArr.push(forecastItem);
        // dispatch(adddCity(newArr));

    } catch (e) {
        throw e;
    }
    next(action);
};


const fetchMiddleware = ({ dispatch, getState }: any) => (next: (action: Action<any>) => void) => subscribe(
    ACTION_TYPES.SET_CITY,
    fetchWorker
)(next, dispatch, getState);


export const fetchMiddlewaresSetCity = [ fetchMiddleware ];