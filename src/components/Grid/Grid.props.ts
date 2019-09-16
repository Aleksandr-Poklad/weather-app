import { Forecast } from '../../models';


export interface StateProps {
    weather: any[];
}

export interface DispatchProps {
    onFetchList: () => void;
}