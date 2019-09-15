import * as React from 'react';
import withStyles, { WithStyles } from 'react-jss';
import styles from './Header.styles';
import {Link} from "react-router-dom";


const Header: React.FC<WithStyles<typeof styles>> = ({classes}) => {

	return <div className={classes.root}>
		<h1>Wether App</h1>
	</div>;
};

const ConnectedComponent = withStyles(styles)(Header);

export { ConnectedComponent as Header };



