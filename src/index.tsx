import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { GlobalStyle } from './styles';
import './index.css';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <GlobalStyle />
        <div className="background"></div>
        <div className="content">
            <App />
        </div>
    </React.StrictMode>
);

reportWebVitals();
