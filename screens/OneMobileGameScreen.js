import React, {useEffect, useState} from 'react';
import {Animated, StyleProp, StyleSheet,ViewStyle, Image, ImageBackground, Dimensions} from 'react-native';
import PrimaryButton from '../components/PrimaryButton';
import {useNavigation, useRoute} from '@react-navigation/native';
import background from '../assets/madarske-karte/play-bg.jpg';

//SWIPE RIGHT
import {
  Swipeable
} from 'react-native-gesture-handler/Swipeable';

//NAVBAR
import GameNav from '../components/gamecomponents/GameNav';

//core game function
import {gameMotor, whatCard} from '../gameMotor';

//object containing all cards
import {PlayingCards} from '../PlayingCards';
//COLORS
import {Colors} from '../static/Colors';
import CardScreen from '../components/gamecomponents/CardScreen';

const SCREEN_WIDTH = Dimensions.get('window').width;

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

    //SWIPE
    const leftSwipe = () =>{
      return(
        <CardScreen changeCardHandler={changeCardHandler} cardDeck={cardDeck}
          updateCard={updateCard} cardRule={cardRule}
        />
      )
    }

  return (
      <ImageBackground
        source={background}
        resizeMode="cover"
        style={styles.globalContainer}
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
  );
};

const styles = StyleSheet.create({
  cardContainer: {},
  globalContainer: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bgImage: {
    opacity: 1,
  },
});


export default OneMobileGameScreen;
