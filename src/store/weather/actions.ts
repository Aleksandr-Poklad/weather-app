import { Forecast } from '../../models';
import { ACTION_TYPES } from './actionTypes';

export const setList = (list: Array<Forecast>) => ({
	type: ACTION_TYPES.SET_LIST,
	payload: list
});

export const fetchList = () => ({
	type: ACTION_TYPES.FETCH_LIST,
});

export const deleteCity = (id: number) => ({
	type: ACTION_TYPES.DELETE_CITY,
	payload: id
});

export const addCity = (cityName: string) => ({
	type: ACTION_TYPES.ADD_CITY,
	payload: cityName
});
