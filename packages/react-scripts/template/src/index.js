import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configure-store';
import App from './App';
import './bootstrap/bootstrap.css';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

// import DevTools from './DevTools';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <div>
      <App />
      {/*<DevTools/>*/}
    </div>
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();
