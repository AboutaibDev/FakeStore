import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App'
import { Provider } from 'react-redux';
import { enableMapSet } from 'immer';
import { store } from './Project/fakeStore/Redux/store/stateStore';

enableMapSet();
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

reportWebVitals();