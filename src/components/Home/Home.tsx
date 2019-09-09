import * as React from 'react';

import withStyles, { WithStyles } from 'react-jss';
import styles from './Home.styles';
import {CityWrapper} from "../CityWrapper";
import {CurrentCity} from "../CurrentCity";
import {connect} from "react-redux";


class Home extends React.PureComponent<WithStyles<typeof styles>> {

    state = {
        idCityFavorites: ['703448', '706483']
    };

    public render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>

                <CurrentCity />
                <CityWrapper />
            </div>
        );
    }

}

const WrappedHome = withStyles(styles)(connect()(Home));

export {WrappedHome as Home};