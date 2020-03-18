import React, { PureComponent } from 'react';
import {  View, Text } from 'react-native';

export default class DetailScreen extends PureComponent {
  static options(passProps) {
    return {
      topBar: {
        visible: true,
        title: {
          text: 'Detail',
          fontSize: 25,
          fontWeight: 'bold',
        },
        // subtitle: {
        //   text: 'Subtitle',
        // }
      }

    }
  }
  render() {
    const {
      item
    }= this.props

    return (
      <View style={{flex:1, justifyContent: 'center', alignItems:'center'}}>
        <Text>{JSON.stringify(item)}</Text>
      </View>
    );
  }
}
