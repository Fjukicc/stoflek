import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  Text,
} from 'react-native';
import NamesButton from '../components/NamesButton';
import {Colors} from '../static/Colors';
import {useNavigation} from '@react-navigation/native';
import HowManyPlayers from '../components/enternamecomponents/HowManyPlayers';
import PlayerNames from '../components/enternamecomponents/PlayerNames';
import background from '../assets/madarske-karte/input-bg.png';
import Header from '../components/Header';

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

  function onPlayersNameInputHandler(text) {
    setCurrentPlayerName(text);
  }

  function playerNamesHandler() {
    let id = playersCounter;
    setPlayersNames((playerNames) => [
      ...playerNames,
      {
        id: id,
        name: currentPlayerName,
      },
    ]);
    setPlayersCounter(playersCounter + 1);
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
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={true}>
      <ImageBackground
        source={background}
        style={styles.enterNamesScreenContainer}
      >
        <Header />
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
              numberOfPlayers={numberOfPlayers}
              numberOfPlayersInputHandler={numberOfPlayersInputHandler}
            />
          )}
          <View style={styles.buttonsContainer}>
          <View style={styles.leftButtonContainer}>
          <NamesButton onPress={onBackToMenuPress}>
            Back
          </NamesButton>
          </View>
          <View style={styles.rightButtonContainer}>
          <NamesButton onPress={onNextPress}>Next</NamesButton>
          </View>
        </View>
        </View>
        <View style={styles.footerContainer}/>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  enterNamesScreenContainer: {
    width: '100%',
    flex: 1,
  },
  mainInfoContainer: {
    flex: 3,
    maxWidth: '100%',
    width: '100%',
    height: 'auto',
    paddingVertical: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dividerText: {
    textAlign: 'center',
  },
  footerContainer: {
    flex: 1,
  },
  buttonsContainer:{
    marginTop: 32,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    width: '94%',
    height: 64,
  },
  leftButtonContainer:{
    width: '50%',
    marginRight: 4,
    borderRightColor: 'black',
  },
  rightButtonContainer:{
    width: '50%',
    marginLeft: 4,
    borderLeftColor: 'black',
  }
});

export default EnterNamesScreen;
