import React, { FC } from 'react';
import { Provider } from 'react-redux';
import store from '../../store/store';
import Routes from '../Routes/Routes';
import './App.scss';

const App: FC<any> = () => {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};

export default App;
