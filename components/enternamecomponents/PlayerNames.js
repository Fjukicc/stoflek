import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {Colors} from '../../static/Colors';
import PrimaryButton from '../PrimaryButton';

const PlayerNames = ({
  playerNamesHandler,
  choosenNumOfPlayers,
  onPlayersNameInputHandler,
  currentPlayerName,
  playersCounter,
  playersNames,
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
      <Text>{playersCounter}.</Text>
      <Text style={styles.titleText}>PLAYER NAME</Text>
      <TextInput
        placeholder="name"
        style={styles.inputStyle}
        onChangeText={onPlayersNameInputHandler}
        value={currentPlayerName}
      />
      <PrimaryButton onPress={playerNamesHandler}>Submit Name</PrimaryButton>
    </View>
  );
};

const styles = StyleSheet.create({
  titleText: {
    fontSize: 42,
    fontWeight: 'bold',
    letterSpacing: 2,
    textAlign: 'center',
  },
  inputStyle: {
    width: '90%',
    height: 46,
    fontSize: 32,
    borderColor: Colors.primary,
    borderWidth: 3,
    backgroundColor: Colors.primary,
    textAlign: 'center',
    color: Colors.secondary,
    marginBottom: 24,
    marginTop: 16,
  },
});

export default PlayerNames;
