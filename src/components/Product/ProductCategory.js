import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

const listCategory = [
  {
    name: 'Sell'
  },
  {
    name: 'Local'
  },
  {
    name: 'Vehicles'
  },
  {
    name: 'Rentals'
  }
]
const ProductCategory = ({
  params,
}) => (
    <View>
      <View style={styles.container}>
        {listCategory.map((item, index) => (
          <TouchableOpacity style={styles.itemWrap} key={index} activeOpacity={0.6}>
            <Text style={styles.itemtext}>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.line} />
    </View>

  );

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 10,
    marginLeft: 20,
    marginBottom: 10

  },
  itemWrap: {
    padding: 10,
    backgroundColor: '#EEEEEE',
    marginRight: 10,
    borderRadius: 20
  },
  itemtext: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  line: {
    borderWidth: 0.5,
    borderColor: '#E0E0E0',
    marginHorizontal: 20,
    borderRadius: 10,
  }
});

export default ProductCategory;
