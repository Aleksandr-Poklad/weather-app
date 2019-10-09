import { Forecast, List } from '../../models';
import { match } from 'react-router';

export interface DetailedWeatherProps {
    match?: match<{ id: string }>;
}

export interface StateProps {
    weather: Array<Forecast>;
    value: string;
}

export interface DispatchProps {
    onFetchList: () => void;
    onGetCityOne: (id: string) => void;
}