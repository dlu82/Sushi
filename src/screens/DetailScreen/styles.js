import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e9ecf4',
  },
  mainHead: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#1e283d',
    // letterSpacing: 1,
  },
  unitCircle: selected => ({
    justifyContent: 'space-evenly',
    marginRight: 20,
    backgroundColor: selected ? '#1e283d' : 'white',
  }),
  CircleText: selected => ({
    color: selected ? 'white' : '#1e283d',
  }),
  rowList: {
      // backgroundColor: 'black',
    margin: 20,
  },
  subHead: {
    color: '#767c8b',
    fontSize: 15,
  },
  quantityText: {
    color: '#414b5d',
    fontSize: 15,
    marginBottom: 25
  },
  orderPlacing: {
    height: 100,
    width: '90%',
    backgroundColor: 'white',
    alignSelf: 'center',
    marginTop: 30,
    borderRadius: 20,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  oderbuttn: {
    backgroundColor: '#1e283d',
    justifyContent: 'space-around',
    marginTop: 20,
    alignItems: 'center',
    height: 50,
    width: 170,
    borderRadius: 25,

  },
  unitPrice:{
    fontSize: 30, 
    color: '#1e283d', 
    fontWeight: 'bold', 
  },
  orderText:{
    color: 'white',
    fontWeight: 'bold'
  },
});

export default styles;
