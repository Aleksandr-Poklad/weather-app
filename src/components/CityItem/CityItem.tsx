import * as React from 'react';

import withStyles, { WithStyles } from 'react-jss';
import styles from './CityItem.styles';
import {Forecast, List} from '../../models';

const iconUrl = process.env.REACT_APP_API_ICON_URL;

interface Props {
    data: List;
    id: number;
    deleteCity: any;
}

const CityItem: React.FC<Props & WithStyles<typeof styles>> = ({classes, data, id, deleteCity}) => {

    return <div className={classes.root}>

        <div className={classes.deleteBtn}
            onClick={() => {
                // console.log(id);
                // deleteCity.onDeleteCity(id);
            }}
        >
            x
        </div>

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
};

const WrappedCity = withStyles(styles)(CityItem);

export {WrappedCity as CityItem};