import * as React from 'react';

import withStyles, { WithStyles } from 'react-jss';
import styles from './CityItem.styles';
import {Forecast, List} from '../../models';

const iconUrl = process.env.REACT_APP_API_ICON_URL;

interface Props {
    data: List;
    deleteCity: any;
}

const CityItem: React.FC<Props & WithStyles<typeof styles>> = ({classes, data, deleteCity}) => {

    return <div className={classes.root}>

        <div className={classes.deleteBtn}
            onClick={() => {
                deleteCity.onDeleteCity(data.id);
            }}
        >
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="trash"
                 className={classes.deleteBtnSvg} role="img" xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 448 512">
                <path fill="currentColor" d="M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z"></path>
            </svg>
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