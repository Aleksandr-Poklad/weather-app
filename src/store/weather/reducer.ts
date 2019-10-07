
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

const updateLocalStorage = (newData) => {
	localStorage.setItem('__weatherData__', JSON.stringify(newData));
};

export default (appState: WeatherState = INITIAL_STATE, action: Action<Array<Forecast>>) => {
	switch (action.type) {
		case ACTION_TYPES.SET_LIST:
			return {...appState, list: action.payload };

		case ACTION_TYPES.ADD_CITY:
			return {...appState, list: action.payload };

		case ACTION_TYPES.SET_CITY:
			return {...appState, value: action.payload};

		case ACTION_TYPES.GET_NEW_CITY:
			let newArr2;
			const cachedData2 = localStorage.getItem('__weatherData__');
			const cachedWeather2 =  JSON.parse(cachedData2);

			if(cachedData2) {
				newArr2 = cachedWeather2[0].list;
			} else {
				newArr2 = appState.list[0].list.slice();
			}

			// @ts-ignore
			let addElem = newArr2.find((el) => {
				if(el.name.toLocaleLowerCase() === appState.value.toLocaleLowerCase()) {
					return true;
				} else {
					return false;
				}
			});

			if(!addElem) {
				console.log('new');
				// @ts-ignore
				newArr2.unshift(action.payload);
				const updateState2 = appState.list[0];
				updateState2.cnt++;
				updateState2.list = newArr2;
				updateLocalStorage(Array(updateState2));
				return {
					...appState,
					list: Array(updateState2)
				};
			} else {
				console.log('old');
				return appState;
			}

		case ACTION_TYPES.DELETE_CITY:

			let newArr, updateState;
			const cachedData = localStorage.getItem('__weatherData__');
			const cachedWeather =  JSON.parse(cachedData);
			if(cachedData) {
				newArr = cachedWeather[0].list;
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
				updateState = cachedWeather[0];
				updateState.cnt--;
				updateState.list = newArr;
			} else {
				newArr = appState.list[0].list.slice();
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
				updateState = appState.list[0];
				updateState.cnt--;
				updateState.list = newArr;
			}
			updateLocalStorage(Array(updateState));

			return {
				...appState,
				list: Array(updateState)
			};

		default:
			return appState;
	}
};
