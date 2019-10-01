import * as React from 'react';
import withStyles, { WithStyles } from 'react-jss';
import styles from './Home.styles';
import {Grid} from "../Grid";
import { RouteComponentProps } from 'react-router';
import { DispatchProps, StateProps } from './Home.props';
import {CurrentCity} from "../CurrentCity";
import { Page } from '../Page';
import {connect} from "react-redux";
import { Header } from '../Header';
import { CityItem } from '../CityItem';
import { List } from '../../models';
import {Search} from "../Search";
import { ChangeEvent } from 'react';


class Home extends React.PureComponent<DispatchProps & StateProps & RouteComponentProps & WithStyles<typeof styles>> {

    public componentDidMount(): void {
        this.props.onFetchList();
    }

    handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setCity(event.target.value);
    };

    public render() {
        let favoriteCitiesItem = null;
        const {weather, classes } = this.props;

        if (weather.length === 0) return <div>Loading</div>;

        if (weather[0] !== undefined) {
            favoriteCitiesItem = weather[0].list.map((items: List, i) => {
                return (
                    <CityItem
                        key={i}
                        data={items}
                        deleteCity={this.props}
                    />
                );
            });
        }

        return (
                <Page title={ 'WEATHER|HOME' }>
                    <div className={classes.root}>
                        {/*<Header />*/}
                        {/*<CurrentCity />*/}
                        <Search handleChange={}/>
                        <Grid>
                         {favoriteCitiesItem}
                        </Grid>
                    </div>
                </Page>
        );


    }

}
const WrappedHome = withStyles(styles)((Home));

export {WrappedHome as HomeComponent};