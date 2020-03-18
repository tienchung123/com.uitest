import React, { PureComponent } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';

export default class Product extends PureComponent {
  render() {
    const {
      item,
      onShowProductDetail
    } = this.props
    return (
      <TouchableOpacity
        style={styles.productContainer}
        activeOpacity={0.8}
        onPress={onShowProductDetail}
      >

        <Image style={styles.productImage} source={{ uri: item.url }} />

        <View style={{ marginHorizontal: 20 }}>
          {item.price
            ? (
              <Text style={styles.textPrice}>{item.price} đ</Text>
            )
            : <Text style={styles.textPrice}>Messenger seller </Text>
          }
          <Text style={[styles.textPrice, { color: '#9E9E9E', fontSize: 16 }]}>{item.local}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}
