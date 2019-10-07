// import { Store } from 'redux';
import { Action } from '../../types';
import { ACTION_TYPES } from '../actionTypes';
import { ApiRequest } from '../../../apis/ApiRequest';
import { Forecast } from '../../../models';
import {getNewCity} from '../actions';
import { subscribe } from '../../../utils/redux';

const fetchWorker = async (action: Action<undefined>, next, dispatch, getState) => {

    try {

        const state = getState();
        const forecastItem = await ApiRequest.get<Array<Forecast>>(`weather?q=${state.weather.value}`);
        dispatch(getNewCity(forecastItem));

    } catch (e) {
        // throw e
        console.log(e);
        alert('City ​​name is entered incorrectly!')
    }
    next(action);
};


const fetchMiddleware = ({ dispatch, getState }: any) => (next: (action: Action<any>) => void) => subscribe(
    ACTION_TYPES.FETCH_NEW_CITY,
    fetchWorker
)(next, dispatch, getState);


export const fetchMiddlewaresGetNewCity = [ fetchMiddleware ];