import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import PrimaryButton from '../PrimaryButton';
import {Colors} from '../../static/Colors';

const HowManyPlayers = ({OnNextPress, numberOfPlayers, numberOfPlayersInputHandler}) => {
  return (
    <>
      <Text style={styles.howManyPlayersText}>How Many Players?</Text>
      <View style={styles.inputAndNextButtonContainer}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputHowManyPlayers}
            placeholder="ex.4"
            maxLength={2}
            autoCapitalize="none"
            keyboardType="number-pad"
            autoCorrect={false}
            value={numberOfPlayers}
            onChangeText={numberOfPlayersInputHandler}
          />
        </View>
        <PrimaryButton onPress={OnNextPress}>Next</PrimaryButton>
      </View>
    </>
  )
};

const styles = StyleSheet.create({
    howManyPlayersText:{
        textAlign: 'center',
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 24,
    },
    inputHowManyPlayers:{
        fontSize: 32,
        borderBottomWidth: 3,
        borderBottomColor: Colors.primary,
        width: 60,
        textAlign: 'center',
    },
    inputAndNextButtonContainer:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
        maxWidth: 300,
    },    
})

export default HowManyPlayers;
