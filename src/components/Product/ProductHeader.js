import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

const ProductHeader = ({
  params,
}) => (
    <View style={styles.container}>
      <Text style={styles.textHeader}>Today's Picks</Text>
      <View style={styles.localwrap}>
        <Image style={styles.icon} source={require('../../images/icon/location.png')} />
        <Text style={{ fontSize: 15, color: '#2196F3' }}>Hà Nội</Text>
      </View>
    </View>
  );

const styles = StyleSheet.create({
  container: {
    height: 55,
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: 'center',
    marginHorizontal: 20,
    // backgroundColor: 'red',
  },
  localwrap: {
    flexDirection: 'row',
    marginRight: 10
  },
  textHeader: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  icon: {
    width: 15,
    height: 15,
    resizeMode: 'contain',
    marginRight: 5,
    tintColor: '#2196F3'
  }
});

export default ProductHeader;
