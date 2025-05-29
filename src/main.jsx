import { StrictMode } from 'react'
import { Provider } from 'react-redux';
import { store } from './app/store.js';
import { createRoot } from 'react-dom/client'
//import './index.css'
import App from './App.jsx'
//import { RouterProvider } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  
    <StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </StrictMode>,
  
  
);
