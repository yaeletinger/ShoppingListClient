import ReactDOM from 'react-dom/client';
import React from 'react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import itemsSlice from './features/itemsSlice';
import { configureStore } from '@reduxjs/toolkit';
import { BrowserRouter } from 'react-router-dom';


//creating store for redux
const myStore = configureStore({
  reducer:{
    itemsSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={myStore}>
    <BrowserRouter>
         <App /> 
    </BrowserRouter>
     
    </Provider>
    </React.StrictMode>
  
);

reportWebVitals();
