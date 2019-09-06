import * as React from 'react';

import withStyles, { WithStyles } from 'react-jss';
import styles from './CityWrapper.styles';
import {ApiRequest} from "../../apis/ApiRequest";
import {Forecast} from "../../models";
import {CityItem} from "../CityItem";
import uuid from 'uuid/v4';

const idCity = '703448';


interface State {
    forecast: Array<Forecast>;
}

class CityWrapper extends React.PureComponent<WithStyles<typeof styles>, State> {

    state = {
        forecast: null
    };

    public componentWillMount = async () => {
        try {
            const forecast = await ApiRequest.get(`forecast?id=${idCity}`);
            this.setState((state) => {
                return {
                    forecast: forecast
                }
            });

        } catch (e) {
            throw e;
        }
    };

    public render() {
        const weatherData = this.state.forecast;
        if (!weatherData) return <div>Loading</div>;
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <CityItem key={ uuid() } data={ this.state.forecast }/>
            </div>
        );
    }

}

const WrappedCity = withStyles(styles)(CityWrapper);

export {WrappedCity as CityWrapper};