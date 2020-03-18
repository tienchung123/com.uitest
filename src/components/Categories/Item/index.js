import React, { PureComponent } from 'react';
import {
  View, Text, TouchableOpacity,
  Image
} from 'react-native';
import styles from './styles';

const Item = ({
  label,
  item
}) => (
    <TouchableOpacity
      style={styles.wrap}
      activeOpacity={0.8}>
      <View style={[styles.background, { opacity: 0.08, backgroundColor: 'green' }]} />

      <View style={styles.iconView}>
        <Image
          source={item.image}
          style={[styles.icon]}
        />
      </View>

      <Text style={[styles.title, { color: 'black' }]}> {label} </Text>
    </TouchableOpacity>
  );

export default Item;
