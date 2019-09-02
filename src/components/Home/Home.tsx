import * as React from 'react';

import withStyles, { WithStyles } from 'react-jss';
import styles from './Home.styles';
import {ApiRequest} from "../../apis/ApiRequest";
import {RootObject} from "../../models";
import uuid from 'uuid/v4';

const idCity = 'Kiev';

interface State {
    forecast: Array<RootObject>;
}

class Home extends React.PureComponent<WithStyles<typeof styles>, State> {

    state = {
        forecast: [],
    };
    public componentWillMount = async () => {
        try {
            const forecast = await ApiRequest.get(`weather?q=${idCity},ua`);
            console.log(forecast);
            this.setWeather(forecast);
        } catch (e) {
            throw e;
        }
    };

    public render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <div className={classes.root}>
                    console.log(this.state.forecast);
                    <div className={classes.name}>{this.state.forecast}</div>
                    <div className={classes.weather}>
                        {/*<div className={classes.temp}>{this.state.forecast.main.temp}</div>*/}
                    </div>
                </div>
            </div>
        );
    }

    private setWeather = (forecast: Array<RootObject>) => {

        this.setState((state) => {
            return {
                forecast: forecast
            };
        });

    };

}

const WrappedHome = withStyles(styles)(Home);

export {WrappedHome as Home};