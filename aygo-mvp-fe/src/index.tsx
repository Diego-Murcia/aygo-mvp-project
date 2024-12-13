import React from 'react';
import ReactDOM from 'react-dom/client'; // Importa createRoot desde react-dom/client
import App from './App';

const rootElement = document.getElementById('root');
if (rootElement) {
    const root = ReactDOM.createRoot(rootElement); // Usa createRoot
    root.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );
}
