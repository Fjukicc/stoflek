import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from 'react-native';
import PrimaryButton from '../components/PrimaryButton';
import {Colors} from '../static/Colors';
import {useNavigation} from '@react-navigation/native';
import HowManyPlayers from '../components/enternamecomponents/HowManyPlayers';
import PlayerNames from '../components/enternamecomponents/PlayerNames';

const EnterNamesScreen = () => {
  const navigation = useNavigation();
  const [numberOfPlayers, setNumberOfPlayers] = useState('');
  //izabran broj igraca
  const [choosenNumOfPlayers, setChoosenNumOfplayers] = useState(0);
  //imena igraca
  const [playersNames, setPlayersNames] = useState([]);
  //imena igraca dok se unosi input
  const [currentPlayerName, setCurrentPlayerName] = useState('');
  const [isNextButtonSuccess, setIsNextButtonSuccess] = useState(false);
  //counter do broja igraca
  const [playersCounter, setPlayersCounter] = useState(1);

  function onBackToMenuPress() {
    navigation.navigate('MenuScreen');
  }
  function numberOfPlayersInputHandler(text) {
    setNumberOfPlayers(text);
  }

  function resetInputHandler() {
    setNumberOfPlayers(null);
  }

  function onBackPress() {
    setIsNextButtonSuccess(!isNextButtonSuccess);
  }

  function onPlayersNameInputHandler(text){
    setCurrentPlayerName(text);
  }

  function playerNamesHandler(){
    let id=playersCounter;
    setPlayersNames((playerNames) => [...playerNames, {
        id: id,
        name: currentPlayerName,
    }])
    setPlayersCounter(playersCounter+1);
    setCurrentPlayerName('');
  }


  function onNextPress() {
    let choosenNumberOfPlayers = parseInt(numberOfPlayers);
    if (
      choosenNumberOfPlayers <= 1 ||
      choosenNumberOfPlayers >= 20 ||
      isNaN(choosenNumberOfPlayers)
    ) {
      Alert.alert('Invalid number', 'Number has to be between 2 and 20', [
        {
          text: 'Okay',
          style: 'destructive',
          onPress: resetInputHandler,
        },
      ]);
      return;
    }
    setChoosenNumOfplayers(choosenNumberOfPlayers);
    setIsNextButtonSuccess(!isNextButtonSuccess);
    setNumberOfPlayers(null);
  }


  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.enterNamesScreenContainer}>
        <View style={styles.mainInfoContainer}>
          {isNextButtonSuccess ? (
            <PlayerNames
              playersCounter={playersCounter}
              playerNamesHandler={playerNamesHandler}
              onPlayersNameInputHandler={onPlayersNameInputHandler}
              currentPlayerName={currentPlayerName}
              choosenNumOfPlayers={choosenNumOfPlayers}
              playersNames={playersNames}
            />
          ) : (
            <HowManyPlayers
              OnNextPress={onNextPress}
              numberOfPlayers={numberOfPlayers}
              numberOfPlayersInputHandler={numberOfPlayersInputHandler}
            />
          )}
        </View>
        <View style={styles.buttonsContainer}>
          {isNextButtonSuccess && (
              <PrimaryButton onPress={onBackPress}>Back</PrimaryButton>
          )}
          <PrimaryButton onPress={onBackToMenuPress}>
            Back To Menu
          </PrimaryButton>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  enterNamesScreenContainer: {
    flex: 1,
    width: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  mainInfoContainer: {
    maxWidth: '80%',
    width: '80%',
    height: 'auto',
    paddingVertical: 24,
    backgroundColor: Colors.secondary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
  },
  dividerText: {
    textAlign: 'center',
  },
  buttonsContainer:{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
  }
});

export default EnterNamesScreen;
