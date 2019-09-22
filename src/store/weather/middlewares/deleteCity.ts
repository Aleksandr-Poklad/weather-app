import { Store } from 'redux';
import { Action } from '../../types';
import { ACTION_TYPES } from '../actionTypes';
import { Forecast } from '../../../models';
import { deleteCity } from '../actions';
import { subscribe } from '../../../utils/redux';

const fetchWorker = (action: Action<undefined>, next, dispatch, getState) => {

	try {
		const state = getState();

		dispatch(deleteCity());

	} catch (e) {
		throw e;
	}
	next(action);
};


const fetchMiddleware = ({ dispatch, getState }: any) => (next: (action: Action<any>) => void) => subscribe(
	ACTION_TYPES.DELETE_CITY,
	fetchWorker
)(next, dispatch, getState);


export const fetchMiddlewares = [ fetchMiddleware ];