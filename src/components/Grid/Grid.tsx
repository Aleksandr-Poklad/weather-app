import * as React from 'react';
import { ReactNode } from 'react';

import withStyles, { WithStyles } from 'react-jss';
import styles from './Grid.styles';
import {ApiRequest} from "../../apis/ApiRequest";
import {Forecast} from "../../models";
import {CityItem} from "../CityItem";
import {defaultCities} from '../../apis/DefaultCities';
import uuid from 'uuid/v4';


interface Props {
    children: ReactNode;
}

const Grid: React.FC<Props & WithStyles<typeof styles>> = ({classes, children}) => {

    const childrenWithProps  = React.Children.map(children, (child) => child);

    return <div className={classes.root}>
        {childrenWithProps }
    </div>;
};

const WrappedCity = withStyles(styles)(Grid);

export {WrappedCity as Grid};