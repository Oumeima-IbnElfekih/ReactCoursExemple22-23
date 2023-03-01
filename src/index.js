import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter} from 'react-router-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import compteurReducer from './ExempleRedux/reducers'
// import store from './ReduxToolKit/store';
export const MyContext = React.createContext();
const root = ReactDOM.createRoot(document.getElementById('root'));
//creation du store 
let store = createStore(compteurReducer,
  // window.__REDUX_DEVTOOLS_EXTENSION__ / window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
   );
 // console.log(store);
 // store.subscribe(()=> console.log(store.getState()))
root.render(
  <React.StrictMode>
   <BrowserRouter>
   <Provider store={store}> <App /> </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
