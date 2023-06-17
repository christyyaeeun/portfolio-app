import { ColorModeScript } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorker';
import '@aws-amplify/ui-react/styles.css';
// import ScrollToTop from './components/ScrollToTop';
import awsconfig from './aws-exports';
import { Amplify } from 'aws-amplify';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <BrowserRouter>
    <StrictMode>
      <ColorModeScript />
      <App />
    </StrictMode>
  </BrowserRouter>
);

Amplify.configure(awsconfig);
serviceWorker.unregister();
reportWebVitals();
