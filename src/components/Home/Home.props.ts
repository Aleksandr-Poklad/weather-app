import { Forecast, FavoriteWeatherTypes } from '../../models';

export interface HomeProps {
}

export interface StateProps {
    weather: Forecast[];
    // weather: FavoriteWeatherTypes[];
}

export interface DispatchProps {
    onFetchList: () => void;
}