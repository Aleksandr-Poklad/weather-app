import * as React from 'react';

import withStyles, { WithStyles } from 'react-jss';
import styles from './Grid.styles';
import {ApiRequest} from "../../apis/ApiRequest";
import {Forecast} from "../../models";
import {CityItem} from "../CityItem";
import {defaultCities} from '../../apis/DefaultCities';
import uuid from 'uuid/v4';

interface State {
    forecast: Array<Forecast>;
    defaultCities: any
}

class Grid extends React.PureComponent<WithStyles<typeof styles>, State> {

    state = {
        forecast: null,
        defaultCities: []
    };

    public componentWillMount = async () => {
        try {
            const forecast = defaultCities.map(async (item) => {
                const forecastItem = await ApiRequest.get(`forecast?id=${item.id}`);
                this.setState(({defaultCities}) => {
                    const newArr = [...defaultCities, forecastItem];
                    return {
                        defaultCities: newArr
                    }
                });
            });

        } catch (e) {
            throw e;
        }
    };

    public render() {
        const weatherData = this.state.defaultCities;
        if (!weatherData) return <div>Loading</div>;
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                {weatherData.map((item) => {
                    return <CityItem key={ uuid() } data={ item }/>
                })}

            </div>
        );
    }

}

const WrappedCity = withStyles(styles)(Grid);

export {WrappedCity as Grid};