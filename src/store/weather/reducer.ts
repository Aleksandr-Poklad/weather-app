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
			const  id = action.payload;
			let delElement;
			appState.list[0].list.filter((el, i) => {
				// @ts-ignore
				if(el.id === id) {
					return appState.list[0].list.indexOf(el);
				}
			});
			const newList = appState.list[0].list.splice(delElement, 1);
			console.log(newList);
			return {
				...appState,
				list: newList
			};
		default:
			return appState;
	}
};
