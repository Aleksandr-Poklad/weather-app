import * as React from 'react';

import withStyles, { WithStyles } from 'react-jss';
import styles from './CityItem.styles';
import {FavoriteWeatherTypes, Forecast} from '../../models';

const iconUrl = process.env.REACT_APP_API_ICON_URL;

interface Props {
    data: Forecast;
    // data: FavoriteWeatherTypes;
}

const CityItem: React.FC<Props & WithStyles<typeof styles>> = ({classes, data}) => {


    return <div className={classes.root}>

        <h2 className={classes.title}>
            {data.city.name}
            <span className={classes.titleSpan}>({data.city.country})</span>
        </h2>
        <div className={classes.descrWr}>
            <p className={classes.iconWr}>
                {data.list[0].weather[0].description}
                <img src={iconUrl + data.list[0].weather[0].icon + '.png'} alt=""/>
            </p>
            <p>{data.list[0].main.temp}˚C</p>
        </div>
        <p>Wind Speed: {data.list[0].wind.speed} km/h</p>
        <p>Humidity: {data.list[0].main.humidity}%</p>
        <p>Date: {data.list[0].dt_txt}</p>

    </div>;
};

const WrappedCity = withStyles(styles)(CityItem);

export {WrappedCity as CityItem};