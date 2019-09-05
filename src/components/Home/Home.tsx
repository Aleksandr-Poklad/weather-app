import * as React from 'react';

import withStyles, { WithStyles } from 'react-jss';
import styles from './Home.styles';
import {City} from "../City";


// const idCity = '703448';

class Home extends React.PureComponent<WithStyles<typeof styles>> {

    public render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <City />
            </div>
        );
    }

}

const WrappedHome = withStyles(styles)(Home);

export {WrappedHome as Home};