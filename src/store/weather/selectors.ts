import { AppState } from '../index';
import { Forecast } from '../../models';

export const getWeather = (state: AppState): any[] => state.weather.list;
export const getValue = (state: AppState): string => state.weather[0].value;