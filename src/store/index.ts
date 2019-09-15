// @ts-ignore
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { History } from 'history';
import thunk from 'redux-thunk';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import weather, { weatherMiddleWares, WeatherState } from './weather';

// @ts-ignore
const composeEnhancers = (process.env.NODE_ENV !== 'production' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
    // @ts-ignore
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;

export interface AppState {
    weather: WeatherState;
}

const rootReducer = (history: History) => combineReducers(
        {
            weather,
            router: connectRouter(history),
        }
);

export default (history) => {
    return createStore(
            rootReducer(history),
            undefined,
            composeEnhancers(
                    // @ts-ignore
                    applyMiddleware(
                            thunk,
                            routerMiddleware(history),
                            ...weatherMiddleWares
                    )
            )
    );
};
