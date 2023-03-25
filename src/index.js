import { ColorModeScript } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorker';
import '@aws-amplify/ui-react/styles.css';
import ScrollToTop from './components/ScrollToTop';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <BrowserRouter>
  <ScrollToTop>
    <StrictMode>
      <ColorModeScript />
      <App />
    </StrictMode>
    </ScrollToTop>
  </BrowserRouter>
);

serviceWorker.unregister();
reportWebVitals();
