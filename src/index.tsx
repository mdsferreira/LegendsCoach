import React, {useEffect} from 'react';
import Navigator from './config/Navigator';
import {Provider} from 'react-redux';
import configureStore from './store/store';
import SplashScreen from 'react-native-splash-screen';

const store = configureStore({});

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
};

export default App;
