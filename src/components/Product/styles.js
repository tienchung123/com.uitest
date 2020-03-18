import { StyleSheet, Dimensions } from "react-native";

const {width, heigth} = Dimensions.get('window')

const boxSize = (width - 10)/2

export default StyleSheet.create({
  productContainer:{
    marginRight: 5,
    marginBottom:5,
    borderWidth:1,
    borderColor:'#E0E0E0'
  },
  productImage:{
    width: boxSize,
    height: boxSize,
    resizeMode:'contain'
  },
  textPrice:{
    ...Platform.select({
      android :{
        fontFamily: 'sans-serif',
      }
    }),
    fontSize: 18,
    fontWeight:'bold' 
  }

})