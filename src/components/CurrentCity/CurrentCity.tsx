import * as React from 'react';

import withStyles, { WithStyles } from 'react-jss';
import styles from './CurrentCity.styles';
import {ApiRequest} from "../../apis/ApiRequest";
import {Forecast} from "../../models";

const iconUrl = process.env.REACT_APP_API_ICON_URL;
interface State {
    forecast: Array<Forecast>;
}

class CurrentCity extends React.PureComponent<WithStyles<typeof styles>, State> {

    state = {
        forecast: null
    };


    public componentWillMount = async () => {

        try {
            const options = {
                enableHighAccuracy: false,
                timeout: 5000,
                maximumAge: 60000
            };
            const success = async (pos) => {
                console.log(pos.coords.latitude);
                console.log(pos.coords.longitude);

                const forecastCurrent = await ApiRequest.get(`weather?lat=${pos.coords.latitude}&lon=${pos.coords.longitude}`);
                // this.setState({
                //     forecast: forecastCurrent
                //     });
            };
            const error = (err) => {
                console.log(`ERROR(${err.code}): ${err.message}`);
            };

            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(success, error, options);
            }

        } catch (e) {
            throw e;
        }
    };

    public render() {

        const data = this.state.forecast;
        if (!data) return <div>Loading</div>;
        console.log(data);
        const { classes } = this.props;
        return (
                <div className={classes.root}>
                    <h2>
                        {data.name}
                        <span>({data.sys.country})</span>
                    </h2>
                    <div>
                        <p>
                            {data.weather[0].description}
                            <img src={iconUrl + data.weather[0].icon + '.png'} alt=""/>
                        </p>
                        <p>{data.main.temp}˚C</p>
                    </div>
                    <p>Wind Speed: {data.wind.speed} km/h</p>
                    <p>Humidity: {data.main.humidity}%</p>
                    <p>Date: {data.dt_txt}</p>
                </div>
        );
    }


}

const WrappedCurrentCity = withStyles(styles)(CurrentCity);

export {WrappedCurrentCity as CurrentCity};