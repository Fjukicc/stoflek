import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import PrimaryButton from '../components/PrimaryButton';
import {useNavigation, useRoute} from '@react-navigation/native';

//core game function
import {gameMotor, whatCard} from '../gameMotor';

//object containing all cards
import {PlayingCards} from '../PlayingCards';


const OneMobileGameScreen = () => {
  //KORISTI NAVIGACIJU
  const navigation = useNavigation();
  const [cardRule, setCardRule] = useState(0);
  //DEK KARATA
  const cardDeck = PlayingCards;
  //MIN MAX ZA DEK
  const MIN = 0, MAX = 31;

  //UZIMANJE PROPSA IZ NATIVE NAVIGATION
  const route = useRoute();
  const numberOfPlayers = route.params.otherParams.numberOfPlayers;
  const playersNames = route.params.otherParams.playersNames;
  //COUNTER
  const [counter, setCounter] = useState(0);
  //UPDATE DEK
  const [updateCard, setUpadateCard] = useState(1);

  function changeCardHandler() {
    let randomNumber = gameMotor(MIN, MAX);
    setCounter(counter+1);
    setUpadateCard(randomNumber);
    setCardRule(whatCard(randomNumber, cardDeck));
  }

  function resetCoutner(){
    setCounter(0);
  }

  function renderNameFunction(){
    if(counter >= numberOfPlayers){
      resetCoutner();
    }
    else{
      return(<Text>{playersNames[counter].name}</Text>);
    }
  }

  function exitGameHandler(){
    navigation.navigate('MenuScreen');
  }


  return (
    <View style={styles.globalContainer}>
      {renderNameFunction()}
      <Text>{cardDeck[updateCard].title}</Text>
      <View style={styles.cardContainer}>
        <Image
          style={styles.cardImage}
          resizeMode="cover"
          source={cardDeck[updateCard].image}
        />
      </View>
      <View>
        <PrimaryButton onPress={changeCardHandler}>NEW CARD</PrimaryButton>
      </View>
      <View>
        <Text>{cardRule}</Text>
      </View>
      <View>
        <PrimaryButton onPress={exitGameHandler}>EXIT GAME</PrimaryButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {},
  cardImage: {},
  globalContainer:{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
  }
});

export default OneMobileGameScreen;
