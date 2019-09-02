import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './components/App';
import { ThemeProvider } from 'react-jss';
import { theme } from './styles';


ReactDOM.render(
        <ThemeProvider theme={theme}>
            <App/>
        </ThemeProvider>,
        document.getElementById('root')
);


