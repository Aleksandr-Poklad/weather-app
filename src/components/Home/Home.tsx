import * as React from 'react';
import withStyles, { WithStyles } from 'react-jss';
import styles from './Home.styles';
import {Grid} from "../Grid";
import { RouteComponentProps } from 'react-router';
import { DispatchProps, StateProps } from './Home.props';
import {CurrentCity} from "../CurrentCity";
// import { Page } from '../Page';
import {connect} from "react-redux";
import { Header } from '../Header';


class Home extends React.PureComponent<DispatchProps & StateProps & RouteComponentProps & WithStyles<typeof styles>> {

    public componentDidMount(): void {
        this.props.onFetchList();
    }

    public render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                {/*<Header />*/}
                {/*<CurrentCity />*/}
                <Grid />
            </div>
        );
    }

}


// const WrappedHome = withStyles(styles)(connect<StateProps, DispatchProps>(mapStateToProps, mapDespatchToProps)(Home));
const WrappedHome = withStyles(styles)((Home));

export {WrappedHome as HomeComponent};