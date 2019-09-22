import * as React from 'react';

import withStyles, { WithStyles } from 'react-jss';
import styles from './CityItem.styles';
import {Forecast, List} from '../../models';
import {AppState} from "../../store";
import {deleteCity, getWeather} from "../../store/weather";
import {ThunkDispatch} from "redux-thunk";
import {connect} from "react-redux";

const iconUrl = process.env.REACT_APP_API_ICON_URL;

interface Props {
    data: List;
}

interface StateProps {
    weather: Array<Forecast>;
}

interface DispatchProps {
    onDeleteCity: () => void;
}

const CityItem: React.FC<Props & WithStyles<typeof styles>> = ({classes, data}, deleteCity) => {

    return <div className={classes.root}>

        <div className={classes.deleteBtn}
            // onClick={deleteCity}
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

const mapStateToProps = (state: AppState): StateProps => {
    return {
        weather: getWeather(state)
    };
};

const mapDispatchToProps = {
    // onDeleteCity: (id) => dispatch(deleteCity())
    onDeleteCity: (id) => {
        console.log(`delete ${id}`);
    }
};

const WrappedCity = withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(CityItem));

export {WrappedCity as CityItem};