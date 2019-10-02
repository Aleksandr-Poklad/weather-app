import * as React from 'react';
import { SyntheticEvent } from 'react';
import withStyles, { WithStyles } from 'react-jss';
import styles from './Search.styles';

interface SearchProps {
    handleChange: any;
    searchCity: any;
}

class Search extends React.PureComponent<SearchProps & WithStyles<typeof styles>> {


    submitForm = (event: SyntheticEvent<HTMLFormElement>) => {
        event.preventDefault();
    };

    public render() {
        const {classes, handleChange, searchCity } = this.props;

        return <div className={classes.root}>
            <form onClick={this.submitForm}>
                <input className={classes.input}
                    type="text"
                    placeholder='Enter city'
                    // value={value}
                    onChange={handleChange}
                />
                <button className={classes.searchBtn}
                    onClick={searchCity}
                >
                    Search
                </button>

            </form>
        </div>;
    }


}

const WrappedCity = withStyles(styles)(Search);

export {WrappedCity as Search};