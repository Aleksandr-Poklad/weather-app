import * as React from 'react';

import withStyles, { WithStyles } from 'react-jss';
import styles from './Home.styles';
import {ApiRequest} from "../../apis/ApiRequest";
import {RootObject} from "../../models";
import {City} from "../City";
import uuid from 'uuid/v4';

const idCity = 'Kiev';

interface State {
    forecast?: Array<RootObject>;
}

class Home extends React.PureComponent<WithStyles<typeof styles>, State> {

    state = {
        forecast: [],
    };
    public componentWillMount = async () => {
        try {
            const forecast = await ApiRequest.get(`weather?q=${idCity},ua`);
            this.setWeather(forecast);
            console.log(this.state.forecast);
        } catch (e) {
            throw e;
        }
    };

    public render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                {
                    this.state.forecast.map((item) => {
                        return <City key={ uuid() } data={ item }/>
                    })
                }
            </div>
        );
    }

    private setWeather = (forecast: Array<RootObject>) => {

        this.setState((state) => ({ ...state, forecast: forecast }));

    };

}

const WrappedHome = withStyles(styles)(Home);

export {WrappedHome as Home};