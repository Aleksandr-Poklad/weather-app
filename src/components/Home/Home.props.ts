import { Forecast } from '../../models';

export interface HomeProps {
}

export interface StateProps {
    weather: any[];
}

export interface DispatchProps {
    onFetchList: () => void;
}