import React from 'react';
import {Image, Platform} from 'react-native';
import { Navigation } from 'react-native-navigation';
import App from '../../App';

import HomeScreen from './HomeScreen/HomeScreen';
import LoadingScreen from './LoadingScreen';
import ListProductScreen from './ListProductScreen';
import DetailScreen from './DetailScreen';

export const registerScreens = () => {
  Navigation.registerComponent(`App`, () => App)
  Navigation.registerComponent(`HomeScreen`, () => HomeScreen)
  Navigation.registerComponent(`LoadingScreen`, () => LoadingScreen)
  Navigation.registerComponent('ListProductScreen', () => ListProductScreen)
  Navigation.registerComponent('DetailScreen', () => DetailScreen)
}
var selectedIconColor = "#4CAF50";

const ActivityStack = {
  children: [
    {
      component: {
        name: 'ListProductScreen'
      }
    },
  ],
  options: {
    bottomTab: {
      animate: false,
      fontSize: 11,
      text: "Activity",
      icon: Platform.OS == 'ios' ? 'activity' : require('../images/icon/TabBaricon/activity.png'),
      selectedIconColor
    },
  }
}

export const gotoTabNavigator = (icons) => {

  Navigation.setRoot({
    // root: {
    //   stack: ActivityStack
    // }
    root: {
      bottomTabs: {
        children: [
          {
            component: {
              name: 'HomeScreen',
              options: {
                bottomTab: {
                  fontSize: 11,
                  text: "Home",
                  icon: Platform.OS == 'ios' ? 'home' : require('../images/icon/TabBaricon/home.png'),
                  // icon: {

                  //   uri: '../images/icon/TabBaricon/home.png')
                  // },
                  selectedIconColor
                }
              }
            }
          },
          {
            // component: {
            //   name: 'ListProductScreen',
            //   options: {
            //     bottomTab: {
            //       fontSize: 12,
            //       text: "Activity",
            //       icon: require('../images/icon/TabBaricon/activity.png'),
            //       selectedIconColor
            //     }
            //   }
            // }
            stack: ActivityStack
          },
          {
            component: {
              name: 'HomeScreen',
              options: {
                bottomTab: {
                  fontSize: 11,
                  text: "Payment",
                  icon: Platform.OS == 'ios' ? 'payment' :  require('../images/icon/TabBaricon/payment.png'),
                  selectedIconColor
                }
              }
            }
          },
          {
            component: {
              name: 'HomeScreen',
              options: {
                bottomTab: {
                  fontSize: 11,
                  text: "Inbox",
                  icon: Platform.OS == 'ios' ? 'inbox' :  require('../images/icon/TabBaricon/inbox.png'),
                  selectedIconColor
                  // disableIconTint: true, //set true if you want to disable the icon tinting
                  // disableSelectedIconTint: true,
                  // textColor: 'red',
                }
              }
            }
          }
        ],
        options: {
          bottomTabs: {
            visible: true,
            titleDisplayMode: 'alwaysShow',
          },   
        },
      }
    }
  })

}