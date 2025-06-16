import {StyleSheet} from 'react-native';

 export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontSize: 28,
      fontWeight: 'bold',
      marginBottom: 40,
    },
    cardContainer: {
      width: 250,
      height: 350,
      borderWidth: 2,
      borderColor: '#bbb',
      borderRadius: 18,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#faf6e9',
      marginBottom: 40,
    },
    cardHint: {
      color: '#aaa',
    },
    cardName: {
      marginTop: 12,
      fontSize: 24,
      fontWeight: 'bold',
    },
    button: {
      backgroundColor: '#bb86fc',
      paddingHorizontal: 24,
      paddingVertical: 14,
      borderRadius: 8,
    },
    buttonText: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 18,
    }
  });