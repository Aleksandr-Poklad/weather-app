import { Store } from 'redux';
import { Action } from '../../types';
import { ACTION_TYPES } from '../actionTypes';
import { ApiRequest } from '../../../apis/ApiRequest';
import {defaultCities} from '../../../apis/DefaultCities';
import { Forecast } from '../../../models';
import { setList } from '../actions';
import { subscribe } from '../../../utils/redux';

const fetchWorker = async (action: Action<undefined>, next, dispatch, getState) => {

	try {
		const state = getState();
		// const response = await ApiRequest.get(`forecast?id=${defaultCities[0].id}`);

		let newArr = [];
		defaultCities.map(async (item) => {
			const forecastItem = await ApiRequest.get(`forecast?id=${item.id}`);
			return newArr.push(forecastItem);
		});

		// const response = state.weather.list.push(newArr);
		state.weather.list = newArr;
		// const response = state.weather.list.concat(newArr);
		dispatch(setList(newArr));
	} catch (e) {
		throw e;
	}
	next(action);
};


const fetchMiddleware = ({ dispatch, getState }: any) => (next: (action: Action<any>) => void) => subscribe(
	ACTION_TYPES.FETCH_LIST,
	fetchWorker
)(next, dispatch, getState);


export const fetchMiddlewares = [ fetchMiddleware ];