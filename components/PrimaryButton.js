import React from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';
import {Colors} from '../static/Colors';

const PrimaryButton = ({children, onPress, width}) => {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable style={({pressed})=> pressed ? [styles.buttonInnerContainer, styles.pressed] : styles.buttonInnerContainer} 
      onPress={onPress} 
      android_ripple={{color: '#ddb52g'}}>
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 8,
    margin: 8,
    overflow: 'hidden',
  },
  buttonInnerContainer: {
    backgroundColor: Colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    letterSpacing: 2.2,
  },
  pressed:{
      opacity: 0.75,
  }
});


export default PrimaryButton;

