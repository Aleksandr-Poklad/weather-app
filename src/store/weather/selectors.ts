import { AppState } from '../index';
import { Forecast } from '../../models';

export const getWeather = (state: AppState): any[] => state.weather.list;