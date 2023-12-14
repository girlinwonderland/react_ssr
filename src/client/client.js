import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import axios from 'axios';
import { Routers } from './Routes';
import reducers from './reducers';

const axiosInstance = axios.create({
    baseURL: '/api'
})

const store = createStore(reducers, window.INITIAL_STATE, applyMiddleware(thunk.withExtraArgument(axiosInstance)));

hydrateRoot(
    document.getElementById('root'),
    <Provider store={store}>
        <BrowserRouter>
            <Routers />
        </BrowserRouter>
    </Provider>
);
