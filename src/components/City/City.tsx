import * as React from 'react';

import withStyles, { WithStyles } from 'react-jss';
import styles from './City.styles';
import {ApiRequest} from "../../apis/ApiRequest";
import {Forecast} from "../../models";
import {CityItem} from "../CityItem";
import uuid from 'uuid/v4';

const idCity = '703448';
const idCityFavorites = ['703448', '706483'];

interface State {
    forecast: Array<Forecast>;
}

class City extends React.PureComponent<WithStyles<typeof styles>, State> {

    state = {
        forecast: null,
    };
    public componentWillMount = async () => {
        try {
            const forecast = await ApiRequest.get(`forecast?id=${idCity}`);
            this.setState({ forecast: forecast });
        } catch (e) {
            throw e;
        }
    };

    public render() {
        const weatherData = this.state.forecast;
        if (!weatherData) return <div>Loading</div>;
        console.log(weatherData);
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <CityItem key={ uuid() } data={ this.state.forecast }/>
            </div>
        );
    }

}

const WrappedCity = withStyles(styles)(City);

export {WrappedCity as City};