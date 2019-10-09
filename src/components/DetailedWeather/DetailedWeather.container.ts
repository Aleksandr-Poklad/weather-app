import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { AppState } from '../../store';
import { DetailedWeatherComponent } from './DetailedWeather';
import {getWeather, fetchList, getValue, getCityOne } from '../../store/weather';
import { DispatchProps, StateProps } from './DetailedWeather.props';

const mapStateToProps = (state: AppState): StateProps => {
    return {
        weather: getWeather(state),
        value: getValue(state)
    };
};

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, any>) => ({
    onFetchList: () => dispatch(fetchList()),
    onGetCityOne: (id: string) => dispatch(getCityOne(id)),
});

const ConnectedComponentDetailed = connect<StateProps, DispatchProps>(mapStateToProps, mapDispatchToProps)(DetailedWeatherComponent);

export { ConnectedComponentDetailed as DetailedWeather };