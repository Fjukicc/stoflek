import React from 'react';
import {View, Text, StyleSheet, TextInput, ScrollView} from 'react-native';
import PrimaryButton from '../PrimaryButton';
import {Colors} from '../../static/Colors';
import Icon from 'react-native-vector-icons';

const HowManyPlayers = ({OnNextPress, numberOfPlayers, numberOfPlayersInputHandler}) => {

  return (
    <>
      <Text style={styles.howManyPlayersText} adjustsFontSizeToFit>NUMBER OF PLAYERS</Text>
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
      </View>
    </>
  )
};

const styles = StyleSheet.create({
    howManyPlayersText:{
        textAlign: 'center',
        color: Colors.third,
        fontSize: 48,
        fontWeight: 'bold',
        marginBottom: 6,
    },
    inputHowManyPlayers:{
        fontSize: 32,
        width: '100%',
        borderBottomWidth: 3,
        marginBottom: 16,
        borderBottomColor: Colors.third,
        textAlign: 'center',
        width: 70,
    },
    inputAndNextButtonContainer:{
        alignItems: 'center',
        display: 'flex',
        paddingVertical: 12,
    },    
})

export default HowManyPlayers;
