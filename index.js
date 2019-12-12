import React from 'react';
import {AppRegistry} from 'react-native';
import App from './src';
import {name as appName} from './app.json';
import Navigator from './src/config/Navigator';

AppRegistry.registerComponent(appName, () => Navigator);
