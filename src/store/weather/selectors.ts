import { AppState } from '../index';
import { Forecast } from '../../models';

export const getPhotos = (state: AppState): Array<Forecast> => state.weather.list;