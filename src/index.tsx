import React from 'react';
import Navigator from './config/Navigator';
import {Provider} from 'react-redux';
import configureStore from './store/store';

const store = configureStore({});

const App = () => {
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
};

export default App;
