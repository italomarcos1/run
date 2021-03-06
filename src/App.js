import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ToastContainer } from 'react-toastify';
import './config/ReactotronConfig';
import { store, persistor } from './store';

import Routes from './routes';
import GlobalStyle from './styles/global';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Routes />
        <GlobalStyle />
        <ToastContainer autoClose={3000} />
      </PersistGate>
    </Provider>
  );
}
