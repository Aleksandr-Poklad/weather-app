import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './components/App';
import { ConnectedRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { ThemeProvider } from 'react-jss';
import { theme } from './styles';
import { Provider } from 'react-redux';
import  createStore from './store';

// const store = createStore();
export const history = createBrowserHistory();
const store = createStore(history);

ReactDOM.render(

        <ThemeProvider theme={theme}>
            <Provider store={store}>
                <ConnectedRouter history={ history }>
                    <App/>
                </ConnectedRouter>
            </Provider>
        </ThemeProvider>
        ,
        document.getElementById('root')
);


