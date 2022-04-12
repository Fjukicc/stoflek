import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Image, ImageBackground} from 'react-native';
import PrimaryButton from '../components/PrimaryButton';
import {useNavigation, useRoute} from '@react-navigation/native';
import background from '../assets/madarske-karte/bg-game.jpg';
import {LinearGradient} from 'expo-linear-gradient';

//NAVBAR
import GameNav from '../components/gamecomponents/GameNav';

//core game function
import {gameMotor, whatCard} from '../gameMotor';

//object containing all cards
import {PlayingCards} from '../PlayingCards';
//COLORS
import {Colors} from '../static/Colors';
import CardScreen from '../components/gamecomponents/CardScreen';

const OneMobileGameScreen = () => {
  //KORISTI NAVIGACIJU
  const navigation = useNavigation();
  const [cardRule, setCardRule] = useState(0);
  //DEK KARATA
  const cardDeck = PlayingCards;
  //MIN MAX ZA DEK
  const MIN = 0,
    MAX = 31;

  //UZIMANJE PROPSA IZ NATIVE NAVIGATION
  const route = useRoute();
  const numberOfPlayers = route.params.otherParams.numberOfPlayers;
  const playersNames = route.params.otherParams.playersNames;
  //COUNTER
  const [counter, setCounter] = useState(0);
  //UPDATE DEK
  const [updateCard, setUpadateCard] = useState(1);
  //FUNKCIJA ZA NOVU KARTU I BIRA ZA TU KARTU TEKST
  function changeCardHandler() {
    let randomNumber = gameMotor(MIN, MAX);
    setCounter(counter + 1);
    setUpadateCard(randomNumber);
    setCardRule(whatCard(randomNumber, cardDeck));
  }
  if(counter >= numberOfPlayers){
    setCounter(0);
  }
  //RESET COUNTER FUNKCIJA
  //ZA RENDERANJE IMENA IGRACA

  function exitGameHandler() {
    navigation.navigate('MenuScreen');
  }

  return (
    <LinearGradient colors={['#004d00', 'black']} style={styles.globalContainer}>
      <ImageBackground
        source={background}
        resizeMode="cover"
        style={styles.contentContainer}
        imageStyle={styles.bgImage}
      >
      <GameNav
          exitGameHandler={exitGameHandler}
          setCounter={setCounter}
          counter={counter}
          numberOfPlayers={numberOfPlayers}
          playersNames={playersNames}
        />
        <CardScreen changeCardHandler={changeCardHandler} cardDeck={cardDeck}
          updateCard={updateCard} cardRule={cardRule}
        />
      </ImageBackground>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  cardContainer: {},
  globalContainer: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bgImage: {
    opacity: 0.3,
  },
});


export default OneMobileGameScreen;
