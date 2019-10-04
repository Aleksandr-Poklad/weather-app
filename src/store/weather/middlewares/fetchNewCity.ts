import { Store } from 'redux';
import { Action } from '../../types';
import { ACTION_TYPES } from '../actionTypes';
import { ApiRequest } from '../../../apis/ApiRequest';
import { Forecast } from '../../../models';
import {addCity, fetchNewCity, setCity} from '../actions';
import { subscribe } from '../../../utils/redux';

const fetchWorker = async (action: Action<undefined>, next, dispatch, getState) => {

    try {

        const state = getState();
        
        console.log(state);

        let newArr = state.weather.list[0].list.slice();

        const forecastItem = await ApiRequest.get<Array<Forecast>>(`weather?q=${state.weather.value}`);
        newArr.push(forecastItem);

        const updateState = state.weather.list[0];
        updateState.cnt++;
        updateState.list = newArr;
        dispatch(fetchNewCity(updateState));

    } catch (e) {
        throw e;
    }
    next(action);
};


const fetchMiddleware = ({ dispatch, getState }: any) => (next: (action: Action<any>) => void) => subscribe(
    ACTION_TYPES.FETCH_NEW_CITY,
    fetchWorker
)(next, dispatch, getState);


export const fetchMiddlewaresFetchNewCity = [ fetchMiddleware ];