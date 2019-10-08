import * as React from 'react';

import withStyles, { WithStyles } from 'react-jss';
import styles from './DetailedWeather.styles';
import {Forecast, List} from '../../models';
import {match, RouteComponentProps} from 'react-router';
import {DispatchProps, StateProps, DetailedWeatherProps} from "./DetailedWeather.props";
import {Page} from "../Page";

const iconUrl = process.env.REACT_APP_API_ICON_URL;

class DetailedWeather extends React.PureComponent<DispatchProps & StateProps & DetailedWeatherProps & RouteComponentProps & WithStyles<typeof styles>> {

    componentDidMount() {
        const id = this.props.match!.params.id;
        this.props.onGetCityOne(id);
    }

    public render() {
        const {weather, classes} = this.props;
        
        if (weather[0].list.length > 1) return <div>Loading</div>;
        
        const data = weather[0].list[0];
        
        console.log(data);

        return (
                <Page title={ 'WEATHER|CITY' }>
                    <div className={classes.root}>

                        <h2 className={classes.title}>
                            {data.name}
                            <span className={classes.titleSpan}>({data.sys.country})</span>
                        </h2>

                        <div className={classes.descrWr}>
                            <p className={classes.iconWr}>
                                {data.weather[0].description}
                                <img src={iconUrl + data.weather[0].icon + '.png'} alt=""/>
                            </p>
                            <p>{data.main.temp}˚C</p>
                        </div>
                        <p>Wind Speed: {data.wind.speed} km/h</p>
                        <p>Humidity: {data.main.humidity}%</p>

                    </div>;
                </Page>
            )

    }
}

const WrappedDetailed = withStyles(styles)(DetailedWeather);

export {WrappedDetailed as DetailedWeatherComponent};