import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from 'react-native';
import NamesButton from '../components/NamesButton';
import {Colors} from '../static/Colors';
import {useNavigation, useRoute} from '@react-navigation/native';
import HowManyPlayers from '../components/enternamecomponents/HowManyPlayers';
import PlayerNames from '../components/enternamecomponents/PlayerNames';
import background from '../assets/madarske-karte/input-bg.jpg';
import Header from '../components/Header';

const EnterNamesScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
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


  console.log(playersNames);

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
    if(isNextButtonSuccess===true){
      //DORADITI DA AKO SE N IGRAC UPISUJE DA IDE NAZAD
      setIsNextButtonSuccess(false);
      setPlayersNames([]);
      setPlayersCounter(1);
    }
    if(isNextButtonSuccess===false){
      onBackToMenuPress();
    }
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
      choosenNumberOfPlayers >= 12 ||
      isNaN(choosenNumberOfPlayers)
    ) {
      Alert.alert('Invalid number', 'Number has to be between 2 and 12', [
        {
          text: 'Okay',
          style: 'destructive',
          onPress: resetInputHandler,
        },
      ]);
      return;
    }
    setChoosenNumOfplayers(choosenNumberOfPlayers);
    setIsNextButtonSuccess(true);
    setNumberOfPlayers(null);
  }

  return (
    <TouchableWithoutFeedback  onPress={() => Keyboard.dismiss()}>
    <View style={styles.enterNamesScreenContainer}>
      <ImageBackground
        source={background}
        style={styles.enterNamesScreenContainer}
      >
        <Header />
        <View style={styles.mainInfoContainer} keyboardShouldPersistTaps="handled">
          {isNextButtonSuccess ? (
            <PlayerNames
              playersCounter={playersCounter}
              playerNamesHandler={playerNamesHandler}
              onPlayersNameInputHandler={onPlayersNameInputHandler}
              currentPlayerName={currentPlayerName}
              choosenNumOfPlayers={choosenNumOfPlayers}
              playersNames={playersNames}
              onBackPress={onBackPress}
            />
          ) : (
            <HowManyPlayers
              numberOfPlayers={numberOfPlayers}
              numberOfPlayersInputHandler={numberOfPlayersInputHandler}
            />
          )}
          <View style={styles.buttonsContainer}>
          <View style={styles.leftButtonContainer}>
          <NamesButton onPress={onBackPress}>
            { isNextButtonSuccess ? 'Back' : 'Menu'}
          </NamesButton>
          </View>
          <View style={styles.rightButtonContainer}>
          { isNextButtonSuccess ?<NamesButton onPress={playerNamesHandler}>Submit</NamesButton> :
          <NamesButton onPress={onNextPress}>Next</NamesButton>}
          </View>
        </View>
        </View>
        <View style={styles.footerContainer}/>
      </ImageBackground>
      </View>
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
