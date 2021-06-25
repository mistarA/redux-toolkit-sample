/**
 * @format
 */

import React from 'react';
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

const AppMain = () => <App />;
AppRegistry.registerComponent(appName, () => AppMain);
