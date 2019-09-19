import * as React from "react";
import withStyles, { WithStyles } from 'react-jss';
import { Switch, Route } from 'react-router';
import routes, { AppRoute } from './App.routes';
import { v4 as uuid } from 'uuid';
import styles from './App.styles';
import { ProtectedRoute } from '../ProtectedRoute';

class App extends React.PureComponent<WithStyles<typeof styles>> {

    public render() {
        const { classes } = this.props;
        return (
                <div className={classes.root}>
                    <Switch>
                        {
                            routes.map((route: AppRoute) => route.isProtected ? <ProtectedRoute key={ uuid() } { ...route } /> : <Route key={ uuid() } { ...route }/>)
                        }
                    </Switch>
                </div>
        );
    }

}


const WrappedApp = withStyles(styles)(App);
export { WrappedApp as App };