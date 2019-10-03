import { ACTION_TYPES } from './actionTypes';
import { Action } from '../types';
import { Forecast } from '../../models';

export interface WeatherState {
	list: Array<Forecast>;
	value: string;
}

const INITIAL_STATE = {
	list: [],
	value: ''
};

export default (appState: WeatherState = INITIAL_STATE, action: Action<Array<Forecast>>) => {
	switch (action.type) {
		case ACTION_TYPES.SET_LIST:
			return {...appState, list: action.payload };

		case ACTION_TYPES.ADD_CITY:
			return {...appState, list: action.payload };

		case ACTION_TYPES.SET_CITY:
			return {...appState, value: action.payload};

		case ACTION_TYPES.FETCH_NEW_CITY:
			const newArr2 = appState.list[0].list.slice();
			// const  id2= action.payload;
			let delElement2;
			// newArr2.filter((el) => {
			// 	// @ts-ignore
			// 	if(el.id === id) {
			// 		return delElement = newArr.indexOf(el);
			// 	}
			// });
			// @ts-ignore
			// newArr2.splice(delElement2, 1);
			newArr2.push(action.payload);
			
			console.log(newArr2);

			const updateState2 = appState.list[0];
			updateState2.cnt++;
			updateState2.list = newArr2;

			return {
				...appState,
				list: Array(updateState2)
			};
			
			// return {...appState, list: action.payload };

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
