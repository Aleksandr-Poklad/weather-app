
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

const scrollTo = (to, duration) => {
	const element = document.scrollingElement || document.documentElement,
		start = element.scrollTop,
		change = to - start,
		startDate = +new Date();
	// t = current time, b = start value, c = change in value, d = duration
	let easeInOutQuad = function(t, b, c, d) {
			t /= d/2;
			if (t < 1) return c/2*t*t + b;
			t--;
			return -c/2 * (t*(t-2) - 1) + b;
		},
		animateScroll = function() {
			const currentDate = +new Date();
			const currentTime = currentDate - startDate;
			element.scrollTop = parseInt(easeInOutQuad(currentTime, start, change, duration));
			if(currentTime < duration) {
				window.requestAnimationFrame(animateScroll);
			}
			else {
				element.scrollTop = to;
			}
		};
	animateScroll();
};

const offset = (el) => {
	let rect = el.getBoundingClientRect(),
		scrollTop = window.pageYOffset || document.documentElement.scrollTop;
	return {top: rect.top + scrollTop}
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
			const newArr2 = appState.list[0].list.slice();

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
				return {
					...appState,
					list: Array(updateState2)
				};
			} else {
				console.log('old');
				return appState;
			}


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
