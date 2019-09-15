import * as React from 'react';
import withStyles, { WithStyles } from 'react-jss';
import styles from './Home.styles';
import {CityWrapper} from "../CityWrapper";
import {CurrentCity} from "../CurrentCity";
import { Page } from '../Page';
import {connect} from "react-redux";
import { Action, Dispatch } from 'redux';
import { Header } from '../Header';


class Home extends React.PureComponent<WithStyles<typeof styles>> {

    state = {
        idCityFavorites: ['703448', '706483']
    };

    public render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <Header />
                <CurrentCity />
                <CityWrapper />
            </div>
        );
    }

}
// const mapStateToProps = (state: AppState): StateProps => {
//     return {
//         counter: state.counter
//     }
// };
// const mapDespatchToProps = (dispatch: Dispatch<Action<any>>): DispatchProps => {
//     return {
//         onIncrease: () => dispatch({
//             type: 'INCREASE'
//         }),
//         onDecrease: () => dispatch({
//             type: 'DECREASE'
//         })
//     }
// };

// const WrappedHome = withStyles(styles)(connect<StateProps, DispatchProps>(mapStateToProps, mapDespatchToProps)(Home));
const WrappedHome = withStyles(styles)((Home));

export {WrappedHome as Home};