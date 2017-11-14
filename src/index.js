// Import deps
import React from 'react';
import ReactDOM from 'react-dom';

// Import containers
import App from './containers/App';

// Import Utils
import registerServiceWorker from './utilities/registerServiceWorker';

// Define app container
const MOUNT_NODE = document.getElementById('root');


// Render app
const render = () => {
  if (!MOUNT_NODE) return;
  ReactDOM.render(
      <App />
    MOUNT_NODE,
  );
};

render();
registerServiceWorker();

// Turn on hot module reloading - Refreshes the page content on code change without reloading the page.
if (module.hot) {
  module.hot.accept()
}
