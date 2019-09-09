import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './components/App';
import { ThemeProvider } from 'react-jss';
import { theme } from './styles';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import {reducer} from "./store/reducer";

const store = createStore(reducer);

ReactDOM.render(
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <App/>
            </ThemeProvider>
        </Provider>,
        document.getElementById('root')
);


