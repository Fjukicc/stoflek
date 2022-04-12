import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {Colors} from '../../static/Colors';
import PrimaryButton from '../PrimaryButton';

const PlayerNames = ({
  choosenNumOfPlayers,
  onPlayersNameInputHandler,
  currentPlayerName,
  playersCounter,
  playersNames
}) => {

  const navigation = useNavigation();
  function nameInputOver() {
    if (playersCounter > choosenNumOfPlayers) {
      navigation.navigate('Confirmation', {
        categoryId: '1',
        otherParams: {
          choosenNumOfPlayers,
          playersNames,
        },
      });
    }
  }

  useEffect(() => {
    nameInputOver();
  }, [playersCounter]);



  return (
    <View style={{width: '100%', alignItems: 'center'}}>
      <Text style={styles.numberOfPlayersText}>{playersCounter}.</Text>
      <Text style={styles.titleText}>PLAYER NAME</Text>
      <TextInput
        placeholder="name"
        style={styles.inputStyle}
        onChangeText={onPlayersNameInputHandler}
        value={currentPlayerName}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  titleText: {
    fontSize: 42,
    fontWeight: 'bold',
    letterSpacing: 2,
    textAlign: 'center',
    color: Colors.third,
  },
  inputStyle: {
    maxWidth: 300,
    width: '60%',
    height: 46,
    fontSize: 32,
    borderBottomColor: Colors.secondary,
    borderBottomWidth: 4,
    textAlign: 'center',
    color: Colors.secondary,
    marginBottom: 24,
  },
  numberOfPlayersText:{
    textAlign: 'center',
    fontSize: 36,
    fontWeight: 'bold',
    color: Colors.third,
  }
});

export default PlayerNames;
