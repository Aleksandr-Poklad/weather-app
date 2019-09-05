import * as React from 'react';

import withStyles, { WithStyles } from 'react-jss';
import styles from './Home.styles';
import {ApiRequest} from "../../apis/ApiRequest";
import {Forecast} from "../../models";
import {CityItem} from "../CityItem";
import uuid from 'uuid/v4';

const idCity = '703448';

interface State {
    city: Array<Forecast>;
}

class Home extends React.PureComponent<WithStyles<typeof styles>, State> {

    state = {
        city: null,
    };
    public componentWillMount = async () => {
        try {
            const city = await ApiRequest.get(`forecast?id=${idCity}`);
            this.setState({ city: city });
        } catch (e) {
            throw e;
        }
    };

    public render() {
        const weatherData = this.state.city;
        if (!weatherData) return <div>Loading</div>;
        console.log(weatherData);
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <CityItem key={ uuid() } data={ this.state.city }/>
            </div>
        );
    }

}

const WrappedHome = withStyles(styles)(Home);

export {WrappedHome as Home};