import { Store } from 'redux';
import { Action } from '../../types';
import { ACTION_TYPES } from '../actionTypes';
import { Forecast } from '../../../models';
import { deleteCity } from '../actions';
import { subscribe } from '../../../utils/redux';




const fetchWorker = (id: any) => (action: Action<undefined>, next, dispatch, getState) => {

	// const state = getState();
	
	console.log(id);

	// const newList = state.splice(id, 1);
	//
	// dispatch(deleteCity(newList));

	next(action);
};


const fetchMiddleware = ({ dispatch, getState, id }: any) => (next: (action: Action<any>) => void) => subscribe(
	ACTION_TYPES.DELETE_CITY,
	fetchWorker(id)
)(next, dispatch, getState);


export const fetchMiddlewaresDel = [ fetchMiddleware ];