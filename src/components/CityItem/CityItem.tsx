import * as React from 'react';

import withStyles, { WithStyles } from 'react-jss';
import styles from './CityItem.styles';
import { Forecast } from '../../models';

interface Props {
    data: Forecast;
}

const CityItem: React.FC<Props & WithStyles<typeof styles>> = ({classes, data}) => {
    return <div className={classes.root}>
            <h2>{data.city.name}</h2>
            <p>{data.list[0].main.temp}</p>
    </div>;
};

const WrappedCity = withStyles(styles)(CityItem);

export {WrappedCity as CityItem};