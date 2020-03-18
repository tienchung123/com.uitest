import React, { PureComponent } from 'react';
import { View, Text, FlatList } from 'react-native';
import Product from '../components/Product/Product';
import ProductHeader from '../components/Product/ProductHeader';
import ProductCategory from '../components/Product/ProductCategory';
import { Navigation } from 'react-native-navigation';

const listProduct = [
  {
    name: '',
    price: '',
    url: 'https://cf.shopee.vn/file/3319f8b98c17d4f54af4c4fd6b7256d3',
    local: 'Hà Nội'
  },
  {
    name: '',
    price: 1380000,
    url: 'https://cf.shopee.vn/file/fbea0a09d19f85394e02be5defbf3c50',
    local: 'Hà Nội'
  },
  {
    name: '',
    price: '',
    url: 'https://cf.shopee.vn/file/3319f8b98c17d4f54af4c4fd6b7256d3',
    local: 'Hà Nội'
  },
  {
    name: '',
    price: 1380000,
    url: 'https://cf.shopee.vn/file/0ed1c2350c8e5199bc59cbd715c5ca65',
    local: 'Hà Nội'
  },
  {
    name: '',
    price: 1380000,
    url: 'https://cf.shopee.vn/file/3319f8b98c17d4f54af4c4fd6b7256d3',
    local: 'Hà Nội'
  },
  {
    name: '',
    price: 1380000,
    url: 'https://cf.shopee.vn/file/fbea0a09d19f85394e02be5defbf3c50',
    local: 'Hà Nội'
  },

]

export default class ListProductScreen extends PureComponent {
  static options(passProps) {
    return {
      topBar: {
        visible: true,
        leftButtonColor: 'red',
        backButton: {
          visible: false
        },
        title: {
          text: 'Marketplace',
          fontSize: 25,
          fontWeight: 'bold',
        },
        // subtitle: {
        //   text: 'Subtitle',
        // }
      }
    }
  }

  onShowProductDetail = (item) => {
    Navigation.push(this.props.componentId, {
      component:{
        name:  'DetailScreen',
        passProps:{
          item: item
        }
      }
      
    })
  }

  renderItem = ({ item, index }) => {
    return (
      <Product
        item={item}
        onShowProductDetail={()=>this.onShowProductDetail(item)}
      />
    )

  }

  render() {
    // console.log('___', this.props)
    return (
      <View style={{flex:1}}>
        <ProductCategory />
        <ProductHeader />
        <FlatList
          keyExtractor={(item, index) => '' + index}
          data={listProduct}
          renderItem={this.renderItem}
          numColumns={2}
          contentContainerStyle={{ paddingBottom: 40 }}
        />
      </View>
    );
  }
}
