import * as React from 'react';
import { Link } from 'react-router-dom';
import withStyles, { WithStyles } from 'react-jss';
import styles from './NotFound.styles';


const NotFound: React.FC<WithStyles<typeof styles>> = ({classes}) => {

    return <div className={classes.root}>
        <h1>Ooops!</h1>
        <Link to={'/'}>
            <button>Back home</button>
        </Link>
    </div>;
};

const WrappedCity = withStyles(styles)(NotFound);

export {WrappedCity as NotFound};