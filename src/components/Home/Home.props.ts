import { Forecast } from '../../models';

export interface HomeProps {
}

export interface StateProps {
    weather: Array<Forecast>;
    // weather: FavoriteWeatherTypes[];
}

export interface DispatchProps {
    onFetchList: () => void;
}