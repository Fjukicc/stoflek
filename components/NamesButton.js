import React from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';
import {Colors} from '../static/Colors';

const NamesButton = ({children, onPress}) => {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable style={({pressed})=> pressed ? [styles.buttonInnerContainer, styles.pressed] : styles.buttonInnerContainer} 
      onPress={onPress} 
      android_ripple={{opacity: '0.75'}}>
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonOuterContainer: {
    overflow: 'hidden',
    width: '100%',
  },
  buttonInnerContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.third,
    paddingVertical: 12,
    paddingHorizontal: 16,
    elevation: 2,
    height: '100%',
  },
  buttonText: {
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
    fontSize: 24,
    letterSpacing: 2.2,
  },
  pressed:{
      opacity: 0.75,
  }
});


export default NamesButton;

