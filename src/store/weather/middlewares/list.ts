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

		let newArr = [];

		const forecastItem = await ApiRequest.get<Array<Forecast>>(`forecast?id=${defaultCities[0].id}`);
		newArr.push(forecastItem);

		// defaultCities.map(async (item) => {
		// 	const forecastItem = await ApiRequest.get<Array<Forecast>>(`forecast?id=${item.id}`);
		// 	return newArr.push(forecastItem);
		// });
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