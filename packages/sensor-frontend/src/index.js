import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import configureStore from './configureStore'
import { registerWebsocketHandlers, startConnectionMonitor } from './utilities/websockets';

const store = configureStore()

const renderApp = () => {
  ReactDOM.render(
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>,
    document.getElementById('root')
  );
}

if (process.env.NODE_ENV !== 'production' && module.hot) {
  module.hot.accept('./App', renderApp)
}

reportWebVitals(console.log);

renderApp();
registerWebsocketHandlers(store);
startConnectionMonitor(store);