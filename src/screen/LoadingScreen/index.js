import React, { PureComponent } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import {gotoTabNavigator} from '../index';

export default class index extends PureComponent {
  componentDidMount(){
    // console.log('loadingscreen', global.icons)
  }

  render() {
    
    return (
      <View style={{ flex: 1 }}>
        {! global.icons && <ActivityIndicator size={"large"} />}
        {gotoTabNavigator(global.icons)}

        
        
      </View>
    );
  }
}
