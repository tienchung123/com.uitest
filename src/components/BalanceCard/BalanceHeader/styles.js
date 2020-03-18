import { StyleSheet, Platform } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 0.4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between',
    marginHorizontal: 20,

    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0'
  },
  titlewrap: {
    flexDirection: 'row'
  },
  text: {
    ...Platform.select({
      android :{
        fontFamily: 'sans-serif',
      }
    }),
    
    fontSize: 20,
    fontWeight: 'bold'
  },
  textBalance: {
    ...Platform.select({
      android :{
        fontFamily: 'sans-serif',
      }
    }),
    fontSize: 25,
    fontWeight:'bold',
    marginRight:10
  }
})