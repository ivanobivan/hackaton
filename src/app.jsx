import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './components/App'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import './styles/app.css'
import '../node_modules/react-bootstrap/dist/react-bootstrap'
import configStore from './store/createStore'

const store = configStore();

function app() {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>
    )
};

ReactDom.render(app(), document.getElementById('root'));
