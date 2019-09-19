import * as React from 'react';
import { Route, RouteProps, Redirect } from 'react-router';
import { PATHES } from '../App/App.pathes';
import { AppState } from '../../store';
import { connect } from 'react-redux';

interface StateProps {
    isSignedIn: boolean;
}

const ProtectedRoute: React.FC<StateProps & RouteProps> = ({ isSignedIn, ...props}) => {
    return <Route { ...props } />
};

const mapStateToProps = (state: AppState) => {
    return {
        isSignedIn: true
    };
};

const ConnectedProtectedRoute = connect<StateProps, undefined, RouteProps>(mapStateToProps)(ProtectedRoute);

export { ConnectedProtectedRoute as ProtectedRoute };