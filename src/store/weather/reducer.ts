import { ACTION_TYPES } from './actionTypes';
import { Action } from '../types';
import { Forecast } from '../../models';


export interface WeatherState {
	list: any[];
}

const INITIAL_STATE = {
	list: []
};

export default (appState: WeatherState = INITIAL_STATE, action: Action<any[]>) => {
	switch (action.type) {
		case ACTION_TYPES.SET_LIST:
			return {...appState, list: action.payload };
		default:
			return appState;
	}
};
