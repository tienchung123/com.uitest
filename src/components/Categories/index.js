import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import Item from './Item';

import styles from './styles';

export default class Categories extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const {
      items 
    } = this.props

    return (
      <FlatList 
        data={items}
        keyExtractor={(item, index) => `${index}`}
        renderItem = {({item})=>{
          return(
            <Item item={item} label={item.category}/>
          )
        }}
        showsVerticalScrollIndicator={false}
        // overScrollMode={'never'}
        numColumns = {4}
        contentContainerStyle={styles.flatlist}
        
      />
    );
  }
}
