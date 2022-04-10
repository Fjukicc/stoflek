import React, {useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import PrimaryButton from '../components/PrimaryButton';

//core game function
import {gameMotor} from '../gameMotor';

//object containing all cards
import {PlayingCards} from '../PlayingCards';

const OneMobileGameScreen = () => {
  const [updateCard, setUpadateCard] = useState(1);

  function changeCardHandler() {
    let randomNumber = gameMotor(MIN, MAX);
    setUpadateCard(randomNumber);
  }

  const MIN = 0, MAX = 31;

  return (
    <View style={styles.globalContainer}>
      <Text>{PlayingCards[updateCard].title}</Text>
      <View style={styles.cardContainer}>
        <Image
          style={styles.cardImage}
          resizeMode="cover"
          source={PlayingCards[updateCard].image}
        />
      </View>
      <View>
        <PrimaryButton onPress={changeCardHandler}>NEW CARD</PrimaryButton>
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
