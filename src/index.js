import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { CreateClassContext } from './context/createclasscontext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CreateClassContext>
    <App />
  </CreateClassContext>
    
  
);

