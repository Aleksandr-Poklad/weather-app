import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { AppState } from '../../store';
import { HomeComponent } from './Home';
import { getWeather, fetchList } from '../../store/weather';
import { DispatchProps, HomeProps, StateProps } from './Home.props';

const mapStateToProps = (state: AppState): StateProps => {
    return {
        weather: getWeather(state)
    };
};

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, any>) => ({
    onFetchList: () => dispatch(fetchList()),
});

const ConnectedComponent = connect<StateProps, DispatchProps, HomeProps>(mapStateToProps, mapDispatchToProps)(HomeComponent);

export { ConnectedComponent as Home };