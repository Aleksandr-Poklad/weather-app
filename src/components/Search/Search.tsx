import * as React from 'react';
import { SyntheticEvent } from 'react';
import withStyles, { WithStyles } from 'react-jss';
import styles from './Search.styles';

interface SearchProps {
    value: string;
    onChange: (inputText: string) => void;
}

class Search extends React.PureComponent<SearchProps & WithStyles<typeof styles>> {


    submitForm = (event: SyntheticEvent<HTMLFormElement>) => {
        event.preventDefault();
    };

    onChange = (event: SyntheticEvent<HTMLInputElement>) => {
        this.props.onChange(event.currentTarget.value);
    };

    private searchCity(e) {
        e.preventDefault();
    }

    public render() {
        const {classes } = this.props;

        return <div className={classes.root}>
            <form onClick={this.submitForm}>
                <input className={classes.input}
                    type="text"
                    placeholder='Enter city'
                    value={this.props.value}
                    onChange={this.onChange}
                />
                <button className={classes.searchBtn}
                    onClick={this.searchCity}
                >
                    Search
                </button>

            </form>
        </div>;
    }
}

const WrappedCity = withStyles(styles)(Search);

export {WrappedCity as Search};