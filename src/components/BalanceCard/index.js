import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BalanceHeader from './BalanceHeader';
import BalanceCategory from './BalanceCategory';

const balanceCategory = [
  {
    name: 'Pay',
    icon: require('../../images/icon/pay.png')
  },
  {
    name: 'Request',
    icon: require('../../images/icon/request.png')
  },
  {
    name: 'Top Up',
    icon: require('../../images/icon/topup.png')
  },
  {
    name: 'Rewards',
    icon: require('../../images/icon/reward.png')
  }

];

export default class BalanceCard extends Component {

  render() {
    return (
      <View style={styles.container}>
          <BalanceHeader />
          <BalanceCategory category={balanceCategory} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal:10,
    height: 150,
    backgroundColor: 'white',
    marginTop: -150 / 2,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },

    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    
  },


});