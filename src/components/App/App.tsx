import * as React from 'react';
import withStyles, {WithStyles} from 'react-jss';
import styles from './App.styles';

interface State {

}

class App extends React.Component<WithStyles<typeof styles>, State> {
	public render() {
		const {classes} = this.props;
		return <div className={ classes.root }>
			sjkdfhgksdfhgk
		</div>;
	}
}

const WrappedApp = withStyles(styles)(App);

export { WrappedApp as App };
