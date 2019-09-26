import { ACTION_TYPES } from './actionTypes';
import { Action } from '../types';
import { Forecast } from '../../models';
import {log} from "util";


export interface WeatherState {
	list: Array<Forecast>;
}

const INITIAL_STATE = {
	list: []
};

export default (appState: WeatherState = INITIAL_STATE, action: Action<Array<Forecast>>) => {
	switch (action.type) {
		case ACTION_TYPES.SET_LIST:
			return {...appState, list: action.payload };
		case ACTION_TYPES.DELETE_CITY:
			const newArr = appState.list[0].list.slice();
			const  id = action.payload;
			let delElement;
			newArr.filter((el) => {
				// @ts-ignore
				if(el.id === id) {
					return delElement = newArr.indexOf(el);
				}
			});
			// @ts-ignore
			newArr.splice(delElement, 1);

			const updateState = appState.list[0];
			updateState.cnt--;
			updateState.list = newArr;

			return {
				...appState,
				list: Array(updateState)
			};
		default:
			return appState;
	}
};
