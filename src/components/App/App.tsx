import * as React from "react";
import withStyles, { WithStyles } from 'react-jss';
import styles from './App.styles';
import {Home} from '../Home';

class App extends React.PureComponent<WithStyles<typeof styles>> {

    public render() {
        const { classes } = this.props;
        return (
                <div className={classes.root}>
                    <Home />
                </div>
        );
    }

}


const WrappedApp = withStyles(styles)(App);
export { WrappedApp as App };