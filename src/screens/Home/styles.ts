import { StyleSheet } from 'react-native';
import { getHeight, getWidth } from '../../utils/style';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  top: {
    backgroundColor: '#F03955',
    flex: 0.7,
    borderBottomRightRadius: getWidth(130),
    alignItems: 'center',
    justifyContent: 'center'
  },
  logoTxt: {
    fontFamily: 'sigmar',
    fontSize: getHeight(40),
    color: '#fff'
  },
  googletxt: {
    fontSize: getHeight(13),
    marginLeft: getWidth(10),
    fontFamily: 'ubuntu'
  },
  locations: {
    backgroundColor: '#fff',
    height: getHeight(120),
    width: getWidth(300),
    alignSelf: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: getHeight(50),
    borderRadius: getWidth(6),
    flexDirection: 'column',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    paddingHorizontal: getWidth(15),
    justifyContent: 'space-between'
  },
  divider: {
    width: getWidth(300),
    backgroundColor: '#F03955',
    height: getHeight(1)
  },
  row: {
    flexDirection: 'row',
    height: getHeight(40),
    alignItems: 'center',
    width: getWidth(270),
    marginTop: getHeight(15)
  },
  row2: {
    flexDirection: 'row',
    height: getHeight(40),
    alignItems: 'center',
    width: getWidth(270),
    marginBottom: getHeight(15),
    // justifyContent: 'space-between'
  },
  input: {
    width: getWidth(200),
    height: getHeight(40),
    marginLeft: getWidth(10),
    fontSize: getHeight(16),
    fontFamily: 'ubuntu'
  },
});


export default styles
