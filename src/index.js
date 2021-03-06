import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider} from 'react-redux'
import * as serviceWorker from './serviceWorker';
import { store, persistor } from './redux/store';
import persistReducer from 'redux-persist/lib/persistReducer';

ReactDOM.render(
  
    <Provider store={store}>
      <BrowserRouter>
      <PersistGate persistor={persistor}>
      <App />
      </PersistGate>
      </BrowserRouter>
    </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
