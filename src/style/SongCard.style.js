import {StyleSheet, Platform} from 'react-native';

export default StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'row',
  },
  image: {
    width: Platform.OS === 'android' ? 75 : 100,
    height: Platform.OS === 'android' ? 75 : 100,
    borderRadius: 50,
    alignSelf: 'center',
  },
  inner_container: {
    flex: 1,
    flexDirection: 'column',
    padding: 10,
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  info_container: {
    flexDirection: 'column',
    width: 125,
    justifyContent: 'flex-start',
  },
  album: {
    fontStyle: 'italic',
    color: 'grey',
  },
  yearBox: {
    width: 50,
    height: 40,
    marginTop: 10,
  },
  year: {
    marginLeft: 10,
    color: 'grey',
    fontWeight: 'bold',
    fontSize: 12,
  },
  content_container: {
    flexDirection: 'row',
  },
  soldout_container: {
    borderWidth: 1,
    width: 65,
    height: 30,
    borderColor: 'red',
    padding: 5,
    borderRadius: 5,
    marginTop: 20,
    marginLeft: 10,
    justifyContent: 'center',
  },
  soldout_title: {
    color: 'red',
    fontSize: 12,
  },
});
