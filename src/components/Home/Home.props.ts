import { Forecast } from '../../models';

export interface HomeProps {

}

export interface StateProps {
    weather: Array<Forecast>;
}

export interface DispatchProps {
    onFetchList: () => void;
    onDeleteCity: (id: number) => void;
    onSetCity: (value: string) => void;
}