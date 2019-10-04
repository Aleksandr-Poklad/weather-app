import { Forecast } from '../../models';

export interface HomeProps {

}

export interface StateProps {
    weather: Array<Forecast>;
    value: string;
}

export interface DispatchProps {
    onFetchList: () => void;
    onDeleteCity: (id: number) => void;
    onSetCity: (value: string) => void;
    onFetchNewCity: () => void;
}