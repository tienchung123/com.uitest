import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

const BalanceHeader = ({
  params,
}) => (
    <View style={styles.container}>
      <View style={styles.titlewrap}>
        <Text style={[styles.text, {color:'#438EC3'}]}>moca</Text>
        <Text style={[styles.text]}> Balance</Text>
      </View>
      <View>
        <Text style={styles.textBalance}>0</Text>
      </View>
    </View>
  );

export default BalanceHeader;
