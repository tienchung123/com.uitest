/**
 * @format
 */
// import {AppRegistry} from 'react-native';
import App from './App';

import './LoadingIcon';

import { Navigation } from "react-native-navigation";
import { registerScreens } from './src/screen/index';

registerScreens();

Navigation.events().registerAppLaunchedListener(()=>{
  Navigation.setRoot({
    root:{
      component: {name: 'LoadingScreen'}
    }
  })
})

