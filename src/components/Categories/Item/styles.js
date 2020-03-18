import { StyleSheet, Dimensions } from 'react-native'

const { width } = Dimensions.get('window')

export default StyleSheet.create({
  container: {
    paddingLeft: 5,
    paddingRight: 6,
    width: 90,
    marginTop: 20,

    borderWidth: 2,
    borderColor: 'black'
  },
  wrap: {
    alignItems: 'center',
    width: (width - 20) / 4,

  },
  background: {
    backgroundColor: '#f1f1f1',

    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  // button: {
  //   width: 60,
  //   height: 60,
  //   borderRadius: 30,
  //   alignItems: 'center',
  //   justifyContent: 'center'
  // },

  iconView: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',

  },
  icon: {
    width: 45,
    height: 45,
    resizeMode: 'center',
    tintColor: '#4CAF50',
    marginBottom: 18,

  },
  title: {
    marginTop: 6,
    fontSize: 13,
    opacity: 0.9
  },

})
