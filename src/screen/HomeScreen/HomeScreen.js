import React, { PureComponent } from 'react';
import { View, Text, StyleSheet, ImageBackground, Dimensions, StatusBar, SafeAreaView } from 'react-native';
import { BalanceCard } from '../../components';
import Categories from '../../components/Categories';


import { Config } from '../../common';
import Icon from 'react-native-vector-icons/FontAwesome';

const { width, height } = Dimensions.get('window')

export default class HomeScreen extends PureComponent {
  static options(passProps) {
    return {
      statusBar: {
        visible: false,
        // style: 'dark'
      },

    }
  }

  componentDidMount() {
    // console.log(global.icons)

  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.banner}>
          <ImageBackground
            source={{ uri: 'https://img2.thuthuatphanmem.vn/uploads/2018/12/30/anh-background-dep-nhat_110341130.jpg' }}
            style={{ flex: 1, alignItems: 'center' }}
          >
            <Text style={styles.title}>Good Afternoon</Text>
          </ImageBackground>
        </View>

        <View style={{ backgroundColor: 'white', }}>
          <BalanceCard />
          <Categories
            items={Config.HomeCategories}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEEEEE'
  },
  banner: {
    width,
    height: 150
  },
  title: {
    paddingTop: 20,
    fontSize: 20,
    color: '#3E6763',
    // fontWeight: "100",
    ...Platform.select({
      android: {
        fontFamily: 'sans-serif',
      },
      ios: {
        marginTop: 20,
      }
    }),
  }

})