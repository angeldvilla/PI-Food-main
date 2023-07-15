/* ------------------------------------------------------------- */ 
import reportWebVitals from './reportWebVitals';
import React from 'react'; 
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './redux/store/store';
import './index.css';
/* ------------------------------------------------------------- */ 

/* FORMA DE ENVOLVER LA APP PARA VERSION DE REACT < 18 */

/* import ReactDOM from 'react-dom';*/

/* ReactDOM.render(
  <React.StrictMode>
        <App />
  </React.StrictMode>,
  document.getElementById('root')
); */

/* FORMA DE ENVOLVER LA APP PARA VERSION DE REACT > 18 */
createRoot(document.getElementById('root'))
.render(
  <Provider store={store}>
    <BrowserRouter>
       <App />
    </BrowserRouter>
  </Provider>
);




//--------------------------------------------------------------------------//
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();