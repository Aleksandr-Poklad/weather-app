
import { Action } from '../../types';
import { ACTION_TYPES } from '../actionTypes';
import { subscribe } from '../../../utils/redux';


const fetchWorker = () => (action: Action<undefined>, next, dispatch, getState) => {
	// const state = getState();
	// dispatch(deleteCity(newList));
	next(action);
};

const fetchMiddleware = ({ dispatch, getState}: any) => (next: (action: Action<any>) => void) => subscribe(
	ACTION_TYPES.DELETE_CITY,
	fetchWorker()
)(next, dispatch, getState);


export const fetchMiddlewaresDel = [ fetchMiddleware ];