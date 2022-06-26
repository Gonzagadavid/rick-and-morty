import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from 'components/App';
import { Provider } from 'context/Provider';
import { Loading } from 'components/Loading';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <Provider>
    <Loading />
    <App />
  </Provider>,
);
