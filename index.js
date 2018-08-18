/** @format */

import { AppRegistry } from 'react-native';
import RootStack from './src/RootStack';
import { name as appName } from './app.json';

console.disableYellowBox = true;

AppRegistry.registerComponent(appName, () => RootStack);
