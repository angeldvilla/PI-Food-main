/* import ReactDOM from 'react-dom';
import React from 'react'; */
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
/* import { Provider } from 'react-redux';
import store from './redux/store'; */

/* ReactDOM.render(
  <React.StrictMode>
        <App />
  </React.StrictMode>,
  document.getElementById('root')
); */


createRoot(document.getElementById('root'))
.render(
    <BrowserRouter>
       <App />
    </BrowserRouter>
);






//--------------------------------------------------------------------------//
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
