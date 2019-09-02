import * as React from 'react';

import withStyles, { WithStyles } from 'react-jss';
import styles from './City.styles';
import { RootObject } from '../../models';

interface Props {
    data: RootObject;
}

const City: React.FC<Props & WithStyles<typeof styles>> = ({classes, data}) => {
    return <div className={classes.root}>

            <div>{data.name}</div>
            <div>
                {data.main.temp}
            </div>

    </div>;
};

const WrappedCity = withStyles(styles)(City);

export {WrappedCity as City};